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
        <div class="info-content">
            <h2>How this works</h2>
            <p>
                This demo runs entirely locally in your browser.
                It uses Rust compiled to WebAssembly, so there are zero server calls while you type.
            </p>
            <p>
                Under the hood, it pairs Finite State Transducers (FSTs) with Levenshtein Automata to handle typos,
                and fuzzy matching in memory without choking the main thread.
            </p>
            <p>
                The dictionary built for this demo contains around 106k words.
                The trade-off is a slightly larger initial download (~300 KB) in exchange for instant lookups afterward.
            </p>
            <p>
                A smaller word list would've saved bandwidth, but I wanted to see how well this crate handles a larger dataset in real time without dropping frames.
            </p>
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
        color: var(--text-main);
        font-weight: 500;
        transition: color 0.2s ease;
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
        background: rgba(255, 255, 255, 0.4);
    }

    .search-icon {
        position: absolute;
        left: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-muted);
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
        transition: background 0.3s ease;
    }

    input::placeholder { color: var(--text-muted); opacity: 0.6; }
    input:focus { background: rgba(255, 255, 255, 0.8); }

    .results-container {
        background: transparent;
        min-height: 100px;
        max-height: 500px;
        overflow-y: auto;
    }

    .result-list {
        list-style: none;
    }

    .result-item {
        padding: 1rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(14, 165, 233, 0.1);
        transition: background 0.2s ease, padding-left 0.2s ease;
    }

    .result-item:last-child { border-bottom: none; }

    .result-item:hover {
        background: var(--surface-hover);
        padding-left: 2rem;
    }

    .item-key {
        font-weight: 500;
        font-size: 1.1rem;
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
        gap: 1.25rem;
    }

    .info-content h2 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-main);
        margin-bottom: 0.5rem;
    }

    .info-content p {
        color: var(--text-muted);
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 0.5rem;
    }

    .info-content p:last-child {
        margin-bottom: 0;
    }

    .info-footer {
        padding-top: 1rem;
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
        transition: color 0.2s ease;
    }

    .github-link:hover {
        color: var(--accent);
    }

    .github-link .arrow {
        transition: transform 0.2s ease;
    }

    .github-link:hover .arrow {
        transform: translateX(3px);
    }
</style>
