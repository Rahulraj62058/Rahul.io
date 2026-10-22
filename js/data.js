/* ==========================================================================
   PORTFOLIO DATA MODEL
   Virtual file system, projects, skills, and content definitions
   ========================================================================== */

const PORTFOLIO_DATA = {
  author: {
    name: "Rahul Raj",
    fullName: "Rahul Raj",
    role: "Full Stack Developer · Builder · Open source contributor",
    email: "rahulrajmaurya6205@gmail.com",
    avatar: "assets/avatar.jpg",
    bio: "I'm a second-year B.Tech CSE student and web development intern who builds in public. I shipped Chronos (a luxury watch storefront in pure HTML/CSS), built this VS Code portfolio, and I'm now developing a full-stack Real Estate Portal with listings, filters, favorites, and an admin panel. I vlog the internship on YouTube — milestones, mistakes, and the lessons from both.",
    location: "India (Open to Remote Worldwide)",
    status: "🟢 Web Development Intern · Learning in Public & Shipping",
    stats: {
      experience: "1+ Years",
      projects: "12+",
      githubStars: "10+",
      coffee: "∞ Cups"
    }
  },

  files: {
    "about/README.md": {
      name: "README.md",
      folder: "about",
      path: "about/README.md",
      language: "markdown",
      icon: "markdown",
      fitToFrame: true,
      symbols: [
        { name: "Rahul Raj", type: "Header 1", line: 4 },
        { name: "What I do", type: "Header 2", line: 10 },
        { name: "Core Architecture", type: "Header 2", line: 16 },
        { name: "Featured Highlights", type: "Header 2", line: 22 }
      ],
      getRaw: () => `/** Rahul Raj  ·  Full Stack Developer · Builder · Open source contributor
 * rahulrajmaurya6205@gmail.com · github.com/rahul-dev · linkedin.com/in/rahul-dev */

# Rahul Raj

I'm a second-year B.Tech CSE student and web development intern who builds in public. I shipped Chronos (a luxury watch storefront in pure HTML/CSS), built this VS Code portfolio, and I'm now developing a full-stack Real Estate Portal with listings, filters, favorites, and an admin panel. I vlog the internship on YouTube: milestones, mistakes, and lessons from both.

· 1+ Years · 12+ Projects · 10+ GitHub Stars · Open Source

## What I do
- **Full Stack Development**: end-to-end web apps with React, Next.js, TypeScript, Node.js
- **Frontend Crafting**: clean, responsive UIs in HTML5, modern CSS, and React
- **Real Estate Portal**: full-stack platform with filters, favorites, and admin panel
- **Learning in Public**: internship vlogs, milestones, and lessons — mistakes included.

## Core Architecture
- Frontend: React, Next.js, HTML5, CSS / Tailwind, JavaScript / TypeScript
- Backend: Node.js, Express, REST APIs, Python
- Data: MongoDB, PostgreSQL, Local Storage
- Tools: Git & GitHub, VS Code, Postman, Vite, Vercel

## Featured Highlights
- 🏠 Real Estate Portal — React · Node.js · Express · MongoDB
- ⌚ Chronos — HTML5 · CSS3 · Responsive
- 💻 VS Code Portfolio — JavaScript · CSS3 · VS Code UI
- 📹 Internship Vlog Series — YouTube · Learning in Public
`,
      renderHtml: () => `
<div class="doc-compact">
<div class="doc-header-comment">
<span class="tok-comment">/** Rahul Raj  ·  Full Stack Developer · Builder · Open source contributor</span><br>
<span class="tok-comment"> * <a href="mailto:rahulrajmaurya6205@gmail.com" class="tok-email">rahulrajmaurya6205@gmail.com</a> · <a href="https://github.com/Rahulraj62058" target="_blank" class="tok-link">github.com/Rahulraj62058</a> · <a href="https://www.linkedin.com/in/rahul-raj-00645a2b6/" target="_blank" class="tok-link">linkedin.com/in/rahul-raj-00645a2b6</a> */</span>
</div>

<div class="md-h1">
  # Rahul Raj<span class="blinking-cursor"></span>
</div>

<p class="md-paragraph">
I'm a second-year B.Tech CSE student and web development intern who builds in public. I shipped Chronos (a luxury watch storefront in pure HTML/CSS), built this VS Code portfolio, and I'm now developing a full-stack Real Estate Portal with listings, filters, favorites, and an admin panel. I vlog the internship on YouTube: milestones, mistakes, and lessons from both.
</p>

<div class="badge-list">
  <span class="badge-pill clickable" onclick="Terminal.run('whoami')"><span class="badge-bullet">•</span> 1+ Years Experience</span>
  <span class="badge-pill clickable" onclick="Editor.openFile('products/products.json')"><span class="badge-bullet">•</span> 12+ Shipped Projects</span>
  <span class="badge-pill clickable" onclick="window.open('https://github.com/Rahulraj62058', '_blank')"><span class="badge-bullet">•</span> 10+ GitHub Stars</span>
  <span class="badge-pill clickable"><span class="badge-bullet">•</span> React / Next.js</span>
  <span class="badge-pill clickable"><span class="badge-bullet">•</span> Node / TypeScript</span>
  <span class="badge-pill clickable" onclick="window.open('https://github.com/Rahulraj62058', '_blank')"><span class="badge-bullet">•</span> Open Source Contributor</span>
</div>

<div class="doc-series">
  <div>
    <div class="md-h2">## What I do</div>
    <p class="md-paragraph">
    • <strong>Full Stack Development</strong>: end-to-end web apps with React, Next.js, TypeScript, Node.js<br>
    • <strong>Frontend Crafting</strong>: clean, responsive UIs in HTML5, modern CSS, and React<br>
    • <strong>Real Estate Portal</strong>: full-stack platform with filters, favorites, and admin panel<br>
    • <strong>Learning in Public</strong>: internship vlogs, milestones, and lessons — mistakes included.
    </p>
  </div>
  <div>
    <div class="md-h2">## Core Architecture</div>
    <p class="md-paragraph">
    • <span class="tok-type">Frontend</span>: React, Next.js, HTML5, CSS / Tailwind, JavaScript / TypeScript<br>
    • <span class="tok-type">Backend</span>: Node.js, Express, REST APIs, Python<br>
    • <span class="tok-type">Data</span>: MongoDB, PostgreSQL, Local Storage<br>
    • <span class="tok-type">Tools</span>: Git &amp; GitHub, VS Code, Postman, Vite, Vercel
    </p>
  </div>
  <div>
    <div class="md-h2">## Featured Highlights</div>
    <div class="hl-list">
      <div class="hl-row"><span class="hl-name">🏠 Real Estate Portal</span><span class="hl-sep">—</span><span class="hl-stack">React · Node.js · Express · MongoDB</span></div>
      <div class="hl-row"><span class="hl-name">⌚ Chronos</span><span class="hl-sep">—</span><span class="hl-stack">HTML5 · CSS3 · Responsive</span></div>
      <div class="hl-row"><span class="hl-name">💻 VS Code Portfolio</span><span class="hl-sep">—</span><span class="hl-stack">JavaScript · CSS3 · VS Code UI</span></div>
      <div class="hl-row"><span class="hl-name">📹 Internship Vlog Series</span><span class="hl-sep">—</span><span class="hl-stack">YouTube · Learning in Public</span></div>
    </div>
  </div>
</div>
</div>
`
    },

    "about/profile.json": {
      name: "profile.json",
      folder: "about",
      path: "about/profile.json",
      language: "json",
      icon: "json",
      symbols: [
        { name: "author", type: "Object", line: 2 },
        { name: "stats", type: "Object", line: 11 },
        { name: "skills", type: "Array", line: 18 },
        { name: "projects", type: "Array", line: 27 },
        { name: "contact", type: "Object", line: 34 }
      ],
      getRaw: () => `{
  "author": {
    "name": "Rahul Raj",
    "handle": "@Rahulraj62058",
    "role": "Full Stack Developer · Builder · Open source contributor",
    "education": "Second-year B.Tech CSE Student",
    "status": "🟢 Web Development Intern · Learning in Public & Shipping",
    "location": "India (Open to Remote Worldwide)",
    "yearsOfExperience": "1+"
  },
  "stats": {
    "shippedProjects": 12,
    "githubStars": 10,
    "coffeeConsumed": "∞ Cups",
    "continuousLearning": true
  },
  "skills": [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "HTML5 / Semantic CSS",
    "MongoDB",
    "Git & GitHub"
  ],
  "projects": [
    "Real Estate Portal (Full-stack with Admin Panel)",
    "Chronos (Pure HTML/CSS Luxury Watch Store)",
    "VS Code Developer Portfolio",
    "Internship YouTube Vlog Series"
  ],
  "contact": {
    "email": "rahulrajmaurya6205@gmail.com",
    "website": "https://rahul.dev",
    "twitter": "@rahulraj62058",
    "github": "https://github.com/Rahulraj62058"
  }
}`,
      renderHtml: () => `
<div class="code-view">
<span class="tok-punctuation">{</span><br>
&nbsp;&nbsp;<span class="tok-property">"author"</span><span class="tok-punctuation">:</span> <span class="tok-punctuation">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"name"</span><span class="tok-punctuation">:</span> <span class="tok-string">"Rahul Raj"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"handle"</span><span class="tok-punctuation">:</span> <span class="tok-string">"@Rahulraj62058"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"role"</span><span class="tok-punctuation">:</span> <span class="tok-string">"Full Stack Developer · Builder · Open source contributor"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"education"</span><span class="tok-punctuation">:</span> <span class="tok-string">"Second-year B.Tech CSE Student"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"status"</span><span class="tok-punctuation">:</span> <span class="tok-string">"🟢 Web Development Intern · Learning in Public & Shipping"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"location"</span><span class="tok-punctuation">:</span> <span class="tok-string">"India (Open to Remote Worldwide)"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"yearsOfExperience"</span><span class="tok-punctuation">:</span> <span class="tok-string">"1+"</span><br>
&nbsp;&nbsp;<span class="tok-punctuation">}</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;<span class="tok-property">"stats"</span><span class="tok-punctuation">:</span> <span class="tok-punctuation">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"shippedProjects"</span><span class="tok-punctuation">:</span> <span class="tok-number">12</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"githubStars"</span><span class="tok-punctuation">:</span> <span class="tok-number">10</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"coffeeConsumed"</span><span class="tok-punctuation">:</span> <span class="tok-string">"∞ Cups"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"continuousLearning"</span><span class="tok-punctuation">:</span> <span class="tok-keyword">true</span><br>
&nbsp;&nbsp;<span class="tok-punctuation">}</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;<span class="tok-property">"skills"</span><span class="tok-punctuation">:</span> <span class="tok-punctuation">[</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-string">"React"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-string">"Next.js"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-string">"JavaScript"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-string">"TypeScript"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-string">"Node.js"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-string">"HTML5 / Semantic CSS"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-string">"MongoDB"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-string">"Git &amp; GitHub"</span><br>
&nbsp;&nbsp;<span class="tok-punctuation">]</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;<span class="tok-property">"projects"</span><span class="tok-punctuation">:</span> <span class="tok-punctuation">[</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-string">"Real Estate Portal (Full-stack with Admin Panel)"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-string">"Chronos (Pure HTML/CSS Luxury Watch Store)"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-string">"VS Code Developer Portfolio"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-string">"Internship YouTube Vlog Series"</span><br>
&nbsp;&nbsp;<span class="tok-punctuation">]</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;<span class="tok-property">"contact"</span><span class="tok-punctuation">:</span> <span class="tok-punctuation">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"email"</span><span class="tok-punctuation">:</span> <span class="tok-string">"rahulrajmaurya6205@gmail.com"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"website"</span><span class="tok-punctuation">:</span> <span class="tok-string">"https://rahul.dev"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"twitter"</span><span class="tok-punctuation">:</span> <span class="tok-string">"@rahulraj62058"</span><span class="tok-punctuation">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-property">"github"</span><span class="tok-punctuation">:</span> <span class="tok-string">"https://github.com/Rahulraj62058"</span><br>
&nbsp;&nbsp;<span class="tok-punctuation">}</span><br>
<span class="tok-punctuation">}</span>
</div>`
    },

    "youtube/channels.yml": {
      name: "channels.yml",
      folder: "youtube",
      path: "youtube/channels.yml",
      language: "yaml",
      icon: "yml",
      symbols: [
        { name: "Rahul Raj - Dev Vlogs", type: "Channel", line: 2 },
        { name: "Chai aur Code Community", type: "Community", line: 12 }
      ],
      getRaw: () => `channels:
  - name: "Rahul Raj - Dev Vlogs"
    focus: "Internship Journey, Real-World Full Stack Builds & Learning in Public"
    topics:
      - "Web Development Internship Milestones & Workflows"
      - "Building Full-Stack Real Estate Portal from Scratch"
      - "Chronos Watch Store Pure HTML/CSS Journey"
      - "Mistakes Made & Lessons Learned Along the Way"

  - community: "Chai aur Code & Open Source"
    role: "Passionate Learner & Contributor"
    focus: "Inspired by Chai aur Code philosophy, building real projects and learning in public"
`,
      renderHtml: () => `
<div class="code-view">
<span class="tok-comment"># YouTube Channels & Content Creation</span><br><br>

<div class="projects-grid">
  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">📹 Rahul Raj Dev Vlogs</span>
      <div class="project-links">
        <a href="https://youtube.com" target="_blank" class="project-link-btn">Watch</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">Internship Journey · Learning in Public</div>
    <p class="project-desc">Documenting daily web development internship progress, architectural insights, coding milestones, and real-world project builds.</p>
    <div class="project-tags">
      <span class="project-tag">Internship Vlog</span>
      <span class="project-tag">Real Estate Portal</span>
      <span class="project-tag">Learning in Public</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">☕ Chai aur Code Community</span>
      <div class="project-links">
        <a href="https://youtube.com/@chaiaurcode" target="_blank" class="project-link-btn">Community</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">Active Learner & Contributor</div>
    <p class="project-desc">Inspired by Hitesh Choudhary's Chai aur Code philosophy — building real-world software and sharing the entire learning process.</p>
    <div class="project-tags">
      <span class="project-tag">Community</span>
      <span class="project-tag">Open Source</span>
      <span class="project-tag">Peer Learning</span>
    </div>
  </div>
</div>
</div>`
    },

    "platforms/platforms.tsx": {
      name: "platforms.tsx",
      folder: "platforms",
      path: "platforms/platforms.tsx",
      language: "typescript",
      icon: "tsx",
      symbols: [
        { name: "Platform", type: "Interface", line: 3 },
        { name: "PLATFORMS", type: "Constant", line: 11 }
      ],
      getRaw: () => `export interface Platform {
  name: string;
  url: string;
  description: string;
  role: string;
  stats: string;
}

export const PLATFORMS: Platform[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    description: "Home to my open-source repositories, developer tools, and projects.",
    role: "Full Stack Builder",
    stats: "10+ Stars · 12+ Shipped Projects"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    description: "Professional updates, internship journey, and project milestones.",
    role: "Full Stack Developer",
    stats: "Learning & Networking"
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    description: "Documenting internship progress and sharing video breakdowns.",
    role: "Content Creator",
    stats: "Dev Vlog Series"
  }
];`,
      renderHtml: () => `
<div class="code-view">
<span class="tok-comment">// Digital Platforms & Online Profiles</span><br><br>

<div class="projects-grid">
  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">🐙 GitHub</span>
      <div class="project-links">
        <a href="https://github.com" target="_blank" class="project-link-btn">Profile</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">10+ Stars · 12+ Shipped Projects</div>
    <p class="project-desc">Home to open-source codebases including Chronos watch store, Real Estate Portal, and VS Code portfolio.</p>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">💼 LinkedIn</span>
      <div class="project-links">
        <a href="https://linkedin.com" target="_blank" class="project-link-btn">Profile</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">Engineering & Career Journey</div>
    <p class="project-desc">Professional updates, internship learnings, development insights, and milestones.</p>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">📹 YouTube</span>
      <div class="project-links">
        <a href="https://youtube.com" target="_blank" class="project-link-btn">Channel</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">Developer Vlog Series</div>
    <p class="project-desc">Documenting real-world web development internship lessons, project builds, and learning in public.</p>
  </div>
</div>
</div>`
    },

    "udemy/courses.md": {
      name: "courses.md",
      folder: "udemy",
      path: "udemy/courses.md",
      language: "markdown",
      icon: "md",
      symbols: [
        { name: "Curated Learning & Foundation", type: "Header 1", line: 1 },
        { name: "Academic & Internship Foundation", type: "Header 2", line: 3 },
        { name: "Self-Taught & Online Specializations", type: "Header 2", line: 10 }
      ],
      getRaw: () => `# Curated Courses & Continuous Learning

## Academic & Internship Foundation
- **B.Tech in Computer Science & Engineering (2nd Year)**
  - Core Focus: Data Structures & Algorithms, Object-Oriented Design, Database Systems.
- **Web Development Internship**
  - Active real-world development, production workflows, component architecture, and team collaboration.

## Self-Taught & Online Specializations
- **Chai aur Code**: Complete JavaScript & React Series (Hitesh Choudhary)
- **Full Stack Web Development**: React, Next.js, Node.js, Express, and MongoDB
- **Modern Responsive Design**: HTML5 semantic markup, modern CSS3 animations, and UI layouts
`,
      renderHtml: () => `
<div class="md-h1"># Curated Courses & Continuous Learning</div>

<div class="md-h2">## Academic & Internship Foundation</div>
<p class="md-paragraph">
• <strong>B.Tech in Computer Science & Engineering (2nd Year)</strong>: Core study in Data Structures, Algorithms, DBMS, and Object-Oriented Programming.<br>
• <strong>Web Development Internship</strong>: Production workflows, UI components, API integration, and collaborative shipping.
</p>

<div class="md-h2">## Self-Taught & Online Specializations</div>
<p class="md-paragraph">
• <strong>Chai aur Code Series</strong>: JavaScript foundations, modern React state architecture, and practical coding exercises.<br>
• <strong>Full Stack Web Development</strong>: React, Next.js, Node.js, Express, and MongoDB database design.<br>
• <strong>Semantic HTML5 & Modern CSS3</strong>: Crafting accessible layouts, Flexbox/Grid systems, and micro-interactions.
</p>
`
    },

    "products/products.json": {
      name: "products.json",
      folder: "products",
      path: "products/products.json",
      language: "json",
      icon: "json",
      symbols: [
        { name: "products", type: "Array", line: 2 },
        { name: "Real Estate Portal", type: "Object", line: 3 },
        { name: "Chronos Watch Store", type: "Object", line: 11 },
        { name: "VS Code Portfolio", type: "Object", line: 19 },
        { name: "Internship Vlog Series", type: "Object", line: 27 }
      ],
      getRaw: () => `{
  "products": [
    {
      "name": "Real Estate Portal",
      "tagline": "Full-stack property platform with dynamic search filters, favorites bookmarking & admin panel",
      "status": "Active Development",
      "techStack": ["React", "Node.js", "Express", "MongoDB"],
      "url": "https://github.com"
    },
    {
      "name": "Chronos Watch Store",
      "tagline": "Luxury watch e-commerce storefront crafted purely in semantic HTML5 & modern CSS3",
      "status": "Shipped",
      "techStack": ["HTML5", "CSS3", "Responsive Design", "Flexbox/Grid"],
      "url": "https://github.com"
    },
    {
      "name": "VS Code Portfolio",
      "tagline": "Interactive developer portfolio recreating the Visual Studio Code workspace with live webcam & terminal",
      "status": "Live",
      "techStack": ["Vanilla JS", "CSS3", "HTML5", "VS Code UI"],
      "url": "http://localhost:3000"
    },
    {
      "name": "Internship Vlog Series",
      "tagline": "Documenting daily web dev internship progress, real-world development challenges, and milestones",
      "status": "Ongoing Series",
      "techStack": ["YouTube", "Content Creation", "Dev Journey"],
      "url": "https://youtube.com"
    }
  ]
}`,
      renderHtml: () => `
<div class="code-view">
<span class="tok-comment">// Shipped Projects & Real-World Builds by Rahul Raj</span><br><br>

<div class="projects-grid">
  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">🏠 Real Estate Portal</span>
      <div class="project-links">
        <a href="https://github.com" target="_blank" class="project-link-btn">Code</a>
        <a href="https://github.com" target="_blank" class="project-link-btn">Demo</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">Full-Stack · Active Development</div>
    <p class="project-desc">A complete real estate portal featuring verified property listings, dynamic search filters, favorites bookmarking, and an admin management dashboard.</p>
    <div class="project-tags">
      <span class="project-tag">React</span>
      <span class="project-tag">Node.js</span>
      <span class="project-tag">Express</span>
      <span class="project-tag">MongoDB</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">⌚ Chronos Watch E-Commerce</span>
      <div class="project-links">
        <a href="https://github.com" target="_blank" class="project-link-btn">Code</a>
        <a href="https://github.com" target="_blank" class="project-link-btn">Demo</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">Pure HTML &amp; CSS Craftsmanship</div>
    <p class="project-desc">A luxury watch e-commerce storefront crafted purely in semantic HTML5 and modern responsive CSS3 with smooth transitions and micro-interactions.</p>
    <div class="project-tags">
      <span class="project-tag">HTML5</span>
      <span class="project-tag">CSS3</span>
      <span class="project-tag">Responsive</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">💻 VS Code Portfolio</span>
      <div class="project-links">
        <a href="https://github.com" target="_blank" class="project-link-btn">Code</a>
        <a href="http://localhost:3000" target="_blank" class="project-link-btn">Live</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">Interactive IDE Experience</div>
    <p class="project-desc">Personal developer portfolio recreating the Visual Studio Code interface with multi-tab editor, minimap, terminal shell, and live webcam widget.</p>
    <div class="project-tags">
      <span class="project-tag">Vanilla JS</span>
      <span class="project-tag">CSS3</span>
      <span class="project-tag">VS Code UI</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">📹 Internship Vlog Series</span>
      <div class="project-links">
        <a href="https://youtube.com" target="_blank" class="project-link-btn">Watch</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">Learning in Public</div>
    <p class="project-desc">Documenting my day-to-day web development internship, talking about milestones, architecture decisions, and lessons learned along the way.</p>
    <div class="project-tags">
      <span class="project-tag">YouTube</span>
      <span class="project-tag">Vlog</span>
      <span class="project-tag">Dev Journey</span>
    </div>
  </div>
</div>
</div>`
    },

    "projects/featured.ts": {
      name: "featured.ts",
      folder: "projects",
      path: "projects/featured.ts",
      language: "typescript",
      icon: "typescript",
      symbols: [
        { name: "Project", type: "Interface", line: 3 },
        { name: "FEATURED_PROJECTS", type: "Constant", line: 12 },
        { name: "Real Estate Portal", type: "Object", line: 13 },
        { name: "Chronos Watch Store", type: "Object", line: 24 },
        { name: "VS Code Portfolio", type: "Object", line: 35 },
        { name: "Internship Vlog Series", type: "Object", line: 46 }
      ],
      getRaw: () => `// Featured Production Projects by Rahul Raj
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  metrics: string;
  githubUrl: string;
  liveDemoUrl: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "real-estate-portal",
    title: "Real Estate Portal",
    tagline: "Full-stack property platform with search filters, favorites & admin panel",
    description: "Developed a full-stack real estate platform featuring dynamic property listings, advanced multi-criteria filters, favorites bookmarking, and a protected admin management panel.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    metrics: "Full-Stack · Active Development",
    githubUrl: "https://github.com",
    liveDemoUrl: "https://github.com"
  },
  {
    id: "chronos",
    title: "Chronos Watch Store",
    tagline: "Luxury watch e-commerce storefront crafted purely in semantic HTML5 & modern CSS3",
    description: "An elegant, responsive luxury watch storefront engineered from scratch using semantic HTML5 and modern CSS3 animations without frameworks.",
    techStack: ["HTML5", "CSS3", "Responsive Design", "Flexbox/Grid"],
    metrics: "Shipped · Pure HTML/CSS Mastery",
    githubUrl: "https://github.com",
    liveDemoUrl: "https://github.com"
  },
  {
    id: "vscode-portfolio",
    title: "VS Code Developer Portfolio",
    tagline: "Interactive developer portfolio recreating the Visual Studio Code workspace",
    description: "Personal developer portfolio website meticulously recreating the authentic Visual Studio Code interface with an interactive terminal shell, multi-tab editor, minimap, and floating webcam widget.",
    techStack: ["JavaScript", "CSS3", "VS Code Design System", "HTML5"],
    metrics: "Shipped & Live",
    githubUrl: "https://github.com",
    liveDemoUrl: "http://localhost:3000"
  },
  {
    id: "internship-vlogs",
    title: "Internship YouTube Vlog Series",
    tagline: "Documenting daily web dev internship progress, real-world development challenges, and milestones",
    description: "A YouTube vlog series sharing the day-to-day journey of a web development intern, covering code decisions, project milestones, and lessons learned while learning in public.",
    techStack: ["YouTube", "Video Production", "Dev Journey", "Community"],
    metrics: "Weekly Episodes · Learning in Public",
    githubUrl: "https://youtube.com",
    liveDemoUrl: "https://youtube.com"
  }
];`,
      renderHtml: () => `
<div class="code-view">
<span class="tok-comment">// Featured Production Projects by Rahul Raj</span><br>
<span class="tok-keyword">export interface</span> <span class="tok-type">Project</span> <span class="tok-punctuation">{</span><br>
&nbsp;&nbsp;<span class="tok-property">id</span><span class="tok-punctuation">:</span> <span class="tok-type">string</span><span class="tok-punctuation">;</span><br>
&nbsp;&nbsp;<span class="tok-property">title</span><span class="tok-punctuation">:</span> <span class="tok-type">string</span><span class="tok-punctuation">;</span><br>
&nbsp;&nbsp;<span class="tok-property">tagline</span><span class="tok-punctuation">:</span> <span class="tok-type">string</span><span class="tok-punctuation">;</span><br>
&nbsp;&nbsp;<span class="tok-property">description</span><span class="tok-punctuation">:</span> <span class="tok-type">string</span><span class="tok-punctuation">;</span><br>
&nbsp;&nbsp;<span class="tok-property">techStack</span><span class="tok-punctuation">:</span> <span class="tok-type">string</span><span class="tok-punctuation">[]</span><span class="tok-punctuation">;</span><br>
&nbsp;&nbsp;<span class="tok-property">metrics</span><span class="tok-punctuation">:</span> <span class="tok-type">string</span><span class="tok-punctuation">;</span><br>
&nbsp;&nbsp;<span class="tok-property">githubUrl</span><span class="tok-punctuation">:</span> <span class="tok-type">string</span><span class="tok-punctuation">;</span><br>
&nbsp;&nbsp;<span class="tok-property">liveDemoUrl</span><span class="tok-punctuation">:</span> <span class="tok-type">string</span><span class="tok-punctuation">;</span><br>
<span class="tok-punctuation">}</span><br><br>

<div class="projects-grid">
  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">🏠 Real Estate Portal</span>
      <div class="project-links">
        <a href="https://github.com" target="_blank" class="project-link-btn">GitHub</a>
        <a href="https://github.com" target="_blank" class="project-link-btn">Demo</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">Full-Stack · Active Development</div>
    <p class="project-desc">Real estate portal with verified property listings, dynamic search filters, favorites bookmarking, and an admin management dashboard.</p>
    <div class="project-tags">
      <span class="project-tag">React</span>
      <span class="project-tag">Node.js</span>
      <span class="project-tag">Express</span>
      <span class="project-tag">MongoDB</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">⌚ Chronos Watch Store</span>
      <div class="project-links">
        <a href="https://github.com" target="_blank" class="project-link-btn">GitHub</a>
        <a href="https://github.com" target="_blank" class="project-link-btn">Demo</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">Pure HTML &amp; CSS Craftsmanship</div>
    <p class="project-desc">A luxury watch e-commerce storefront crafted purely in semantic HTML5 and responsive modern CSS3 with smooth animations.</p>
    <div class="project-tags">
      <span class="project-tag">HTML5</span>
      <span class="project-tag">CSS3</span>
      <span class="project-tag">Responsive</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">💻 VS Code Portfolio</span>
      <div class="project-links">
        <a href="https://github.com" target="_blank" class="project-link-btn">GitHub</a>
        <a href="http://localhost:3000" target="_blank" class="project-link-btn">Live</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">Interactive IDE Experience</div>
    <p class="project-desc">Personal developer portfolio recreating the Visual Studio Code interface with interactive terminal and live draggable webcam widget.</p>
    <div class="project-tags">
      <span class="project-tag">JavaScript</span>
      <span class="project-tag">CSS3</span>
      <span class="project-tag">VS Code UI</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <span class="project-title">📹 Internship Vlog Series</span>
      <div class="project-links">
        <a href="https://youtube.com" target="_blank" class="project-link-btn">Watch</a>
      </div>
    </div>
    <div style="font-size: 15px; color: #e3b341; margin-bottom: 6px;">Learning in Public</div>
    <p class="project-desc">Documenting daily internship progress, real-world development workflows, challenges, and coding milestones on YouTube.</p>
    <div class="project-tags">
      <span class="project-tag">YouTube</span>
      <span class="project-tag">Vlog</span>
      <span class="project-tag">Dev Journey</span>
    </div>
  </div>
</div>
</div>`
    },

    "experience/career.yml": {
      name: "career.yml",
      folder: "experience",
      path: "experience/career.yml",
      language: "yaml",
      icon: "yaml",
      symbols: [
        { name: "Web Development Intern", type: "Role", line: 2 },
        { name: "Second-year B.Tech CSE Student", type: "Role", line: 11 },
        { name: "Builder & Open Source Contributor", type: "Role", line: 20 }
      ],
      getRaw: () => `career_milestones:
  - role: "Web Development Intern"
    company: "Technology Internship"
    period: "2025 - Present"
    location: "India (Active)"
    highlights:
      - "Working on real-world web application development, responsive layouts, and modern component architectures."
      - "Integrating frontend components with backend REST APIs and database endpoints."
      - "Documenting internship learnings, workflows, and insights in a dedicated YouTube vlog series."

  - role: "Computer Science & Engineering Student"
    institution: "B.Tech CSE (Second Year)"
    period: "2024 - Present"
    location: "India"
    highlights:
      - "Studying Data Structures & Algorithms, Object-Oriented Programming, DBMS, and Operating Systems."
      - "Hands-on implementation of full-stack projects alongside academic coursework."

  - role: "Builder & Open Source Contributor"
    period: "2024 - Present"
    highlights:
      - "Created Chronos luxury watch store in pure semantic HTML5 and modern CSS3."
      - "Developing full-stack Real Estate Portal with search filters, favorites, and admin panel."
      - "Actively sharing code in public and contributing to developer learning communities."
`,
      renderHtml: () => `
<div class="code-view">
<span class="tok-comment"># Career Milestones & Experience Journey</span><br><br>

<div class="timeline-container">
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-role">Web Development Intern · <span class="timeline-company">Active Internship</span></div>
    <div class="timeline-period">2025 - Present · India</div>
    <div class="timeline-desc">
      • Working on real-world web application development, responsive layouts, and modern component architectures.<br>
      • Integrating frontend components with backend REST APIs and database endpoints.<br>
      • Documenting daily progress, challenges, and coding milestones on YouTube.
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-role">Computer Science &amp; Engineering Student · <span class="timeline-company">B.Tech CSE (2nd Year)</span></div>
    <div class="timeline-period">2024 - Present · India</div>
    <div class="timeline-desc">
      • Core study in Data Structures &amp; Algorithms, Object-Oriented Design, and Database Management.<br>
      • Building practical full-stack projects alongside coursework.
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-role">Builder &amp; Open Source Contributor</div>
    <div class="timeline-period">2024 - Present</div>
    <div class="timeline-desc">
      • Built Chronos watch store in pure semantic HTML/CSS, Real Estate Portal, and VS Code portfolio.<br>
      • Learning in public, sharing video breakdowns, and contributing to developer communities.
    </div>
  </div>
</div>
</div>`
    },

    "skills/tech-stack.json": {
      name: "tech-stack.json",
      folder: "skills",
      path: "skills/tech-stack.json",
      language: "json",
      icon: "json",
      symbols: [
        { name: "frontend", type: "Array", line: 2 },
        { name: "backend", type: "Array", line: 10 },
        { name: "databases", type: "Array", line: 17 },
        { name: "tools_workflows", type: "Array", line: 24 }
      ],
      getRaw: () => `{
  "skills": {
    "frontend": [
      { "name": "HTML5 & Semantic Markup", "level": "Advanced" },
      { "name": "Modern CSS3 (Flexbox/Grid/Animations)", "level": "Advanced" },
      { "name": "JavaScript (ES6+)", "level": "Proficient" },
      { "name": "React & Next.js", "level": "Proficient" },
      { "name": "Tailwind CSS", "level": "Proficient" }
    ],
    "backend": [
      { "name": "Node.js & Express", "level": "Proficient" },
      { "name": "RESTful API Design", "level": "Proficient" },
      { "name": "Python", "level": "Intermediate" }
    ],
    "databases": [
      { "name": "MongoDB", "level": "Proficient" },
      { "name": "PostgreSQL", "level": "Intermediate" },
      { "name": "LocalStorage / IndexedDB", "level": "Advanced" }
    ],
    "tools_workflows": [
      { "name": "Git & GitHub", "level": "Proficient" },
      { "name": "VS Code", "level": "Advanced" },
      { "name": "Postman", "level": "Proficient" },
      { "name": "Vite & Vercel", "level": "Proficient" }
    ]
  }
}`,
      renderHtml: () => `
<div class="code-view">
<span class="tok-comment">// Technical Proficiencies & Core Competencies</span><br><br>

<div class="skills-category-block">
  <div class="skills-category-title">⚡ Frontend Engineering</div>
  <div class="skill-pill-container">
    <div class="skill-pill"><span>HTML5 / Semantic Markup</span> <span class="skill-level">★★★★★</span></div>
    <div class="skill-pill"><span>Modern CSS3 &amp; Animations</span> <span class="skill-level">★★★★★</span></div>
    <div class="skill-pill"><span>JavaScript (ES6+)</span> <span class="skill-level">★★★★☆</span></div>
    <div class="skill-pill"><span>React / Next.js</span> <span class="skill-level">★★★★☆</span></div>
    <div class="skill-pill"><span>Tailwind CSS</span> <span class="skill-level">★★★★☆</span></div>
  </div>
</div>

<div class="skills-category-block">
  <div class="skills-category-title">🛠️ Backend &amp; APIs</div>
  <div class="skill-pill-container">
    <div class="skill-pill"><span>Node.js / Express</span> <span class="skill-level">★★★★☆</span></div>
    <div class="skill-pill"><span>RESTful API Design</span> <span class="skill-level">★★★★☆</span></div>
    <div class="skill-pill"><span>Python</span> <span class="skill-level">★★★☆☆</span></div>
  </div>
</div>

<div class="skills-category-block">
  <div class="skills-category-title">🗄️ Databases &amp; Storage</div>
  <div class="skill-pill-container">
    <div class="skill-pill"><span>MongoDB</span> <span class="skill-level">★★★★☆</span></div>
    <div class="skill-pill"><span>PostgreSQL</span> <span class="skill-level">★★★☆☆</span></div>
    <div class="skill-pill"><span>LocalStorage</span> <span class="skill-level">★★★★★</span></div>
  </div>
</div>

<div class="skills-category-block">
  <div class="skills-category-title">☁️ Tools &amp; Deployment</div>
  <div class="skill-pill-container">
    <div class="skill-pill"><span>Git &amp; GitHub</span> <span class="skill-level">★★★★☆</span></div>
    <div class="skill-pill"><span>VS Code</span> <span class="skill-level">★★★★★</span></div>
    <div class="skill-pill"><span>Postman</span> <span class="skill-level">★★★★☆</span></div>
    <div class="skill-pill"><span>Vercel &amp; Vite</span> <span class="skill-level">★★★★☆</span></div>
  </div>
</div>
</div>`
    },

    "education/courses.md": {
      name: "courses.md",
      folder: "education",
      path: "education/courses.md",
      language: "markdown",
      icon: "markdown",
      symbols: [
        { name: "Bachelor of Technology", type: "Degree", line: 3 },
        { name: "Web Development Internship", type: "Role", line: 9 },
        { name: "Continuous Learning", type: "Header 2", line: 15 }
      ],
      getRaw: () => `# Education & Learning Journey

## Academic Degree
- **Bachelor of Technology (B.Tech) in Computer Science & Engineering**
  - Second Year Student
  - Core subjects: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems.

## Professional Experience
- **Web Development Intern** (2025 - Present)
  - Practical full-stack feature development, UI component building, and API integration.

## Continuous Learning & Building in Public
- Chai aur Code Series (Hitesh Choudhary)
- Building real-world applications (Real Estate Portal, Chronos)
- Documenting lessons learned on YouTube and GitHub
`,
      renderHtml: () => `
<div class="md-h1"># Education &amp; Learning Journey</div>

<div class="md-h2">## Academic Degree</div>
<p class="md-paragraph">
• <strong>Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering</strong><br>
&nbsp;&nbsp;Second Year Student<br>
&nbsp;&nbsp;Core study: Data Structures &amp; Algorithms, Object-Oriented Design, Database Systems, Computer Networks
</p>

<div class="md-h2">## Professional Experience</div>
<p class="md-paragraph">
• <strong>Web Development Intern</strong> (2025 - Present)<br>
&nbsp;&nbsp;Active real-world web development, frontend UI architecture, and backend API integration.
</p>

<div class="md-h2">## Continuous Learning &amp; Building in Public</div>
<p class="md-paragraph">
• Chai aur Code full-stack series and community participation.<br>
• Sharing internship milestones and software development lessons on YouTube.
</p>
`
    },

    "connect/socials.ts": {
      name: "socials.ts",
      folder: "connect",
      path: "connect/socials.ts",
      language: "typescript",
      icon: "typescript",
      symbols: [
        { name: "SocialLink", type: "Interface", line: 3 },
        { name: "SOCIAL_LINKS", type: "Constant", line: 10 }
      ],
      getRaw: () => `// Direct Social & Collaboration Handles
export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  color: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Email", handle: "rahulrajmaurya6205@gmail.com", url: "mailto:rahulrajmaurya6205@gmail.com", color: "#ea4335" },
  { platform: "GitHub", handle: "@Rahulraj62058", url: "https://github.com/Rahulraj62058", color: "#f0f6fc" },
  { platform: "LinkedIn", handle: "in/rahul-raj-00645a2b6", url: "https://www.linkedin.com/in/rahul-raj-00645a2b6/", color: "#0a66c2" },
  { platform: "Twitter / X", handle: "@rahulraj62058", url: "https://x.com/rahulraj62058", color: "#1d9bf0" },
  { platform: "YouTube", handle: "@rahuldev62-f5c", url: "https://youtube.com/@rahuldev62-f5c?si=pE8o6mbRalnLQYpM", color: "#ff0000" }
];`,
      renderHtml: () => `
<div class="code-view">
<span class="tok-comment">// Let's Connect! Click any badge or link to open:</span><br><br>

<div class="badge-list" style="margin-top: 10px;">
  <span class="badge-pill clickable" onclick="window.open('mailto:rahulrajmaurya6205@gmail.com')">
    📧 Email: rahulrajmaurya6205@gmail.com
  </span>
  <span class="badge-pill clickable" onclick="window.open('https://github.com/Rahulraj62058', '_blank')">
    🐙 GitHub: @Rahulraj62058
  </span>
  <span class="badge-pill clickable" onclick="window.open('https://www.linkedin.com/in/rahul-raj-00645a2b6/', '_blank')">
    💼 LinkedIn: in/rahul-raj-00645a2b6
  </span>
  <span class="badge-pill clickable" onclick="window.open('https://x.com/rahulraj62058', '_blank')">
    🐦 Twitter / X: @rahulraj62058
  </span>
  <span class="badge-pill clickable" onclick="window.open('https://youtube.com/@rahuldev62-f5c?si=pE8o6mbRalnLQYpM', '_blank')">
    📹 YouTube: @rahuldev62-f5c
  </span>
</div>

<p class="md-paragraph" style="margin-top: 20px;">
Tip: You can also print contact info in the terminal below by typing: <br>
<code style="background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; color: #7ee787;">echo $CONTACT</code> or <code style="background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; color: #7ee787;">contact</code>
</p>
</div>`
    },

    "LICENSE.txt": {
      name: "LICENSE.txt",
      folder: "",
      path: "LICENSE.txt",
      language: "text",
      icon: "text",
      symbols: [
        { name: "MIT License", type: "License", line: 1 }
      ],
      getRaw: () => `MIT License

Copyright (c) 2026 Rahul Raj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      renderHtml: () => `
<div class="code-view">
<pre style="font-family: var(--font-code); line-height: 20px; color: #a0a0a0;">
MIT License

Copyright (c) 2026 Rahul Raj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
</pre>
</div>`
    },

    ".gitignore": {
      name: ".gitignore",
      folder: "",
      path: ".gitignore",
      language: "text",
      icon: "git",
      symbols: [
        { name: "Dependencies", type: "Comment", line: 1 },
        { name: "Bad Vibes", type: "Comment", line: 6 }
      ],
      getRaw: () => `# Dependencies
node_modules/
.pnp
.pnp.js

# Production builds
dist/
build/
.next/
out/

# Bad vibes & developer struggles
bugs/
imposter_syndrome/
friday_5pm_deployments/
cold_coffee.tmp
procrastination.log

# Environment variables
.env
.env.local
.env.production
`,
      renderHtml: () => `
<div class="code-view">
<pre style="font-family: var(--font-code); line-height: 22px;">
<span class="tok-comment"># Dependencies</span>
node_modules/
.pnp
.pnp.js

<span class="tok-comment"># Production builds</span>
dist/
build/
.next/
out/

<span class="tok-comment"># Bad vibes & developer struggles</span>
bugs/
imposter_syndrome/
friday_5pm_deployments/
cold_coffee.tmp
procrastination.log

<span class="tok-comment"># Environment variables</span>
.env
.env.local
      .env.production
      </pre>
    </div>`
    }
  }
};
