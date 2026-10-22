/* ==========================================================================
   APP INITIALIZATION
   Boots the VS Code portfolio experience
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Editor, Terminal, Command Palette, and UI
  Editor.init();
  Terminal.init();
  CommandPalette.init();
  UI.init();

  // Welcome notification
  setTimeout(() => {
    UI.showToast("⚡ Welcome to Rahul's Portfolio!", 4000);
  }, 600);
});
