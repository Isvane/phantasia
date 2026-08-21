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
        { category: "Infrastructure", techs: ["Docker", "Linux", "Git"] },
        { category: "Currently Exploring", techs: ["WebAssembly", "Svelte"] },
    ];

    const contributions = [
        {
            repo: "tower-rs/tower-http",
            title: "Fix trailing slash behavior in file serving",
            desc: "Updated ServeDir to return 404 for file paths with trailing slashes, matching standard web server expectations.",
            link: "https://github.com/tower-rs/tower-http/pull/678",
            status: "Merged",
        },
        {
            repo: "lumen-oss/lux",
            title: "Support directory targets for lx-lint",
            desc: "Extracted shared path classification tools and implemented root up-tree workspace lookups for targeted linting.",
            link: "https://github.com/lumen-oss/lux/pull/1656",
            status: "Merged",
        },
    ];
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&family=Fira+Code&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<nav class="floating-nav-side">
    <a href="#about" title="About">
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle
                cx="12"
                cy="7"
                r="4"
            ></circle></svg
        >
    </a>
    <a href="#projects" title="Work">
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><polyline points="16 18 22 12 16 6"></polyline><polyline
                points="8 6 2 12 8 18"
            ></polyline></svg
        >
    </a>
    <a href="#stack" title="Stack">
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline
                points="2 17 12 22 22 17"
            ></polyline><polyline points="2 12 12 17 22 12"></polyline></svg
        >
    </a>
    <a href="#oss" title="OSS">
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path
                d="M12 2a10 10 0 0 0-7.38 16.75l2.83-2.83A6 6 0 1 1 12 18v4a10 10 0 0 0 0-20z"
            />
        </svg>
    </a>
    <div class="nav-divider"></div>
    <a href="mailto:{email}" title="Contact" class="contact-icon">
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path><polyline points="22,6 12,13 2,6"></polyline></svg
        >
    </a>
</nav>

<main class="container">
    <div class="bento-grid">
        <article class="bento-card col-span-2 hero-card" id="about">
            <div class="hero-content">
                <span class="mono-badge">● SYS_ENG // {location}</span>
                <h1 class="hero-title">{name}</h1>
                <h2 class="hero-role">{role}</h2>
                <p class="hero-bio">
                    3rd-year CS student building developer tools and backend
                    systems. I prioritize hands-on building, shipping practical
                    software, and contributing to open source over grinding pure
                    theory.
                </p>
                <div class="action-group">
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        class="btn btn-primary"
                    >
                        GitHub Profile <span class="arrow">&rarr;</span>
                    </a>
                    <a href="mailto:{email}" class="btn btn-secondary"
                        >Email Me</a
                    >
                </div>
            </div>
        </article>

        <article class="bento-card visual-card">
            <img src={profile} alt="{name} profile" class="profile-img" />
            <div class="overlay-glitch"></div>
        </article>

        <article class="bento-card col-span-1 stack-card" id="stack">
            <h3 class="card-title">Tech Stack</h3>
            <div class="stack-container">
                {#each techStack as { category, techs }}
                    <div class="stack-group">
                        <span class="stack-category">{category}</span>
                        <div class="pill-group">
                            {#each techs as tech}
                                <span>{tech}</span>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </article>

        <article class="bento-card col-span-2 project-card" id="projects">
            <div class="project-layout">
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="card-title accent-text">Featured Project</h3>
                    </div>
                    <h4 class="project-name">fuzzies</h4>
                    <p class="project-desc">
                        A fast and easy-to-use Rust library for instant,
                        typo-tolerant search. Takes the headache out of complex
                        fuzzy lookups with a clean API that runs on both the
                        backend and in the browser via WebAssembly.
                    </p>
                    <a
                        href="{base}/project/fuzzies"
                        class="btn btn-outline mt-auto"
                    >
                        Launch Fuzzies &nearr;
                    </a>
                </div>

                <div class="project-visual">
                    <div class="mock-term">
                        <div class="term-header">
                            <span class="dot close"></span>
                            <span class="dot min"></span>
                            <span class="dot max"></span>
                        </div>
                        <div class="term-body">
                            <pre><code
                                    ><span class="cmd">$ cargo bench</span>
                                Running benches/dict_bench.rs
                                Search Queries/Fuzzy + Transposition (distance=1)
                                                        time:   [ <span
                                        class="accent-text">8.39 µs</span
                                    > <span class="accent-text">8.41 µs</span
                                    > 8.43 µs]
                            </code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <article class="bento-card col-span-2 os-card" id="oss">
            <div class="os-header">
                <h3 class="card-title" style="margin-bottom: 0;">Open Source Contributions</h3>
                <!-- <a href={github} target="_blank" rel="noreferrer" class="os-view-all">View all &nearr;</a> -->
            </div>

            <div class="pr-grid">
                {#each contributions as pr}
                    <a href={pr.link} target="_blank" rel="noreferrer" class="pr-item">
                        <div class="pr-meta">
                            <span class="repo-name">{pr.repo}</span>
                            <span class="pr-status merged">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 6L7 17l-5-5"></path>
                                </svg>
                                {pr.status}
                            </span>
                        </div>
                        <h4 class="pr-title">{pr.title}</h4>
                        <p class="pr-desc">{pr.desc}</p>
                        <div class="pr-action">View Pull Request &rarr;</div>
                    </a>
                {/each}
            </div>
        </article>

        <article class="bento-card col-span-1 audio-card" id="audio">
            <h3 class="card-title">On Repeat</h3>
            <div class="spotify-wrapper">
                <iframe
                    title="spotify-embed"
                    data-testid="embed-iframe"
                    style="border-radius:12px"
                    src="https://open.spotify.com/embed/track/22a006OJm48zH87SkPpSVx?utm_source=generator&theme=0&si=79c2257acb3d412c"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                >
                </iframe>
            </div>
        </article>
    </div>
</main>
