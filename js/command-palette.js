/* ==========================================================================
   VS CODE COMMAND PALETTE / QUICK OPEN
   Quick open files, execute actions, switch themes, navigate workspace
   ========================================================================== */

const CommandPalette = (() => {
  let isOpen = false;
  let selectedIndex = 0;
  let currentResults = [];

  const defaultCommands = [
    { type: "file", title: "README.md", subtitle: "about/README.md", path: "about/README.md", icon: "md" },
    { type: "file", title: "profile.json", subtitle: "about/profile.json", path: "about/profile.json", icon: "json" },
    { type: "file", title: "channels.yml", subtitle: "youtube/channels.yml", path: "youtube/channels.yml", icon: "yml" },
    { type: "file", title: "platforms.tsx", subtitle: "platforms/platforms.tsx", path: "platforms/platforms.tsx", icon: "tsx" },
    { type: "file", title: "courses.md", subtitle: "udemy/courses.md", path: "udemy/courses.md", icon: "md" },
    { type: "file", title: "products.json", subtitle: "products/products.json", path: "products/products.json", icon: "json" },
    { type: "file", title: "socials.ts", subtitle: "connect/socials.ts", path: "connect/socials.ts", icon: "ts" },
    { type: "file", title: "LICENSE.txt", subtitle: "LICENSE.txt", path: "LICENSE.txt", icon: "txt" },
    { type: "file", title: ".gitignore", subtitle: ".gitignore", path: ".gitignore", icon: "git" },
    { type: "action", title: "> Toggle Terminal Panel", subtitle: "View terminal / bash", action: () => UI.togglePanel() },
    { type: "action", title: "> Switch Theme: VS Code Dark+", subtitle: "Official dark theme", action: () => UI.setTheme("dark-plus") },
    { type: "action", title: "> Switch Theme: Tokyo Night", subtitle: "Vibrant blue dark palette", action: () => UI.setTheme("tokyo-night") },
    { type: "action", title: "> Switch Theme: Dracula", subtitle: "Vampiric purple & cyan theme", action: () => UI.setTheme("dracula") },
    { type: "action", title: "> Switch Theme: GitHub Dark", subtitle: "Official GitHub style", action: () => UI.setTheme("github-dark") },
    { type: "action", title: "> Send Email to Rahul Raj", subtitle: "rahulrajmaurya6205@gmail.com", action: () => window.open("mailto:rahulrajmaurya6205@gmail.com") },
    { type: "action", title: "> Open GitHub Profile", subtitle: "github.com/rahul-dev", action: () => window.open("https://github.com", "_blank") }
  ];

  function init() {
    const backdrop = document.getElementById("command-palette-backdrop");
    const input = document.getElementById("palette-input");
    const searchBtn = document.getElementById("command-search-btn");

    if (searchBtn) {
      searchBtn.addEventListener("click", open);
    }

    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) close();
      });
    }

    if (input) {
      input.addEventListener("input", (e) => filter(e.target.value));
      input.addEventListener("keydown", handleKeyDown);
    }
  }

  function open() {
    const backdrop = document.getElementById("command-palette-backdrop");
    const input = document.getElementById("palette-input");
    if (!backdrop || !input) return;

    isOpen = true;
    backdrop.classList.add("active");
    input.value = "";
    input.focus();
    filter("");
  }

  function close() {
    const backdrop = document.getElementById("command-palette-backdrop");
    if (!backdrop) return;
    isOpen = false;
    backdrop.classList.remove("active");
  }

  function filter(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      currentResults = [...defaultCommands];
    } else if (q.startsWith(">")) {
      const actQuery = q.slice(1).trim();
      currentResults = defaultCommands.filter(item =>
        item.type === "action" &&
        (item.title.toLowerCase().includes(actQuery) || item.subtitle.toLowerCase().includes(actQuery))
      );
    } else {
      currentResults = defaultCommands.filter(item =>
        item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q)
      );
    }

    selectedIndex = 0;
    renderResults();
  }

  function renderResults() {
    const list = document.getElementById("palette-results-list");
    if (!list) return;

    if (currentResults.length === 0) {
      list.innerHTML = `<li style="padding: 12px 16px; color: #858585;">No matching commands or files found</li>`;
      return;
    }

    list.innerHTML = currentResults.map((item, idx) => `
      <li class="palette-item ${idx === selectedIndex ? "selected" : ""}" data-idx="${idx}">
        <div class="palette-item-left">
          <span class="palette-item-icon">
            ${item.type === "file" ? Editor.getFileIconSvg(item.icon) : '<span style="color:#58a6ff;">&gt;</span>'}
          </span>
          <div>
            <div style="font-weight: 500;">${item.title}</div>
            <div style="font-size: 13.5px; opacity: 0.6;">${item.subtitle}</div>
          </div>
        </div>
        <span class="palette-item-tag">${item.type === "file" ? "File" : "Command"}</span>
      </li>
    `).join("");

    list.querySelectorAll(".palette-item").forEach(el => {
      el.addEventListener("click", () => {
        const idx = parseInt(el.dataset.idx, 10);
        executeSelection(idx);
      });
    });
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (selectedIndex < currentResults.length - 1) {
        selectedIndex++;
        renderResults();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (selectedIndex > 0) {
        selectedIndex--;
        renderResults();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      executeSelection(selectedIndex);
    }
  }

  function executeSelection(idx) {
    const item = currentResults[idx];
    if (!item) return;

    close();

    if (item.type === "file") {
      Editor.openFile(item.path);
    } else if (item.type === "action" && item.action) {
      item.action();
    }
  }

  return {
    init,
    open,
    close,
    isOpen: () => isOpen
  };
})();
