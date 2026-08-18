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

<div class="ambient-glow"></div>

<nav class="brand-nav glass-nav fade-in">
    <div class="nav-content container">
        <a href="{base}/" class="logo back-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
        </a>
    </div>
</nav>

<main class="search-page-container container">
    <div class="fade-up">
        <div class="section-header">
            <h1 class="section-title">Fuzzies Wasm Demo</h1>
            <div class="line"></div>
        </div>
    </div>

    <div class="search-box glass-panel fade-up delay-1">
        {#if !searcher.isReady}
            <div class="loading-state">
                <span class="spinner"></span>
                Loading WebAssembly module...
            </div>
        {:else}
            <div class="input-wrapper">
                <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input
                    type="text"
                    bind:value={searcher.query}
                    placeholder="Start typing to search..."
                />
            </div>

            <div class="results-container">
                {#if searcher.query.trim() && searcher.result.length === 0}
                    <div class="empty-state">
                        <p>No matches found for "{searcher.query}"</p>
                    </div>
                {/if}

                <ul class="result-list">
                    {#each searcher.result as item (item.key)}
                        <li class="result-item">
                            <span class="item-key">{item.key}</span>
                            <span class="badge">
                                {#if item.is_exact}
                                    <span class="badge-dot"></span>
                                    Exact Match
                                {:else}
                                    Dist: {item.distance}
                                {/if}
                            </span>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>

    <section class="info-card glass-panel fade-up delay-2">
        <div class="info-header">
            <h2>How this works</h2>
            <span class="tech-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
                Rust + WASM
            </span>
        </div>

        <div class="metrics-grid">
            <div class="metric-item">
                <span class="metric-value">106k</span>
                <span class="metric-label">Words</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
                <span class="metric-value">0</span>
                <span class="metric-label">Server Calls</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
                <span class="metric-value">~300 KB</span>
                <span class="metric-label">Bundle Size</span>
            </div>
        </div>

        <div class="features-list">
            <div class="feature-item">
                <div class="feature-icon purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div class="feature-content">
                    <h3>Runs Entirely in Browser</h3>
                    <p>
                        This demo runs Rust compiled to WebAssembly locally. Once loaded, typing generates responses instantly without making any network requests.
                    </p>
                </div>
            </div>

            <div class="feature-item">
                <div class="feature-icon red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div class="feature-content">
                    <h3>Typo Tolerance</h3>
                    <p>
                        Under the hood, it pairs Finite State Transducers (FSTs) with Levenshtein Automata to catch typos quickly without causing UI lag.
                    </p>
                </div>
            </div>

            <div class="feature-item">
                <div class="feature-icon purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                </div>
                <div class="feature-content">
                    <h3>Trade-off</h3>
                    <p>
                        Indexing ~106k words adds a small upfront download (~300 KB), but in exchange, searches feel instantaneous afterward.
                    </p>
                </div>
            </div>
        </div>

        <div class="info-footer">
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" class="github-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                View source code on GitHub
                <span class="arrow">→</span>
            </a>
        </div>
    </section>
</main>

<style>
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
        align-items: center;
        justify-content: space-between;
    }
    .back-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: var(--text-muted);
        font-weight: 500;
        transition: all 0.3s ease;
    }
    .back-link:hover {
        color: var(--accent);
        text-shadow: 0 0 10px rgba(168, 85, 247, 0.4);
    }

    .search-page-container {
        padding-top: 120px;
        padding-bottom: 4rem;
        max-width: 700px;
    }

    .search-box {
        overflow: hidden;
        margin-bottom: 2rem;
    }

    .input-wrapper {
        position: relative;
        border-bottom: 1px solid var(--border);
        background: rgba(10, 5, 20, 0.4);
        transition: background 0.3s ease;
    }

    .search-icon {
        position: absolute;
        left: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--accent);
        opacity: 0.7;
    }

    input {
        width: 100%;
        padding: 1.5rem 1.5rem 1.5rem 3.5rem;
        font-size: 1.25rem;
        font-family: var(--font-sans);
        color: var(--text-main);
        background: transparent;
        border: none;
        outline: none;
        transition: all 0.3s ease;
    }

    input::placeholder { color: var(--text-muted); opacity: 0.5; }
    input:focus { background: rgba(35, 20, 50, 0.4); }

    .results-container {
        background: transparent;
        min-height: 100px;
        max-height: 500px;
        overflow-y: auto;
    }

    /* Custom Scrollbar for dark theme */
    .results-container::-webkit-scrollbar {
        width: 6px;
    }
    .results-container::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
    }
    .results-container::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 4px;
    }
    .results-container::-webkit-scrollbar-thumb:hover {
        background: var(--accent);
    }

    .result-list {
        list-style: none;
    }

    .result-item {
        padding: 1rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        border-left: 2px solid transparent;
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .result-item:last-child { border-bottom: none; }

    .result-item:hover {
        background: var(--surface-hover);
        border-left-color: var(--accent);
        padding-left: 2rem;
    }

    .item-key {
        font-weight: 500;
        font-size: 1.1rem;
        color: var(--text-main);
    }

    .empty-state, .loading-state {
        padding: 3rem 1.5rem;
        text-align: center;
        color: var(--text-muted);
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
    }

    .spinner {
        width: 18px;
        height: 18px;
        border: 2px solid var(--border);
        border-top-color: var(--accent);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    .info-card {
        padding: 1.75rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .info-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .info-header h2 {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--text-main);
        margin: 0;
    }

    .tech-pill {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.35rem 0.85rem;
        font-size: 0.75rem;
        font-family: var(--font-mono);
        font-weight: 600;
        color: var(--accent);
        background: rgba(168, 85, 247, 0.15);
        border: 1px solid var(--border);
        border-radius: 9999px;
        box-shadow: 0 0 15px rgba(168, 85, 247, 0.1);
    }

    .metrics-grid {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 1rem;
        background: rgba(10, 5, 20, 0.4);
        border: 1px solid var(--border);
        border-radius: 0.75rem;
    }

    .metric-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .metric-value {
        font-size: 1.25rem;
        font-family: var(--font-mono);
        font-weight: 700;
        color: var(--accent);
    }

    .metric-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-muted);
        margin-top: 0.25rem;
    }

    .metric-divider {
        width: 1px;
        height: 32px;
        background: var(--border);
    }

    .features-list {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .feature-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
    }

    .feature-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        margin-top: 0.1rem;
    }

    .feature-icon.purple {
        background: rgba(168, 85, 247, 0.15);
        color: var(--accent);
        border: 1px solid rgba(168, 85, 247, 0.3);
    }

    .feature-icon.red {
        background: rgba(225, 29, 72, 0.15);
        color: var(--accent-red);
        border: 1px solid rgba(225, 29, 72, 0.3);
    }

    .feature-content h3 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-main);
        margin: 0 0 0.35rem 0;
    }

    .feature-content p {
        font-size: 0.9rem;
        color: var(--text-muted);
        line-height: 1.6;
        margin: 0;
    }

    .info-footer {
        padding-top: 1.25rem;
        border-top: 1px solid var(--border);
    }

    .github-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-main);
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        transition: color 0.3s ease;
    }

    .github-link:hover {
        color: var(--accent);
    }

    .github-link .arrow {
        transition: transform 0.3s ease;
    }

    .github-link:hover .arrow {
        transform: translateX(4px);
        color: var(--accent-red);
    }
</style>
