<script lang="ts">
    import { base } from "$app/paths";
    import profile from "$lib/assets/profile.jpg";

    const name = "Haiqal Aly Hazamy";
    const role = "Backend & Systems Engineer";
    const location = "Indonesia";
    const email = "alyhazamy@protonmail.com";
    const github = "https://github.com/Isvane";

    const techStack = [
        { category: "Languages", techs: ["Rust", "Go", "TypeScript"] },
        { category: "Databases", techs: ["PostgreSQL", "Redis", "SQLite"] },
        { category: "Infra", techs: ["Docker", "Linux", "Git"] },
        { category: "Learning", techs: ["WebAssembly", "Svelte"] },
    ];

    const contributions = [
        {
            repo: "tower-rs/tower-http",
            title: "Fix trailing slash behavior in file serving",
            desc: "Updated `ServeDir` to return 404 for file paths with trailing slashes, bringing behavior in line with standard web server expectations while preserving directory index handling.",
            link: "https://github.com/tower-rs/tower-http/pull/678",
            status: "Merged",
        },
        {
            repo: "lumen-oss/lux",
            title: "Support directory targets for lx-lint",
            desc: "Extracted shared path classification tools and implemented root up-tree workspace lookups to allow linting specific directories and loose files.",
            link: "https://github.com/lumen-oss/lux/pull/1656",
            status: "Merged",
        },
    ];
</script>

<div class="ambient-glow"></div>

<nav class="brand-nav glass-nav fade-in">
    <div class="nav-content container">
        <span class="logo">
            Phantasia
            <span class="accent-wrapper">
                <span class="accent-icon">✦</span>
            </span>
        </span>
        <div class="nav-links">
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#stack" class="nav-link">Stack</a>
            <a href="#opensource" class="nav-link">Open Source</a>
        </div>
    </div>
</nav>

