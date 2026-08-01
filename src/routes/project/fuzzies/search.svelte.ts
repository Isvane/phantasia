import initWasm, { WasmDictionary } from '../../../../pkg/fuzzies_wasm.js';
import type { SearchResult } from '../../../types/search.js';

export class FuzzySearchEngine {
  dict = $state<WasmDictionary | null>(null);
  query = $state('');
  isReady = $state(false);

  async init() {
    try {
      await initWasm();
      this.dict = new WasmDictionary();
      this.isReady = true;
    } catch (e) {
      console.error("Failed to load Wasm Dictionary:", e);
    }
  }

  get result(): SearchResult[] {
    if (!this.dict || !this.query.trim()) {
      return [];
    }
    try {
      return this.dict.search(this.query.trim(), 5, 2) as SearchResult[];
    } catch (e) {
      console.error("Search error:", e);
      return [];
    }
  }
}
