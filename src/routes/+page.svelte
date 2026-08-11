<script lang="ts">
    import { base } from "$app/paths";
    import profile from "$lib/assets/profile.jpeg";

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
            Tsubasa
            <span class="kanji-wrapper">
                <span class="kanji">翼</span>
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Email Me
                </a>

                <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    class="link icon-link button-secondary"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                        />
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
                                <span class="cli-prompt">haiqal@tsubasa:~$</span
                                >
                                <span class="cli-command">cat</span>
                                {category.toLowerCase()}.txt
                            </div>
                            <div class="cli-output">
                                {techs.join(" · ")}
                            </div>
                        {/each}
                        <div class="cli-line">
                            <span class="cli-prompt">haiqal@tsubasa:~$</span>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
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
                                View Pull Request <span class="arrow"
                                    >&rarr;</span
                                >
                            </span>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </section>
</main>

<style>
    /* ... (Keep ALL your existing styles unchanged, and add these at the very bottom) ... */

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
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
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
        color: var(--accent);
    }

    .logo {
        font-weight: 600;
        font-size: 1.25rem;
        letter-spacing: -0.02em;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .kanji-wrapper {
        display: inline-flex;
        perspective: 100px;
    }

    .kanji {
        color: var(--accent);
        font-size: 1.5rem;
        font-weight: 300;
        display: inline-block;
        transform-origin: bottom left;
        animation: breeze 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    @keyframes breeze {
        0%,
        100% {
            transform: rotate(0deg) translateY(0) skewX(0deg);
        }
        25% {
            transform: rotate(3deg) translateY(-2px) skewX(-2deg);
        }
        75% {
            transform: rotate(-1deg) translateY(-1px) skewX(1deg);
        }
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
        color: var(--accent);
        opacity: 0.5;
    }

    .bio {
        font-size: 1.1rem;
        color: var(--text-main);
        margin-bottom: 2.5rem;
        font-weight: 400;
        line-height: 1.7;
        opacity: 0.9;
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
        background: var(--accent);
        color: white;
        box-shadow: 0 4px 15px rgba(2, 132, 199, 0.3);
    }

    .button-primary:hover {
        background: #0369a1;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(2, 132, 199, 0.4);
    }

    .button-secondary {
        background: var(--surface);
        color: var(--text-main);
        border: 1px solid var(--border);
    }

    .button-secondary:hover {
        background: var(--surface-hover);
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
        background: linear-gradient(140deg, transparent, var(--border));
        border-radius: 16px;
        z-index: 1;
        transition: transform 0.4s ease;
    }

    .hero-visual:hover .visual-accent {
        transform: translate(-5px, 5px);
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
            rgba(14, 165, 233, 0.03),
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
        background: #ffffff;
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
    }

    .tech-cli:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-fly);
    }

    .cli-header {
        background: rgba(0, 0, 0, 0.05);
        padding: 1rem 1.5rem;
        display: flex;
        gap: 0.5rem;
        border-bottom: 1px solid var(--border);
    }

    .dot.stack {
        height: 12px;
        width: 12px;
        border-radius: 50%;
    }
    .dot.stack.red {
        background: #ff5f56;
    }
    .dot.stack.yellow {
        background: #ffbd2e;
    }
    .dot.stack.green {
        background: #27c93f;
    }

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
        color: var(--text-main);
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
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
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

        .dot-mobile {
            display: none;
        }

        .hero-links {
            justify-content: center;
        }

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

    .delay-5 {
        animation-delay: 0.9s;
    }

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
        color: #10b981;
        border-color: rgba(16, 185, 129, 0.2);
    }

    .pr-card:hover .pr-badge {
        border-color: #10b981;
    }
</style>
