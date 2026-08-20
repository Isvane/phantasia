<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from "$app/paths";
    import { FuzzySearchEngine } from './search.svelte';

    const searcher = new FuzzySearchEngine();
    const GITHUB_REPO_URL = "https://github.com/Isvane/fuzzies";

    onMount(() => {
        searcher.init();
    });
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&family=Fira+Code&display=swap" rel="stylesheet">
</svelte:head>

<nav class="top-nav container">
    <a href="{base}/" class="btn-back">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Home
    </a>
</nav>

<main class="container">
    <header class="page-header">
        <span class="mono-badge">● PROJECT // RUST // WASM</span>
        <h1 class="page-title">fuzzies</h1>
        <p class="page-desc">
            Fast, typo-tolerant search library built with Rust and compiled to WebAssembly.
            Runs zero-latency queries directly inside the browser.
        </p>
    </header>

    <div class="bento-grid">
        <article class="bento-card col-span-2 demo-card">
            <h3 class="card-title accent-text">Interactive Demo</h3>

            {#if !searcher.isReady}
                <div class="loading-state">
                    <span class="spinner"></span>
                    <span>Initializing WebAssembly engine...</span>
                </div>
            {:else}
                <div class="input-wrapper">
                    <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <input
                        type="text"
                        bind:value={searcher.query}
                        placeholder="Type to test fuzzy match (e.g. 'baxana', 'algoritm')..."
                    />
                </div>

                <div class="results-container">
                    {#if searcher.query.trim() && searcher.result.length === 0}
                        <div class="empty-state">
                            No matches found for "{searcher.query}"
                        </div>
                    {/if}

                    <ul class="result-list">
                        {#each searcher.result as item (item.key)}
                            <li class="result-item">
                                <span class="item-key">{item.key}</span>
                                <span class="badge {item.is_exact ? 'exact' : 'fuzzy'}">
                                    {#if item.is_exact}
                                        <span class="dot green"></span> Exact Match
                                    {:else}
                                        Dist: {item.distance}
                                    {/if}
                                </span>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </article>

        <article class="bento-card col-span-1 metrics-card">
            <h3 class="card-title">Benchmarks</h3>
            <div class="metrics-stack">
                <div class="metric-item">
                    <span class="metric-value">106,000+</span>
                    <span class="metric-label">Indexed English Words</span>
                </div>
                <div class="metric-divider"></div>
                <div class="metric-item">
                    <span class="metric-value">0 ms</span>
                    <span class="metric-label">Server Latency (In-Memory)</span>
                </div>
                <div class="metric-divider"></div>
                <div class="metric-item">
                    <span class="metric-value">~695 KB</span>
                    <span class="metric-label">Total Assets (395KB WASM + 300KB FST)</span>
                </div>
            </div>
        </article>

        <article class="bento-card col-span-3 system-card">
            <div class="system-header">
                <h3 class="card-title">How It Works</h3>
                <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer" class="btn btn-secondary btn-sm">
                    View Source Code <span class="arrow">&rarr;</span>
                </a>
            </div>

            <div class="features-grid">
                <div class="feature-box">
                    <span class="feature-code">01 // EXECUTION</span>
                    <h4>Client-Side Processing</h4>
                    <p>
                        Compiled directly from Rust via <code>wasm-bindgen</code>. Once loaded, queries execute locally without sending network requests to a server.
                    </p>
                </div>

                <div class="feature-box">
                    <span class="feature-code">02 // DATA STRUCTURE</span>
                    <h4>Compressed FST Index</h4>
                    <p>
                        Embeds ~106,000 dictionary words into a compact 300 KB Finite State Transducer,
                        allowing fast Levenshtein traversal with minimal client memory overhead.
                    </p>
                </div>

                <div class="feature-box">
                    <span class="feature-code">03 // ARCHITECTURE</span>
                    <h4>Universal Target</h4>
                    <p>
                        Offers a unified API that runs natively in Rust backends (Axum/Actix) as well as frontends via WebAssembly bindings.
                    </p>
                </div>
            </div>
        </article>
    </div>
</main>

<style>
    :root {
        --bg-main: #0a0a0a;
        --bg-card: #141414;
        --bg-card-hover: #1f1f1f;
        --text-primary: #f5f5f5;
        --text-secondary: #a3a3a3;
        --text-tertiary: #525252;

        --accent: #ff334b;
        --accent-dim: rgba(255, 51, 75, 0.12);

        --border: #262626;
        --border-hover: #404040;
        --font-sans: "Inter", system-ui, sans-serif;
        --font-display: "Space Grotesk", sans-serif;
        --font-mono: "Fira Code", monospace;
        --radius: 1.5rem;
        --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
    }

    .top-nav {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }

    .btn-back {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-secondary);
        text-decoration: none;
        font-family: var(--font-sans);
        font-size: 0.95rem;
        font-weight: 500;
        transition: color var(--transition);
    }

    .btn-back:hover {
        color: var(--accent);
    }

    .page-header {
        margin: 2rem 0 3rem 0;
    }

    .mono-badge {
        display: inline-block;
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--text-tertiary);
        margin-bottom: 1rem;
        border: 1px solid var(--border);
        padding: 0.2rem 0.8rem;
        border-radius: 100px;
    }

    .page-title {
        font-family: var(--font-display);
        font-size: clamp(2.5rem, 5vw, 3.5rem);
        line-height: 1.1;
        margin-bottom: 0.75rem;
        letter-spacing: -0.03em;
    }

    .page-desc {
        color: var(--text-secondary);
        font-size: 1.15rem;
        max-width: 650px;
    }

    .bento-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        margin-bottom: 4rem;
    }

    .col-span-1 { grid-column: span 1; }
    .col-span-2 { grid-column: span 2; }
    .col-span-3 { grid-column: span 3; }

    .bento-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        transition: border-color var(--transition);
        position: relative;
    }

    .bento-card:hover {
        border-color: var(--border-hover);
    }

    .card-title {
        font-family: var(--font-display);
        font-size: 1.1rem;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .accent-text {
        color: var(--accent);
    }

    .input-wrapper {
        position: relative;
        margin-bottom: 1.5rem;
    }

    .search-icon {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-tertiary);
    }

    input {
        width: 100%;
        background: var(--bg-main);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 0.9rem 1rem 0.9rem 2.8rem;
        color: var(--text-primary);
        font-family: var(--font-sans);
        font-size: 1rem;
        outline: none;
        transition: border-color var(--transition);
    }

    input:focus {
        border-color: var(--accent);
    }

    input::placeholder {
        color: var(--text-tertiary);
    }

    .results-container {
        background: var(--bg-main);
        border: 1px solid var(--border);
        border-radius: 8px;
        min-height: 220px;
        max-height: 320px;
        overflow-y: auto;
    }

    .result-list {
        list-style: none;
    }

    .result-item {
        padding: 0.85rem 1.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--border);
        transition: background var(--transition);
    }

    .result-item:last-child {
        border-bottom: none;
    }

    .result-item:hover {
        background: var(--bg-card-hover);
    }

    .item-key {
        font-family: var(--font-mono);
        color: var(--text-primary);
        font-size: 0.95rem;
    }

    .badge {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        padding: 0.2rem 0.6rem;
        border-radius: 4px;
        border: 1px solid var(--border);
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
    }

    .badge.exact {
        color: #27c93f;
        border-color: rgba(39, 201, 63, 0.3);
        background: rgba(39, 201, 63, 0.05);
    }

    .badge.fuzzy {
        color: var(--text-secondary);
    }

    .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }

    .dot.green { background: #27c93f; }

    .empty-state, .loading-state {
        height: 100%;
        min-height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-tertiary);
        font-family: var(--font-mono);
        font-size: 0.9rem;
        gap: 0.75rem;
    }

    .spinner {
        width: 16px;
        height: 16px;
        border: 2px solid var(--border);
        border-top-color: var(--accent);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    .metrics-stack {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
    }

    .metric-item {
        display: flex;
        flex-direction: column;
    }

    .metric-value {
        font-family: var(--font-mono);
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--text-primary);
    }

    .metric-label {
        font-size: 0.85rem;
        color: var(--text-tertiary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-top: 0.2rem;
    }

    .metric-divider {
        height: 1px;
        background: var(--border);
        margin: 1rem 0;
    }

    .system-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 2rem;
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
    }

    .feature-box {
        background: var(--bg-main);
        border: 1px solid var(--border);
        padding: 1.5rem;
        border-radius: 12px;
    }

    .feature-code {
        display: block;
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--accent);
        margin-bottom: 0.75rem;
    }

    .feature-box h4 {
        font-family: var(--font-display);
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }

    .feature-box p {
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .feature-box code {
        font-family: var(--font-mono);
        color: var(--text-primary);
        background: var(--bg-card);
        padding: 0.1rem 0.3rem;
        border-radius: 4px;
        font-size: 0.85rem;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.6rem 1.2rem;
        border-radius: 8px;
        font-weight: 500;
        text-decoration: none;
        transition: all var(--transition);
        font-size: 0.9rem;
    }

    .btn-secondary {
        background: transparent;
        color: var(--text-primary);
        border: 1px solid var(--border);
    }

    .btn-secondary:hover {
        border-color: var(--accent);
        color: var(--accent);
    }

    .btn-secondary:hover .arrow {
        transform: translateX(3px);
    }

    .arrow {
        transition: transform var(--transition);
    }

    @media (max-width: 900px) {
        .bento-grid {
            grid-template-columns: 1fr;
        }

        .col-span-1, .col-span-2, .col-span-3 {
            grid-column: span 1;
        }

        .features-grid {
            grid-template-columns: 1fr;
        }

        .system-header {
            flex-direction: column;
            gap: 1rem;
        }
    }
</style>
