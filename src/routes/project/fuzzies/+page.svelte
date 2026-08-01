<script lang="ts">
  import { onMount } from 'svelte';
  import init, { WasmDictionary } from '../../../../pkg/fuzzies_wasm.js';

  interface SearchResult {
    is_exact: boolean;
    key: string;
    distance: number;
  }

  let dict = $state<WasmDictionary | null>(null);
  let query = $state('');
  let isReady = $state(false);

  onMount(async () => {
    try {
      await init();
      dict = new WasmDictionary();
      isReady = true;
    } catch (e) {
      console.error("Failed to load Wasm Dictionary:", e);
    }
  });

  let results = $derived.by(() => {
    if (dict && query.trim() !== '') {
      try {
        return dict.search(query.trim(), 5, 2) as SearchResult[];
      } catch (e) {
        console.error("Search error:", e);
        return [];
      }
    }
    return [] as SearchResult[];
  });
</script>

<main>
  <h1>Fuzzy Search (Powered by Fuzzies)</h1>

  {#if !isReady}
    <p>Loading WebAssembly module...</p>
  {:else}
    <input
      type="text"
      bind:value={query}
      placeholder="Start typing..."
    />

    {#if query && results.length === 0}
      <p>No matches found.</p>
    {/if}

    <ul>
      {#each results as result}
        <li>
          <strong>{result.key}</strong>
          <span class="badge">
            Distance: {result.distance}
            {#if result.is_exact}(Exact Match){/if}
          </span>
        </li>
      {/each}
    </ul>
  {/if}
</main>

<style>
  main {
    max-width: 600px;
    margin: 2rem auto;
    font-family: sans-serif;
  }
  input {
    width: 100%;
    padding: 10px;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
  }
  .badge {
    color: #666;
    font-size: 0.9em;
  }
</style>