<main class="portfolio-container">
    <section class="hero-section container">
        <div class="hero-content fade-up delay-1">
            <h1>{name}</h1>
            <p class="subtitle">
                <span class="highlight">{role}</span>
                <span class="dot dot-mobile">·</span>
                {location}
            </p>
            <p class="bio">
                3rd-year CS student building developer tools and backend
                projects. I got a relatively late start to coding, so I
                prioritize hands-on building, shipping practical software, and
                contributing to open source over studying pure theory or
                grinding LeetCode.
            </p>
            <div class="hero-links">
                <a href="mailto:{email}" class="link icon-link button-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Email Me
                </a>

                <a href={github} target="_blank" rel="noreferrer" class="link icon-link button-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    GitHub
                </a>
            </div>
        </div>
        <div class="hero-visual fade-up delay-2">
            <img src={profile} alt="Profile" class="profile-pic glass-panel" />
            <div class="visual-accent"></div>
        </div>
    </section>

    <section id="projects" class="section alt-bg">
        <div class="container fade-up delay-3">
            <div class="section-header">
                <h2 class="section-title">Featured Projects</h2>
                <div class="line"></div>
            </div>

            <div class="project-grid">
                <div class="project-card glass-panel">
                    <div class="project-header">
                        <h3>fuzzies</h3>
                        <span class="badge">
                            <span class="badge-dot"></span>
                            Rust
                        </span>
                    </div>
                    <p class="project-desc">
                        Fast and easy-to-use Rust library for instant, typo-tolerant
                        search. Takes the headache out of complex fuzzy lookups
                        with a clean API that runs on both the backend and in
                        the browser via WebAssembly.
                    </p>
                    <div class="project-footer">
                        <a href="{base}/project/fuzzies" class="cta-button">
                            Launch Fuzzies <span class="arrow">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="stack" class="section">
        <div class="container fade-up delay-4">
            <div class="section-header">
                <h2 class="section-title">Tech Stack</h2>
                <div class="line"></div>
            </div>

            <div class="tech-layout">
                <div class="tech-info">
                    <h3>Tools I Build With</h3>
                    <p>
                        I mostly stick to strongly-typed languages like Rust and
                        Go, along with tools like PostgreSQL and Docker, to
                        build simple, reliable backend projects and developer
                        tools.
                    </p>
                </div>
                <div class="tech-cli glass-panel">
                    <div class="cli-header">
                        <span class="dot stack red"></span>
                        <span class="dot stack yellow"></span>
                        <span class="dot stack green"></span>
                    </div>
                    <div class="cli-body">
                        {#each techStack as { category, techs }}
                            <div class="cli-line">
                                <span class="cli-prompt">haiqal@phantasia:~$</span>
                                <span class="cli-command">cat</span>
                                {category.toLowerCase()}.txt
                            </div>
                            <div class="cli-output">
                                {techs.join(" · ")}
                            </div>
                        {/each}
                        <div class="cli-line">
                            <span class="cli-prompt">haiqal@phantasia:~$</span>
                            <span class="cli-cursor"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="opensource" class="section alt-bg">
        <div class="container fade-up delay-5">
            <div class="section-header">
                <h2 class="section-title">Open Source & PRs</h2>
                <div class="line"></div>
            </div>

            <div class="project-grid">
                {#each contributions as pr}
                    <a
                        href={pr.link}
                        target="_blank"
                        rel="noreferrer"
                        class="project-card glass-panel pr-card"
                    >
                        <div class="project-header">
                            <h3>{pr.repo}</h3>
                            <span class="badge pr-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="18" cy="18" r="3"></circle>
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                                    <line x1="6" y1="9" x2="6" y2="21"></line>
                                </svg>
                                {pr.status}
                            </span>
                        </div>
                        <h4 class="pr-title">{pr.title}</h4>
                        <p class="project-desc">
                            {pr.desc}
                        </p>
                        <div class="project-footer">
                            <span class="cta-button">
                                View Pull Request <span class="arrow">&rarr;</span>
                            </span>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </section>
</main>

<style>
    .portfolio-container {
        position: relative;
        z-index: 1;
        padding-top: 100px;
    }

    .glass-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: var(--surface);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--border);
        z-index: 100;
        padding: 1rem 0;
    }

    .nav-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-links {
        display: flex;
        gap: 1.5rem;
    }

    .nav-link {
        color: var(--text-muted);
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9rem;
        transition: color 0.3s;
    }

    .nav-link:hover {
        color: var(--text-main);
    }

    .logo {
        font-weight: 600;
        font-size: 1.25rem;
        letter-spacing: -0.02em;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(135deg, var(--text-main), var(--accent));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .accent-wrapper {
        display: inline-flex;
        perspective: 100px;
    }

    .accent-icon {
        color: var(--accent);
        font-size: 1.25rem;
        display: inline-block;
        transform-origin: center;
        animation: ethereal-float 4s ease-in-out infinite;
    }

    @keyframes ethereal-float {
        0%, 100% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.8; }
        50% { transform: translateY(-3px) scale(1.1) rotate(5deg); opacity: 1; text-shadow: 0 0 10px var(--accent); }
    }

    .hero-section {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 4rem;
        align-items: center;
        min-height: 70vh;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    .hero-content h1 {
        font-size: clamp(2.5rem, 5vw, 3.5rem);
        font-weight: 600;
        letter-spacing: -0.03em;
        margin-bottom: 0.5rem;
        line-height: 1.1;
    }

    .subtitle {
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 1rem;
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .highlight {
        color: var(--accent);
        font-weight: 500;
    }

    .dot {
        color: var(--accent-red);
        opacity: 0.7;
    }

    .bio {
        font-size: 1.1rem;
        color: var(--text-muted);
        margin-bottom: 2.5rem;
        font-weight: 400;
        line-height: 1.7;
    }

    .hero-links {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .link {
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        transition: all 0.3s ease;
    }

    .button-primary {
        background: linear-gradient(135deg, var(--accent), var(--accent-red));
        color: white;
        box-shadow: 0 4px 15px rgba(168, 85, 247, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .button-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(225, 29, 72, 0.35);
        filter: brightness(1.1);
    }

    .button-secondary {
        background: rgba(255, 255, 255, 0.05);
        color: var(--text-main);
        border: 1px solid var(--border);
    }

    .button-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: var(--accent);
        transform: translateY(-2px);
    }

    .icon-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .hero-visual {
        position: relative;
        width: 100%;
        aspect-ratio: 4/3;
    }

    .profile-pic {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        z-index: 2;
    }

    .visual-accent {
        position: absolute;
        top: -10px;
        right: -10px;
        bottom: 10px;
        left: 10px;
        background: linear-gradient(140deg, var(--accent-red), var(--accent));
        border-radius: 16px;
        z-index: 1;
        transition: transform 0.4s ease;
        opacity: 0.5;
        filter: blur(2px);
    }

    .hero-visual:hover .visual-accent {
        transform: translate(-5px, 5px);
        filter: blur(4px);
    }

    .hero-visual:hover .profile-pic {
        transform: translateY(-4px);
    }

    .section {
        padding: 6rem 0;
    }

    .alt-bg {
        background: linear-gradient(
            to bottom,
            transparent,
            rgba(168, 85, 247, 0.03),
            rgba(225, 29, 72, 0.02),
            transparent
        );
    }

    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
    }

    .project-card {
        padding: 2.5rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .project-card:hover {
        background: var(--surface-hover);
        transform: translateY(-6px);
        box-shadow: var(--shadow-fly);
        border-color: var(--accent);
    }

    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .project-header h3 {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--text-main);
    }

    .project-card:hover .badge {
        background: rgba(168, 85, 247, 0.15);
        border-color: var(--accent);
    }

    .project-desc {
        color: var(--text-muted);
        font-weight: 400;
        margin-bottom: 2.5rem;
        line-height: 1.6;
        flex-grow: 1;
    }

    .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--accent);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
    }

    .arrow {
        transition: transform 0.3s ease;
    }

    .project-card:hover .arrow {
        transform: translateX(4px);
        color: var(--accent-red);
    }

    .tech-layout {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 4rem;
        align-items: center;
    }

    .tech-info h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    .tech-info p {
        color: var(--text-muted);
        line-height: 1.6;
    }

    .tech-cli {
        font-family: var(--font-mono);
        overflow: hidden;
        background: rgba(5, 2, 10, 0.7);
    }

    .tech-cli:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-fly);
        border-color: var(--border);
    }

    .cli-header {
        background: rgba(0, 0, 0, 0.4);
        padding: 1rem 1.5rem;
        display: flex;
        gap: 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .dot.stack {
        height: 12px;
        width: 12px;
        border-radius: 50%;
    }
    .dot.stack.red { background: #ff5f56; }
    .dot.stack.yellow { background: #ffbd2e; }
    .dot.stack.green { background: #27c93f; }

    .cli-body {
        padding: 2rem;
        font-size: 0.9rem;
    }

    .cli-line {
        color: var(--text-muted);
        margin-bottom: 0.5rem;
        display: flex;
        gap: 0.75rem;
        align-items: center;
        flex-wrap: wrap;
    }

    .cli-prompt {
        color: var(--accent);
        font-weight: 500;
    }

    .cli-command {
        color: var(--accent-red);
    }

    .cli-output {
        color: var(--text-main);
        margin-bottom: 1.75rem;
        padding-left: 0;
        font-weight: 500;
    }

    .cli-cursor {
        display: inline-block;
        width: 8px;
        height: 1.2em;
        background-color: var(--accent);
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }

    @media (max-width: 900px) {
        .hero-section {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
        }

        .subtitle {
            flex-direction: column;
            gap: 0.15rem;
            align-items: center;
        }

        .dot-mobile { display: none; }
        .hero-links { justify-content: center; }

        .hero-visual {
            max-width: 500px;
            margin: 0 auto;
        }

        .tech-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
        }
    }

    .delay-5 { animation-delay: 0.9s; }

    .pr-card {
        text-decoration: none;
        color: inherit;
    }

    .pr-title {
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--text-main);
        margin-bottom: 0.5rem;
    }

    .pr-badge {
        color: #34d399;
        border-color: rgba(52, 211, 153, 0.2);
    }

    .pr-card:hover .pr-badge {
        border-color: #34d399;
        background: rgba(52, 211, 153, 0.1);
    }
</style>
