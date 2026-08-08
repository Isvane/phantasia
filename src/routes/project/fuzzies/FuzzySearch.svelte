<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from "$app/paths";
    import { FuzzySearchEngine } from './search.svelte';

    const searcher = new FuzzySearchEngine();

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
            <h1 class="section-title">Fuzzy Search Demo</h1>
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
    .nav-content { display: flex; align-items: center; }
    .back-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: var(--text-main);
        font-weight: 500;
        transition: color 0.2s ease;
    }
    .back-link:hover { color: var(--accent); }

    .search-page-container {
        padding-top: 120px;
        padding-bottom: 4rem;
        max-width: 700px;
    }

    .search-box {
        overflow: hidden;
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
</style>
