<script lang="ts">
  import { onMount } from 'svelte';
  import { FuzzySearchEngine } from './search.svelte';

  const searcher = new FuzzySearchEngine();

  onMount(() => {
    searcher.init();
  });
</script>

<main>
  <h1>Fuzzy Search (Powered by Fuzzies)</h1>
  <br>
  {#if !searcher.isReady}
    <p>Loading WebAssembly module...</p>
  {:else}
    <input
      type="text"
      bind:value={searcher.query}
      placeholder="Start typing..."
    />

    {#if searcher.query.trim() && searcher.result.length === 0}
      <p>No matches found.</p>
    {/if}

    <ul>
      {#each searcher.result as item (item.key)}
        <li>
          <strong>{item.key}</strong>
          <span class="badge">
            Distance: {item.distance}
            {#if item.is_exact}(Exact Match){/if}
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
