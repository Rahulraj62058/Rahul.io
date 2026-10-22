/* ==========================================================================
   VS CODE EDITOR MANAGER
   Handles tabs, active file, breadcrumbs, gutter line numbers, minimap & outline
   ========================================================================== */

const Editor = (() => {
  let openTabs = [
    "about/README.md",
    "about/profile.json",
    "youtube/channels.yml",
    "platforms/platforms.tsx",
    "udemy/courses.md",
    "products/products.json",
    "connect/socials.ts",
    "LICENSE.txt",
    ".gitignore"
  ];
  let activeFilePath = "about/README.md";

  // Readability floor for the auto-fit: never shrink the document below 80%
  // of its natural size, otherwise short viewports render body text at ~9px.
  const MIN_DOC_SCALE = 0.8;
  const FIT_STEPS = 8;
  let frameObserver = null;
  let contentObserver = null;
  let lastFitHeight = -1;
  let lastFitWidth = -1;
  let rafId = null;
  let appliedScale = 1;

  function init() {
    renderTabs();
    renderFile(activeFilePath);
    setupScrollSync();
    setupAutoFitObserver();
  }

  function getFileIconSvg(iconType) {
    switch (iconType) {
      case "markdown":
      case "md":
        return `<span class="file-icon-square icon-md"></span>`;
      case "json":
        return `<span class="file-icon-square icon-json"></span>`;
      case "yaml":
      case "yml":
        return `<span class="file-icon-square icon-yml"></span>`;
      case "tsx":
      case "ts":
      case "typescript":
        return `<span class="file-icon-square icon-tsx"></span>`;
      case "txt":
      case "text":
        return `<span class="file-icon-square icon-txt"></span>`;
      case "git":
      case "gitignore":
        return `<span class="file-icon-square icon-git"></span>`;
      default:
        return `<span class="file-icon-square icon-md"></span>`;
    }
  }

  function renderTabs() {
    const tabsContainer = document.getElementById("editor-tabs");
    if (!tabsContainer) return;

    tabsContainer.innerHTML = "";

    openTabs.forEach(path => {
      const file = PORTFOLIO_DATA.files[path];
      if (!file) return;

      const tab = document.createElement("div");
      tab.className = `editor-tab ${path === activeFilePath ? "active" : ""}`;
      tab.dataset.path = path;

      tab.innerHTML = `
        <span class="tab-icon">${getFileIconSvg(file.icon)}</span>
        <span class="tab-title">${file.name}</span>
        <span class="tab-close" title="Close (Ctrl+W)">&times;</span>
      `;

      tab.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-close")) {
          e.stopPropagation();
          closeTab(path);
        } else {
          openFile(path);
        }
      });

      tabsContainer.appendChild(tab);
    });
  }

  function openFile(path) {
    if (!PORTFOLIO_DATA.files[path]) return;

    if (!openTabs.includes(path)) {
      openTabs.push(path);
    }

    activeFilePath = path;
    renderTabs();
    renderFile(path);
    updateSidebarActiveState();

    // Scroll active tab into view
    const activeTab = document.querySelector(`.editor-tab[data-path="${path}"]`);
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }

    // On mobile, auto-close the sidebar drawer so content is immediately visible
    if (typeof UI !== "undefined" && UI.closeSidebarOnMobile) {
      UI.closeSidebarOnMobile();
    }
  }

  function closeTab(path) {
    const idx = openTabs.indexOf(path);
    if (idx === -1) return;

    openTabs.splice(idx, 1);

    if (activeFilePath === path) {
      if (openTabs.length > 0) {
        const nextIdx = Math.min(idx, openTabs.length - 1);
        activeFilePath = openTabs[nextIdx];
      } else {
        activeFilePath = null;
      }
    }

    renderTabs();
    if (activeFilePath) {
      renderFile(activeFilePath);
    } else {
      renderEmptyEditor();
    }
    updateSidebarActiveState();
  }

  function renderFile(path) {
    const file = PORTFOLIO_DATA.files[path];
    if (!file) return;

    // 1. Breadcrumbs
    const breadcrumbContainer = document.getElementById("editor-breadcrumbs");
    if (breadcrumbContainer) {
      const parts = path.split("/");
      let breadcrumbsHtml = `<span class="breadcrumb-item">RAHUL-DEV</span>`;
      parts.forEach(p => {
        breadcrumbsHtml += `<span class="breadcrumb-separator">&gt;</span><span class="breadcrumb-item">${p}</span>`;
      });
      breadcrumbContainer.innerHTML = breadcrumbsHtml;
    }

    // 2. Editor content
    const codeContainer = document.getElementById("editor-code-container");
    if (codeContainer) {
      codeContainer.innerHTML = file.renderHtml();
    }

    // 3. Line numbers gutter + single-frame fitting
    const rawContent = file.getRaw();
    fitDocument(file);

    // 4. Minimap content
    renderMinimap(rawContent);

    // 5. Outline sidebar
    renderOutline(file);

    // 6. Status bar updates
    updateStatusBar(file, rawContent.split("\n").length);

    // Reset scroll to top
    const scrollArea = document.getElementById("editor-scroll-area");
    if (scrollArea) scrollArea.scrollTop = 0;
  }

  // Gutter line numbers use the rendered document length, never more lines
  // than fit the content or the frame, so the gutter itself can never force
  // extra scroll height.
  function renderGutter() {
    const scrollArea = document.getElementById("editor-scroll-area");
    const gutter = document.getElementById("line-numbers-gutter");
    const codeContainer = document.getElementById("editor-code-container");
    if (!scrollArea || !gutter || !codeContainer) return;

    const gutterStyle = getComputedStyle(gutter);
    const lineHeight = parseFloat(gutterStyle.lineHeight) || 21;
    const gutterPad = (parseFloat(gutterStyle.paddingTop) || 0) +
                      (parseFloat(gutterStyle.paddingBottom) || 0);

    const containerStyle = getComputedStyle(codeContainer);
    const containerPad = (parseFloat(containerStyle.paddingTop) || 0) +
                         (parseFloat(containerStyle.paddingBottom) || 0);

    const contentRows = Math.max(1, Math.round((codeContainer.scrollHeight - containerPad) / lineHeight));
    const frameRows = Math.max(1, Math.floor((scrollArea.clientHeight - gutterPad) / lineHeight));
    const rowCount = Math.max(contentRows, frameRows);

    gutter.innerHTML = Array.from({ length: rowCount }, (_, i) =>
      `<div class="line-number ${i === 0 ? "active" : ""}">${i + 1}</div>`
    ).join("");
  }

  function setDocScale(scrollArea, scale) {
    if (scale >= 0.998) {
      scrollArea.style.removeProperty("--doc-scale");
      appliedScale = 1;
    } else {
      scrollArea.style.setProperty("--doc-scale", scale.toFixed(3));
      appliedScale = scale;
    }
  }

  function overflowsFrame(scrollArea) {
    return scrollArea.scrollHeight > scrollArea.clientHeight;
  }

  // Keeps documents flagged with fitToFrame inside a single editor frame:
  // find the largest readable scale at which nothing needs scrolling.
  // The doc is now short enough to fit at scale 1 on common viewports,
  // so this is a tiny nudge (0.8–1) for smaller windows, not a shrink-to-tiny.
  // When even the floor does not fit, the document scrolls instead of
  // dropping below a readable text size.
  function fitDocument(file) {
    const scrollArea = document.getElementById("editor-scroll-area");
    if (!scrollArea) return;

    setDocScale(scrollArea, 1);
    renderGutter();

    // On mobile screens (< 768px), maintain readable typography and natural vertical scrolling
    if (window.innerWidth < 768) {
      lastFitHeight = scrollArea.clientHeight;
      lastFitWidth = scrollArea.clientWidth;
      return;
    }

    if (!file || !file.fitToFrame || !overflowsFrame(scrollArea)) {
      lastFitHeight = scrollArea.clientHeight;
      lastFitWidth = scrollArea.clientWidth;
      return;
    }

    let low = MIN_DOC_SCALE;
    let high = 1;
    let bestFit = MIN_DOC_SCALE;

    for (let step = 0; step < FIT_STEPS; step++) {
      const mid = (low + high) / 2;
      setDocScale(scrollArea, mid);
      renderGutter();
      if (overflowsFrame(scrollArea)) {
        high = mid;
      } else {
        bestFit = mid;
        low = mid;
      }
    }

    setDocScale(scrollArea, bestFit);
    renderGutter();
    lastFitHeight = scrollArea.clientHeight;
    lastFitWidth = scrollArea.clientWidth;
  }

  function scheduleFit() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      if (!activeFilePath) return;
      const file = PORTFOLIO_DATA.files[activeFilePath];
      if (file) fitDocument(file);
    });
  }

  function setupAutoFitObserver() {
    if (typeof ResizeObserver === "undefined") return;

    const scrollArea = document.getElementById("editor-scroll-area");
    const codeContainer = document.getElementById("editor-code-container");
    if (!scrollArea || !codeContainer) return;

    frameObserver = new ResizeObserver(() => {
      const h = scrollArea.clientHeight;
      const w = scrollArea.clientWidth;
      if (h === lastFitHeight && w === lastFitWidth) return;
      scheduleFit();
    });
    frameObserver.observe(scrollArea);

    contentObserver = new ResizeObserver(() => scheduleFit());
    contentObserver.observe(codeContainer);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(scheduleFit);
    }
  }

  function renderEmptyEditor() {
    const codeContainer = document.getElementById("editor-code-container");
    const gutter = document.getElementById("line-numbers-gutter");
    const breadcrumbContainer = document.getElementById("editor-breadcrumbs");
    const minimapContent = document.getElementById("minimap-content");
    const outlineContainer = document.getElementById("sidebar-outline-list");

    if (codeContainer) codeContainer.innerHTML = `<div style="padding: 40px; text-align: center; color: #858585;">No open editors. Click a file in the sidebar to open.</div>`;
    if (gutter) gutter.innerHTML = "";
    if (breadcrumbContainer) breadcrumbContainer.innerHTML = `<span>RAHUL-DEV</span>`;
    if (minimapContent) minimapContent.innerHTML = "";
    if (outlineContainer) outlineContainer.innerHTML = `<li class="outline-item" style="color: #666;">No symbols found</li>`;
  }

  function renderMinimap(rawContent) {
    const minimapContainer = document.getElementById("minimap-content");
    if (!minimapContainer) return;

    const lines = rawContent.split("\n");
    let minimapHtml = "";
    lines.forEach(l => {
      const indent = l.search(/\S|$/);
      const width = Math.min(Math.max((l.trim().length * 1.8), 4), 60);
      let color = "rgba(255, 255, 255, 0.4)";
      if (l.trim().startsWith("//") || l.trim().startsWith("#") || l.trim().startsWith("/*")) {
        color = "#6a9955";
      } else if (l.includes("export") || l.includes("interface") || l.includes("const")) {
        color = "#569cd6";
      }
      minimapHtml += `<div style="height: 3px; margin-bottom: 1px; padding-left: ${indent * 2}px;">
        <span style="display: inline-block; width: ${width}px; height: 2px; background: ${color}; border-radius: 1px;"></span>
      </div>`;
    });
    minimapContainer.innerHTML = minimapHtml;
  }

  function renderOutline(file) {
    const outlineContainer = document.getElementById("sidebar-outline-list");
    if (!outlineContainer) return;

    if (!file.symbols || file.symbols.length === 0) {
      outlineContainer.innerHTML = `<li class="outline-item" style="color: #666;">No symbols found</li>`;
      return;
    }

    outlineContainer.innerHTML = file.symbols.map(sym => `
      <li class="outline-item" data-line="${sym.line}">
        <span class="outline-symbol">#</span>
        <span>${sym.name}</span>
      </li>
    `).join("");

    outlineContainer.querySelectorAll(".outline-item").forEach(item => {
      item.addEventListener("click", () => {
        const line = parseInt(item.dataset.line, 10);
        scrollToLine(line);
      });
    });
  }

  function scrollToLine(lineNum) {
    const scrollArea = document.getElementById("editor-scroll-area");
    if (!scrollArea) return;
    // Single-frame documents already show everything: never start scrolling them.
    if (scrollArea.scrollHeight <= scrollArea.clientHeight) return;
    const gutter = document.getElementById("line-numbers-gutter");
    const lineHeight = gutter ? (parseFloat(getComputedStyle(gutter).lineHeight) || 21) : 21;
    scrollArea.scrollTo({
      top: (lineNum - 1) * lineHeight,
      behavior: "smooth"
    });
  }

  function setupScrollSync() {
    const scrollArea = document.getElementById("editor-scroll-area");
    const minimapSlider = document.getElementById("minimap-slider");
    const minimap = document.getElementById("editor-minimap");

    if (!scrollArea || !minimapSlider || !minimap) return;

    scrollArea.addEventListener("scroll", () => {
      const maxScroll = scrollArea.scrollHeight - scrollArea.clientHeight;
      if (maxScroll <= 0) {
        minimapSlider.style.top = "0px";
        return;
      }
      const ratio = scrollArea.scrollTop / maxScroll;
      const maxSliderTravel = minimap.clientHeight - minimapSlider.clientHeight;
      minimapSlider.style.top = `${Math.max(0, ratio * maxSliderTravel)}px`;
    });

    // Minimap click to jump
    minimap.addEventListener("click", (e) => {
      const rect = minimap.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const ratio = clickY / rect.height;
      scrollArea.scrollTop = ratio * (scrollArea.scrollHeight - scrollArea.clientHeight);
    });
  }

  function updateSidebarActiveState() {
    document.querySelectorAll(".tree-item").forEach(el => {
      if (el.dataset.path === activeFilePath) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  function updateStatusBar(file, totalLines) {
    const lnCol = document.getElementById("status-ln-col");
    const lang = document.getElementById("status-language");

    if (lnCol) lnCol.textContent = `Ln 1, Col 1`;
    if (lang) {
      const map = {
        markdown: "Markdown",
        json: "JSON",
        typescript: "TypeScript",
        yaml: "YAML",
        text: "Plain Text"
      };
      lang.textContent = map[file.language] || "Plain Text";
    }
  }

  function getActiveFilePath() {
    return activeFilePath;
  }

  return {
    init,
    openFile,
    closeTab,
    getActiveFilePath,
    getFileIconSvg
  };
})();
