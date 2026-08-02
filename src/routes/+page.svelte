<script lang="ts">
    import { base } from "$app/paths";

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
</script>

<div class="ambient-glow"></div>

<main class="portfolio-container">
    <nav class="brand-nav">
        <span class="logo">
            Tsubasa
            <span class="kanji-wrapper">
                <span class="kanji">翼</span>
            </span>
        </span>
    </nav>

    <header class="hero glass-panel">
        <h1>{name}</h1>
        <p class="subtitle">{role} <span class="dot">·</span> {location}</p>
        <p class="bio">
            3rd-year CS student building fast backend systems and practical developer tools.
            I focus on writing clean code, fixing real-world performance bottlenecks, and prioritizing practice over theory.
        </p>
        <div class="hero-links">
            <a href="mailto:{email}" class="link icon-link">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
            </a>

            <a
                href={github}
                target="_blank"
                rel="noreferrer"
                class="link icon-link"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
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
    </header>

    <section class="section">
        <h2 class="section-title">Featured Projects</h2>

        <div class="project-card glass-panel">
            <div class="project-header">
                <h3>fuzzies</h3>
                <span class="badge">Rust</span>
            </div>
            <p class="project-desc">
                An easy-to-use Rust library for instant, typo-tolerant search.
                Takes the headache out of complex fuzzy lookups with a clean API that runs on both the backend and in the browser via WebAssembly.
            </p>
            <div class="project-footer">
                <a href="{base}/project/fuzzies" class="cta-button">
                    Launch Fuzzies <span class="arrow">&rarr;</span>
                </a>
            </div>
        </div>
    </section>

    <section class="section">
        <h2 class="section-title">Tech Stack</h2>
        <div class="tech-cli glass-panel">
            <div class="cli-header">
                <span class="dot stack red"></span>
                <span class="dot stack yellow"></span>
                <span class="dot stack green"></span>
            </div>
            <div class="cli-body">
                {#each techStack as { category, techs }}
                    <div class="cli-line">
                        <span class="cli-prompt">~</span>
                        <span class="cli-command">cat</span>
                        {category.toLowerCase()}.txt
                    </div>
                    <div class="cli-output">
                        {techs.join(", ")}
                    </div>
                {/each}
                <div class="cli-line">
                    <span class="cli-prompt">~</span>
                    <span class="cli-cursor"></span>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    .ambient-glow {
        position: fixed;
        top: -10vh;
        right: -5vw;
        width: 50vw;
        height: 50vw;
        background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
        opacity: 0.15;
        filter: blur(80px);
        z-index: -1;
        pointer-events: none;
        border-radius: 50%;
        animation: pulse-glow 10s ease-in-out infinite alternate;
    }

    @keyframes pulse-glow {
        0% {
            transform: scale(1) translate(0, 0);
        }
        100% {
            transform: scale(1.1) translate(-20px, 20px);
        }
    }

    .portfolio-container {
        position: relative;
        z-index: 1;
    }

    .brand-nav {
        margin-bottom: 3rem;
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

    .glass-panel {
        background: var(--surface);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid var(--border);
        border-radius: 16px;
        box-shadow: var(--shadow-rest);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .glass-panel:hover {
        background: var(--surface-hover);
        transform: translateY(-4px);
        box-shadow: var(--shadow-fly);
    }

    .hero {
        padding: 3rem;
        margin-bottom: 4rem;
    }

    .hero h1 {
        font-size: 2.5rem;
        font-weight: 500;
        letter-spacing: -0.03em;
        margin-bottom: 0.5rem;
    }

    .subtitle {
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .dot {
        color: var(--accent);
        opacity: 0.8;
    }

    .bio {
        font-size: 1.1rem;
        color: var(--text-main);
        margin-bottom: 2rem;
        max-width: 600px;
        font-weight: 300;
        line-height: 1.6;
    }

    .hero-links {
        display: flex;
        gap: 1.5rem;
    }

    .link {
        color: var(--accent);
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
        position: relative;
    }

    .icon-link {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
    }

    .icon-link svg {
        color: currentColor;
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .icon-link:hover svg {
        transform: translateY(-3px) scale(1.05);
    }

    .link::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: -2px;
        left: 0;
        background-color: var(--accent);
        transform-origin: bottom right;
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .link:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    .section {
        margin-bottom: 4rem;
    }

    .section-title {
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: var(--text-muted);
        margin-bottom: 1.5rem;
        font-weight: 500;
        padding-left: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .section-title::before {
        content: "";
        display: block;
        width: 12px;
        height: 2px;
        background: var(--accent);
        opacity: 0.5;
    }

    .project-card {
        padding: 2.5rem;
        cursor: pointer;
    }

    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .project-header h3 {
        font-size: 1.4rem;
        font-weight: 500;
    }

    .badge {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        background: rgba(2, 132, 199, 0.1);
        color: var(--accent);
        padding: 0.25rem 0.75rem;
        border-radius: 99px;
        border: 1px solid rgba(2, 132, 199, 0.2);
    }

    .project-desc {
        color: var(--text-muted);
        font-weight: 300;
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--accent);
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
    }

    .arrow {
        transition: transform 0.3s ease;
    }

    .project-card:hover .arrow {
        transform: translateX(4px);
    }

    .tech-cli {
        font-family: var(--font-mono);
        overflow: hidden;
    }

    .cli-header {
        background: rgba(0, 0, 0, 0.2);
        padding: 0.75rem 1rem;
        display: flex;
        gap: 0.5rem;
        border-bottom: 1px solid var(--border);
    }

    .dot.stack {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        opacity: 0.5;
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
        padding: 1.5rem;
        font-size: 0.9rem;
    }

    .cli-line {
        color: var(--text-muted);
        margin-bottom: 0.5rem;
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

    .cli-prompt {
        color: var(--accent);
        font-weight: bold;
    }

    .cli-command {
        color: var(--text-main);
    }

    .cli-output {
        color: var(--text-main);
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;
        opacity: 0.9;
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
</style>
