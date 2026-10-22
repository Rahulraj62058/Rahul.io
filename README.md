# Rahul's VS Code Developer Portfolio 💻

An authentic, interactive Visual Studio Code styled developer portfolio website inspired by [hiteshchoudhary.com](https://hiteshchoudhary.com).

## 🚀 Features

- **Pixel-Perfect VS Code Chrome**:
  - macOS titlebar with functional traffic light buttons and dropdown menus (File, Edit, Selection, View, Run, Terminal, Help).
  - Activity Bar with Explorer, Search, Git, Debug, and Extensions icons.
  - Collapsible Sidebar with folder tree (`about`, `projects`, `experience`, `skills`, `education`, `connect`).
  - Real dynamic **OUTLINE** section mapping document headings and jumping to lines.
  - Multi-tab file manager with tabs for `README.md`, `profile.json`, `featured.ts`, `career.yml`, `tech-stack.json`, `courses.md`, `socials.ts`, `LICENSE.txt`, and `.gitignore`.
  - Line numbers gutter with active line highlighting.
  - Interactive minimap with code preview and viewport slider.
  - Draggable & interactive **floating webcam widget** in the bottom left with live pulse badge, mic/camera controls.
- **Interactive Terminal**:
  - Realistic prompt: `~/rahul.dev (main) $`
  - Built-in commands: `help`, `whoami`, `skills`, `projects`, `contact`, `ls`, `ls -la`, `ls -la /links`, `open <file>`, `cat <file>`, `echo $CONTACT`, `theme <name>`, `matrix`, `date`, `history`, `clear`.
  - Command history navigation with `↑` and `↓` arrow keys.
  - Tab auto-completion.
- **Command Palette & Quick Open**:
  - Trigger with `⌘K`, `Ctrl+P`, or by clicking the top titlebar search bar.
  - Fuzzy file search and action execution (`>`).
- **Multiple Theme Presets**:
  - VS Code Dark+ (Default)
  - Tokyo Night
  - Dracula
  - GitHub Dark

## 🛠️ Quick Start

You can open `index.html` directly in your browser, or start a local web server:

```bash
# Using npm
npm start

# Or using Python
python3 -m http.server 3000

# Or using npx serve
npx serve .
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

## ✏️ How to Customize Your Details

All portfolio content and files are located in [`js/data.js`](file:///Users/rahul/Developer/MY%20PORTFOLIO/js/data.js):
- **Author profile**: Update name, bio, email, socials in `PORTFOLIO_DATA.author`.
- **Files & Projects**: Add or edit files under `PORTFOLIO_DATA.files`.
- **Avatar Image**: Replace [`assets/avatar.jpg`](file:///Users/rahul/Developer/MY%20PORTFOLIO/assets/avatar.jpg) with your own photo.

## 📦 Deployment

You can deploy this site with zero configuration to:
- **Vercel**: Import repository or run `npx vercel`
- **GitHub Pages**: Push to repository and enable GitHub Pages in Settings
- **Netlify**: Drag and drop the folder into Netlify Drop
