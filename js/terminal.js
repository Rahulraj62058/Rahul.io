/* ==========================================================================
   INTERACTIVE VS CODE TERMINAL
   Supports real commands, history navigation, tab completion & output formatting
   ========================================================================== */

const Terminal = (() => {
  let history = [];
  let historyIndex = -1;
  const promptDir = "~/rahul.dev";
  const branchName = "(main)";

  const initialCommands = [
    {
      cmd: "ls -la /projects",
      output: `drwx---  real-estate-portal/  (React · Node.js · MongoDB · Full-Stack)
drwx---  chronos-watch-store/  (Pure HTML5 · CSS3 · Responsive)
drwx---  vscode-portfolio/     (Vanilla JS · VS Code UI)
drwx---  internship-vlogs/     (YouTube · Learning in Public)`
    },
    {
      cmd: "echo $CONTACT",
      output: "rahulrajmaurya6205@gmail.com"
    }
  ];

  function init() {
    const historyContainer = document.getElementById("terminal-history");
    if (!historyContainer) return;

    // Render initial sample commands from screenshot
    initialCommands.forEach(item => {
      renderExecutedLine(item.cmd, item.output);
    });

    const inputField = document.getElementById("terminal-input");
    if (inputField) {
      inputField.addEventListener("keydown", handleKeyDown);
    }

    // Scroll to bottom
    scrollToBottom();
  }

  function handleKeyDown(e) {
    const input = e.target;

    if (e.key === "Enter") {
      const rawCmd = input.value.trim();
      input.value = "";
      if (rawCmd) {
        history.push(rawCmd);
        historyIndex = history.length;
        executeCommand(rawCmd);
      } else {
        renderExecutedLine("", "");
      }
      scrollToBottom();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0 && historyIndex > 0) {
        historyIndex--;
        input.value = history[historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        input.value = "";
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      autoComplete(input);
    }
  }

  function autoComplete(input) {
    const val = input.value.trim();
    const available = [
      "help", "clear", "ls", "ls -la", "ls /links", "whoami", "skills",
      "projects", "contact", "open", "cat", "theme", "echo $CONTACT",
      "echo $BIO", "matrix", "date", "history"
    ];
    const match = available.find(c => c.startsWith(val));
    if (match) {
      input.value = match;
    }
  }

  function renderExecutedLine(cmd, outputHtml, isError = false) {
    const historyContainer = document.getElementById("terminal-history");
    if (!historyContainer) return;

    const lineWrapper = document.createElement("div");
    lineWrapper.className = "terminal-line";

    let promptHtml = `
      <div class="terminal-prompt-wrapper" style="margin-bottom: 2px;">
        <span class="terminal-prompt-path">${promptDir}</span>
        <span class="terminal-prompt-branch">${branchName}</span>
        <span class="terminal-prompt-symbol">$</span>
        <span class="terminal-cmd-highlight">${escapeHtml(cmd)}</span>
      </div>
    `;

    let outHtml = "";
    if (outputHtml) {
      const outClass = isError ? "terminal-output error" : "terminal-output";
      outHtml = `<div class="${outClass}">${outputHtml}</div>`;
    }

    lineWrapper.innerHTML = promptHtml + outHtml;
    historyContainer.appendChild(lineWrapper);
  }

  function executeCommand(raw) {
    const parts = raw.split(" ").filter(p => p.length > 0);
    const cmd = parts[0]?.toLowerCase();
    const arg = parts.slice(1).join(" ");

    switch (cmd) {
      case "help":
        renderExecutedLine(raw, `
<div style="color: #58a6ff; font-weight: bold; margin-bottom: 4px;">Available Terminal Commands:</div>
  <span style="color: #7ee787;">whoami</span>        - View developer summary & background
  <span style="color: #7ee787;">skills</span>        - Show technical proficiencies & tech stack
  <span style="color: #7ee787;">projects</span>      - List featured production projects
  <span style="color: #7ee787;">contact</span>       - Show direct collaboration and email handles
  <span style="color: #7ee787;">ls [-la]</span>      - List project directory contents
  <span style="color: #7ee787;">open &lt;file&gt;</span>    - Open file in editor (e.g. open about/README.md)
  <span style="color: #7ee787;">cat &lt;file&gt;</span>     - Print file contents into terminal
  <span style="color: #7ee787;">echo $&lt;VAR&gt;</span>    - Echo environment variables ($CONTACT, $BIO, $ROLE)
  <span style="color: #7ee787;">theme &lt;name&gt;</span>   - Change theme: dark, tokyo, dracula, github
  <span style="color: #7ee787;">matrix</span>        - Run matrix digital rain animation
  <span style="color: #7ee787;">date</span>          - Print current date and timestamp
  <span style="color: #7ee787;">history</span>       - Show past terminal commands
  <span style="color: #7ee787;">clear</span>         - Clear the terminal screen
`);
        break;

      case "clear":
        const historyContainer = document.getElementById("terminal-history");
        if (historyContainer) historyContainer.innerHTML = "";
        break;

      case "whoami":
        renderExecutedLine(raw, `<span style="color: #79c0ff; font-weight: bold; font-size: 15px;">Rahul Raj</span>  <span style="color: #8b949e;">— Full Stack Developer · Builder · Open source contributor</span>

<span style="color: #e3b341;">Bio:</span>      I build things on the web and share the whole journey as I go. Second-year B.Tech CSE student, currently doing a web development internship, and a big believer in learning in public. I've built a watch e-commerce site in pure HTML/CSS (Chronos), my own portfolio site, and I'm now working on a full-stack Real Estate Portal with listings, filters, favorites, and an admin panel. I document my internship on a YouTube vlog series, post my milestones, and talk about what I'm learning, mistakes included. Part coder, part creator, and always shipping something new.

<span style="color: #e3b341;">Status:</span>   <span style="color: #7ee787;">🟢 Web Development Intern · Learning in Public &amp; Shipping</span>
<span style="color: #e3b341;">Stats:</span>    1+ Years Experience · 12+ Shipped Projects · 10+ GitHub Stars
<span style="color: #e3b341;">Email:</span>    <a href="mailto:rahulrajmaurya6205@gmail.com" class="terminal-ext-link">rahulrajmaurya6205@gmail.com</a>`);
        break;

      case "skills":
        renderExecutedLine(raw, `<span style="color: #d2a8ff; font-weight: bold;">⚡ Tech Stack &amp; Skills:</span>
• Frontend:  HTML5, Modern CSS3 (Flexbox/Grid), JavaScript (ES6+), React, Next.js, Tailwind CSS
• Backend:   Node.js, Express, REST APIs, Python
• Database:  MongoDB, PostgreSQL, LocalStorage
• Tools:     Git &amp; GitHub, VS Code, Postman, Vite, Vercel`);
        break;


      case "projects":
        renderExecutedLine(raw, `<span style="color: #58a6ff; font-weight: bold;">Shipped Projects by Rahul Raj:</span>
1. <span style="color: #7ee787;">Real Estate Portal</span>   &mdash; Full-stack: listings, filters, favorites &amp; admin panel (React &middot; Node.js &middot; MongoDB)
2. <span style="color: #7ee787;">Chronos Watch Store</span>  &mdash; Luxury e-commerce in pure HTML5 &amp; CSS3
3. <span style="color: #7ee787;">VS Code Portfolio</span>    &mdash; Interactive IDE-themed portfolio (Vanilla JS &middot; CSS3)
4. <span style="color: #7ee787;">Internship Vlog Series</span> &mdash; Documenting daily dev journey on YouTube

Tip: Use <span style="color: #58a6ff;">open products/products.json</span> to view all project details!`);
        break;

      case "contact":
        renderExecutedLine(raw, `
<span style="color: #58a6ff; font-weight: bold;">Collaboration & Social Links:</span>
• Email:    <a href="mailto:rahulrajmaurya6205@gmail.com" class="terminal-ext-link">rahulrajmaurya6205@gmail.com</a>
• GitHub:   <a href="https://github.com/Rahulraj62058" target="_blank" class="terminal-ext-link">github.com/Rahulraj62058</a>
• LinkedIn: <a href="https://www.linkedin.com/in/rahul-raj-00645a2b6/" target="_blank" class="terminal-ext-link">linkedin.com/in/rahul-raj-00645a2b6</a>
• Twitter:  <a href="https://x.com/rahulraj62058" target="_blank" class="terminal-ext-link">x.com/rahulraj62058</a>
• YouTube:  <a href="https://youtube.com/@rahuldev62-f5c?si=pE8o6mbRalnLQYpM" target="_blank" class="terminal-ext-link">youtube.com/@rahuldev62-f5c</a>
`);
        break;

      case "ls":
        if (arg.includes("/links") || arg === "links" || arg.includes("/projects") || arg === "projects") {
          renderExecutedLine(raw, `drwx---  real-estate-portal/   github.com/rahul-dev
drwx---  chronos-watch-store/  github.com/rahul-dev
drwx---  vscode-portfolio/      localhost:3000
drwx---  socials                @rahul_codes · youtube/rahulraj · linkedin/in/rahul-dev`);
        } else {
          renderExecutedLine(raw, `drwxr-xr-x  about/
drwxr-xr-x  youtube/
drwxr-xr-x  platforms/
drwxr-xr-x  udemy/
drwxr-xr-x  products/
drwxr-xr-x  connect/
-rw-r--r--  LICENSE.txt
-rw-r--r--  .gitignore`);
        }
        break;

      case "open":
        if (!arg) {
          renderExecutedLine(raw, "Usage: open <filename> (e.g. open about/README.md)", true);
        } else {
          const targetKey = Object.keys(PORTFOLIO_DATA.files).find(
            k => k.toLowerCase() === arg.toLowerCase() || k.endsWith(arg.toLowerCase())
          );
          if (targetKey) {
            Editor.openFile(targetKey);
            renderExecutedLine(raw, `Opened <span style="color: #7ee787;">${targetKey}</span> in editor.`);
          } else {
            renderExecutedLine(raw, `File not found: ${arg}`, true);
          }
        }
        break;

      case "cat":
        if (!arg) {
          renderExecutedLine(raw, "Usage: cat <filename> (e.g. cat about/profile.json)", true);
        } else {
          const targetKey = Object.keys(PORTFOLIO_DATA.files).find(
            k => k.toLowerCase() === arg.toLowerCase() || k.endsWith(arg.toLowerCase())
          );
          if (targetKey) {
            const rawText = PORTFOLIO_DATA.files[targetKey].getRaw();
            renderExecutedLine(raw, `<pre style="font-family: var(--font-code);">${escapeHtml(rawText)}</pre>`);
          } else {
            renderExecutedLine(raw, `cat: ${arg}: No such file or directory`, true);
          }
        }
        break;

      case "echo":
        if (arg === "$CONTACT" || arg === "$SPONSORSHIPS" || arg === "$EMAIL") {
          renderExecutedLine(raw, PORTFOLIO_DATA.author.email);
        } else if (arg === "$BIO") {
          renderExecutedLine(raw, PORTFOLIO_DATA.author.bio);
        } else if (arg === "$ROLE") {
          renderExecutedLine(raw, PORTFOLIO_DATA.author.role);
        } else {
          renderExecutedLine(raw, arg);
        }
        break;

      case "theme":
        const validThemes = ["dark", "tokyo", "dracula", "github"];
        const chosen = arg.toLowerCase();
        if (chosen.includes("tokyo")) {
          UI.setTheme("tokyo-night");
          renderExecutedLine(raw, "Switched theme to Tokyo Night 🌙");
        } else if (chosen.includes("drac")) {
          UI.setTheme("dracula");
          renderExecutedLine(raw, "Switched theme to Dracula 🧛");
        } else if (chosen.includes("git")) {
          UI.setTheme("github-dark");
          renderExecutedLine(raw, "Switched theme to GitHub Dark 🐙");
        } else if (chosen.includes("dark")) {
          UI.setTheme("dark-plus");
          renderExecutedLine(raw, "Switched theme to VS Code Dark+ 💻");
        } else {
          renderExecutedLine(raw, `Available themes: dark, tokyo, dracula, github. Example: theme tokyo`, true);
        }
        break;

      case "date":
        renderExecutedLine(raw, new Date().toLocaleString());
        break;

      case "history":
        renderExecutedLine(raw, history.map((h, i) => `  ${i + 1}  ${h}`).join("\n"));
        break;

      case "sudo":
        renderExecutedLine(raw, "Permission denied: Nice try! Rahul's portfolio is protected 🛡️", true);
        break;

      case "matrix":
        runMatrixEffect();
        renderExecutedLine(raw, "Entering the Matrix... (type 'clear' when done)");
        break;

      default:
        renderExecutedLine(raw, `zsh: command not found: ${raw}. Type 'help' for available commands.`, true);
        break;
    }
  }

  function runMatrixEffect() {
    const chars = "01010101アイウエオカキクケコサシスセソタチツテト";
    let iterations = 0;
    const interval = setInterval(() => {
      let line = "";
      for (let i = 0; i < 40; i++) {
        line += chars[Math.floor(Math.random() * chars.length)] + " ";
      }
      renderExecutedLine("", `<span style="color: #27c93f; opacity: 0.85;">${line}</span>`);
      scrollToBottom();
      iterations++;
      if (iterations > 10) clearInterval(interval);
    }, 120);
  }

  function run(commandStr) {
    // Focus terminal tab first
    UI.switchPanelTab("terminal");
    const input = document.getElementById("terminal-input");
    if (input) {
      input.value = commandStr;
      executeCommand(commandStr);
      input.value = "";
      scrollToBottom();
    }
  }

  function scrollToBottom() {
    const term = document.getElementById("terminal-container");
    if (term) term.scrollTop = term.scrollHeight;
  }

  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  return {
    init,
    run,
    executeCommand
  };
})();
