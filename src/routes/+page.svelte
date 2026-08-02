<script lang="ts">
    import { base } from "$app/paths";

    const name = "Haiqal Aly Hazamy";
    const role = "Backend & Systems Engineer";
    const location = "Indonesia";
    const email = "alyhazamy@protonmail.com";
    const github = "https://github.com/Isvane";
</script>

<main class="portfolio-container">
    <nav class="brand-nav">
        <span class="logo">Tsubasa <span class="kanji">翼</span></span>
    </nav>

    <header class="hero glass-panel">
        <h1>{name}</h1>
        <p class="subtitle">{role} · {location}</p>
        <p class="bio">
            Building lightweight, high-performance systems. I focus on developer
            tooling, memory-safe backend architecture. I believe in practice
            over theory and building things that run fast.
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
                A high-performance Rust crate combining Finite State Transducers
                (FSTs) and Levenshtein automata for memory-mapped fuzzy search.
                Compiled to WebAssembly for frictionless browser execution.
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
        <div class="stack-grid">
            <div class="stack-category glass-panel">
                <h3>Languages</h3>
                <p>Rust, Go, TypeScript</p>
            </div>
            <div class="stack-category glass-panel">
                <h3>Databases</h3>
                <p>PostgreSQL</p>
            </div>
            <div class="stack-category glass-panel">
                <h3>Infra</h3>
                <p>Docker, Git, Linux</p>
            </div>
            <div class="stack-category glass-panel">
                <h3>Exploring</h3>
                <p>Assembly, Svelte</p>
            </div>
        </div>
    </section>
</main>

<style>
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

    .kanji {
        color: var(--accent);
        font-size: 1.5rem;
        font-weight: 300;
    }

    .glass-panel {
        background: var(--surface);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
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
    }

    .bio {
        font-size: 1.1rem;
        color: var(--text-main);
        margin-bottom: 2rem;
        max-width: 600px;
        font-weight: 300;
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
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--text-muted);
        margin-bottom: 1.5rem;
        font-weight: 500;
        padding-left: 0.5rem;
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
    }

    .project-desc {
        color: var(--text-muted);
        font-weight: 300;
        margin-bottom: 2rem;
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

    .stack-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 1.25rem;
    }

    .stack-category {
        padding: 1.5rem;
    }

    .stack-category h3 {
        font-size: 0.85rem;
        color: var(--text-muted);
        margin-bottom: 0.5rem;
        font-weight: 500;
    }

    .stack-category p {
        font-family: var(--font-mono);
        font-size: 0.95rem;
        color: var(--text-main);
    }
</style>
