/* ==========================================================================
   VS CODE UI CONTROLLER
   Menubars, Sidebar, Resizing, Panel Tabs, Webcam Widget, Themes, Toasts
   ========================================================================== */

const UI = (() => {
  let isPanelOpen = true;
  let isSidebarOpen = true;

  function init() {
    setupMenubar();
    setupMobileMenu();
    setupSidebarTree();
    setupPanelControls();
    setupWebcamWidget();
    setupResizers();
    setupKeybindings();
    setupTrafficLights();
    setupWindowResize();

    // Default mobile state: keep editor wide and unobstructed
    if (window.innerWidth < 768) {
      toggleSidebar(false);
      togglePanel(false);
    }
  }

  // --- MENUBAR DROPDOWNS ---
  function setupMenubar() {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const wasActive = item.classList.contains("active");
        closeAllMenus();
        if (!wasActive) {
          item.classList.add("active");
        }
      });
    });

    document.addEventListener("click", () => {
      closeAllMenus();
      closeMobileMenu();
    });
  }

  function closeAllMenus() {
    document.querySelectorAll(".menu-item.active").forEach(item => {
      item.classList.remove("active");
    });
  }

  // --- MOBILE MENU ( < 768px ) ---
  function setupMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const menuDropdown = document.getElementById("mobile-menu-dropdown");

    if (menuBtn && menuDropdown) {
      menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = menuDropdown.classList.contains("active");
        if (isOpen) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    }

    document.addEventListener("click", (e) => {
      if (menuDropdown && !menuDropdown.contains(e.target) && e.target !== menuBtn) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const menuDropdown = document.getElementById("mobile-menu-dropdown");
    if (menuDropdown) {
      menuDropdown.classList.add("active");
      if (menuBtn) menuBtn.classList.add("active");
    }
  }

  function closeMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const menuDropdown = document.getElementById("mobile-menu-dropdown");
    if (menuDropdown) {
      menuDropdown.classList.remove("active");
      if (menuBtn) menuBtn.classList.remove("active");
    }
  }

  // --- TRAFFIC LIGHT BUTTONS ---
  function setupTrafficLights() {
    const closeBtn = document.querySelector(".traffic-light.close");
    const minBtn = document.querySelector(".traffic-light.minimize");
    const maxBtn = document.querySelector(".traffic-light.maximize");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        showToast("Window close simulated: Resetting view!");
        Editor.openFile("about/README.md");
      });
    }

    if (minBtn) {
      minBtn.addEventListener("click", () => {
        togglePanel();
      });
    }

    if (maxBtn) {
      maxBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }
  }

  // --- SIDEBAR FOLDER TOGGLE & TREE CLICKS ---
  function setupSidebarTree() {
    // Explorer folder collapse / expand
    document.querySelectorAll(".tree-folder-group").forEach(group => {
      const header = group.querySelector(".tree-item.folder");
      if (header) {
        header.addEventListener("click", (e) => {
          e.stopPropagation();
          group.classList.toggle("collapsed");
        });
      }
    });

    // File clicks in sidebar
    document.querySelectorAll(".tree-item[data-path]").forEach(item => {
      item.addEventListener("click", () => {
        const path = item.dataset.path;
        if (path) {
          Editor.openFile(path);
        }
      });
    });

    // Sidebar accordion collapse (e.g. OUTLINE)
    document.querySelectorAll(".sidebar-section-header").forEach(hdr => {
      hdr.addEventListener("click", () => {
        const section = hdr.closest(".sidebar-section");
        if (section) {
          section.classList.toggle("collapsed");
        }
      });
    });

    // Activity bar top buttons
    document.querySelectorAll(".activitybar-top .activity-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".activitybar-top .activity-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        if (btn.dataset.view === "explorer") {
          toggleSidebar(true);
        } else if (btn.dataset.view === "search") {
          CommandPalette.open();
        } else if (btn.dataset.view === "git") {
          Editor.openFile(".gitignore");
        } else if (btn.dataset.view === "debug") {
          switchPanelTab("debug");
        } else if (btn.dataset.view === "extensions") {
          showToast("Extensions: All developer tools up to date 🚀");
        }
      });
    });

    // Mobile sidebar backdrop click to close
    const backdrop = document.getElementById("sidebar-backdrop");
    if (backdrop) {
      backdrop.addEventListener("click", () => {
        toggleSidebar(false);
      });
    }

    // Mobile close button inside sidebar header
    const closeMobileBtn = document.getElementById("sidebar-close-mobile");
    if (closeMobileBtn) {
      closeMobileBtn.addEventListener("click", () => {
        toggleSidebar(false);
      });
    }
  }

  function toggleSidebar(forceOpen = null) {
    const sidebar = document.getElementById("vscode-sidebar");
    const backdrop = document.getElementById("sidebar-backdrop");
    if (!sidebar) return;

    if (forceOpen === true) {
      sidebar.classList.remove("hidden");
      isSidebarOpen = true;
      if (backdrop && window.innerWidth < 768) {
        backdrop.classList.add("active");
      }
    } else if (forceOpen === false) {
      sidebar.classList.add("hidden");
      isSidebarOpen = false;
      if (backdrop) {
        backdrop.classList.remove("active");
      }
    } else {
      sidebar.classList.toggle("hidden");
      isSidebarOpen = !sidebar.classList.contains("hidden");
      if (backdrop && window.innerWidth < 768) {
        if (isSidebarOpen) {
          backdrop.classList.add("active");
        } else {
          backdrop.classList.remove("active");
        }
      }
    }
  }

  function closeSidebarOnMobile() {
    if (window.innerWidth < 768) {
      toggleSidebar(false);
    }
  }

  // --- PANEL (TERMINAL / PROBLEMS / OUTPUT / PORTS) ---
  function setupPanelControls() {
    const tabs = document.querySelectorAll(".panel-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetView = tab.dataset.view;
        switchPanelTab(targetView);
      });
    });

    const closeBtn = document.getElementById("panel-close-btn");
    const maxBtn = document.getElementById("panel-max-btn");

    if (closeBtn) closeBtn.addEventListener("click", togglePanel);
    if (maxBtn) {
      maxBtn.addEventListener("click", () => {
        const panel = document.getElementById("vscode-panel");
        if (panel) panel.classList.toggle("maximized");
      });
    }
  }

  function switchPanelTab(viewName) {
    if (!isPanelOpen) togglePanel(true);

    document.querySelectorAll(".panel-tab").forEach(t => {
      if (t.dataset.view === viewName) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });

    document.querySelectorAll(".panel-view").forEach(v => {
      if (v.id === `panel-${viewName}`) {
        v.classList.add("active");
      } else {
        v.classList.remove("active");
      }
    });

    if (viewName === "terminal") {
      const termInput = document.getElementById("terminal-input");
      if (termInput) termInput.focus();
    }
  }

  function togglePanel(forceOpen = null) {
    const panel = document.getElementById("vscode-panel");
    if (!panel) return;

    if (forceOpen === true) {
      panel.classList.remove("hidden");
      isPanelOpen = true;
    } else if (forceOpen === false) {
      panel.classList.add("hidden");
      isPanelOpen = false;
    } else {
      panel.classList.toggle("hidden");
      isPanelOpen = !panel.classList.contains("hidden");
    }

    if (isPanelOpen) {
      const termInput = document.getElementById("terminal-input");
      if (termInput) termInput.focus();
    }
  }

  // --- FLOATING WEBCAM WIDGET DRAGGING & CONTROLS ---
  function setupWebcamWidget() {
    const widget = document.getElementById("floating-webcam-widget");
    if (!widget) return;

    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    widget.addEventListener("mousedown", (e) => {
      if (e.target.closest(".webcam-ctrl-btn")) return;
      isDragging = true;
      widget.style.cursor = "grabbing";
      startX = e.clientX;
      startY = e.clientY;
      const rect = widget.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;
      e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      const maxX = Math.max(10, window.innerWidth - (widget.offsetWidth || 60) - 10);
      const maxY = Math.max(30, window.innerHeight - (widget.offsetHeight || 60) - 24);
      widget.style.left = `${Math.max(10, Math.min(maxX, initialLeft + deltaX))}px`;
      widget.style.top = `${Math.max(36, Math.min(maxY, initialTop + deltaY))}px`;
      widget.style.bottom = "auto";
    });

    document.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        widget.style.cursor = "grab";
      }
    });

    // Touch dragging support for mobile & tablet screens
    widget.addEventListener("touchstart", (e) => {
      if (e.target.closest(".webcam-ctrl-btn")) return;
      const touch = e.touches[0];
      if (!touch) return;
      isDragging = true;
      startX = touch.clientX;
      startY = touch.clientY;
      const rect = widget.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;
    }, { passive: true });

    document.addEventListener("touchmove", (e) => {
      if (!isDragging || !e.touches.length) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;
      const maxX = Math.max(10, window.innerWidth - (widget.offsetWidth || 50) - 10);
      const maxY = Math.max(30, window.innerHeight - (widget.offsetHeight || 50) - 24);
      widget.style.left = `${Math.max(10, Math.min(maxX, initialLeft + deltaX))}px`;
      widget.style.top = `${Math.max(36, Math.min(maxY, initialTop + deltaY))}px`;
      widget.style.bottom = "auto";
    }, { passive: true });

    document.addEventListener("touchend", () => {
      if (isDragging) {
        isDragging = false;
      }
    }, { passive: true });

    // Tap on mobile webcam displays quick intro toast
    widget.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        showToast("👤 Rahul Raj · Full Stack Developer · Builder");
      }
    });

    // Toggle mute/video button
    const micBtn = document.getElementById("webcam-mic-btn");
    const camBtn = document.getElementById("webcam-cam-btn");

    if (micBtn) {
      micBtn.addEventListener("click", () => {
        const isMuted = micBtn.dataset.muted === "true";
        micBtn.dataset.muted = isMuted ? "false" : "true";
        micBtn.textContent = isMuted ? "🎤" : "🔇";
        showToast(isMuted ? "Microphone Unmuted" : "Microphone Muted");
      });
    }

    if (camBtn) {
      camBtn.addEventListener("click", () => {
        const img = widget.querySelector(".webcam-avatar-img");
        if (img) {
          const isFilter = img.style.filter.includes("grayscale");
          img.style.filter = isFilter ? "none" : "grayscale(100%) contrast(120%)";
          showToast(isFilter ? "Camera: Studio Color Mode" : "Camera: Noir Studio Mode");
        }
      });
    }
  }

  // --- SPLITTER RESIZERS (Sidebar & Panel) ---
  function setupResizers() {
    // Sidebar horizontal resizer
    const sidebarResizer = document.getElementById("sidebar-resizer");
    const sidebar = document.getElementById("vscode-sidebar");

    if (sidebarResizer && sidebar) {
      let isResizing = false;
      sidebarResizer.addEventListener("mousedown", (e) => {
        isResizing = true;
        sidebarResizer.classList.add("resizing");
        document.body.style.cursor = "col-resize";
        e.preventDefault();
      });

      document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const newWidth = Math.max(160, Math.min(500, e.clientX - 48));
        sidebar.style.width = `${newWidth}px`;
      });

      document.addEventListener("mouseup", () => {
        if (isResizing) {
          isResizing = false;
          sidebarResizer.classList.remove("resizing");
          document.body.style.cursor = "default";
        }
      });
    }

    // Panel vertical resizer
    const panelResizer = document.getElementById("panel-resizer");
    const panel = document.getElementById("vscode-panel");

    if (panelResizer && panel) {
      let isResizing = false;
      panelResizer.addEventListener("mousedown", (e) => {
        isResizing = true;
        panelResizer.classList.add("resizing");
        document.body.style.cursor = "row-resize";
        e.preventDefault();
      });

      document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const newHeight = Math.max(80, Math.min(window.innerHeight * 0.75, window.innerHeight - e.clientY - 22));
        panel.style.height = `${newHeight}px`;
      });

      document.addEventListener("mouseup", () => {
        if (isResizing) {
          isResizing = false;
          panelResizer.classList.remove("resizing");
          document.body.style.cursor = "default";
        }
      });
    }
  }

  // --- THEME SWITCHER ---
  function setTheme(themeName) {
    if (themeName === "dark-plus") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", themeName);
    }
    showToast(`Switched theme to ${themeName}`);
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message, duration = 3000) {
    let toast = document.getElementById("vscode-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "vscode-toast";
      toast.className = "vscode-toast";
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <span class="toast-icon">ℹ️</span>
      <span style="flex:1;">${message}</span>
      <span class="toast-close" onclick="this.parentElement.classList.remove('show')">&times;</span>
    `;

    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, duration);
  }

  // --- KEYBOARD SHORTCUTS ---
  function setupKeybindings() {
    window.addEventListener("keydown", (e) => {
      // Cmd/Ctrl + P or Cmd/Ctrl + K: Open Command Palette
      if ((e.metaKey || e.ctrlKey) && (e.key === "p" || e.key === "k")) {
        e.preventDefault();
        CommandPalette.open();
      }

      // Cmd/Ctrl + ` : Toggle Terminal Panel
      if ((e.metaKey || e.ctrlKey) && e.key === "`") {
        e.preventDefault();
        togglePanel();
      }

      // Cmd/Ctrl + B : Toggle Sidebar
      if ((e.metaKey || e.ctrlKey) && e.key === "b") {
        e.preventDefault();
        toggleSidebar();
      }

      // Cmd/Ctrl + W : Close Active Tab
      if ((e.metaKey || e.ctrlKey) && e.key === "w") {
        e.preventDefault();
        const activePath = Editor.getActiveFilePath();
        if (activePath) Editor.closeTab(activePath);
      }
    });
  }

  // Window Resize / Orientation Change Handler
  function setupWindowResize() {
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const backdrop = document.getElementById("sidebar-backdrop");
        if (window.innerWidth >= 768) {
          // Restore desktop state
          if (backdrop) backdrop.classList.remove("active");
        }
      }, 150);
    });
  }

  return {
    init,
    togglePanel,
    toggleSidebar,
    closeSidebarOnMobile,
    closeMobileMenu,
    switchPanelTab,
    setTheme,
    showToast
  };
})();

