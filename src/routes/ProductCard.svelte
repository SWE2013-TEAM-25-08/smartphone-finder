<script lang="ts">
  import type {Smartphone} from "$lib/types/Smartphone";

  export let item: Smartphone;
</script>

<style>
  a {
    text-decoration-line: none;
    color: #212529;
  }
</style>

<div class="card">
  <a href="/info/{item.link}">
    <div class="p-16">
      <div class="ratio ratio-4-3" style="border-radius:12px; background:#f3f4f6; display:flex; align-items:center; justify-content:center; overflow:hidden;">
        {#if item.image}
          <img src={item.image} alt={item.name} class="img-contain" />
        {:else}
          <div class="skeleton" style="width:100%; height:100%;"></div>
        {/if}
      </div>

      <div class="mt-12" style="display:flex; gap:8px; flex-wrap:wrap; margin-block: 1rem;">
        {#each item.specs as t}
          <span class="badge">{t}</span>
        {/each}
      </div>

      <h3 class="mt-12" style="margin:0; font-weight:700;">{item.name}</h3>

      <ul class="list text-sm text-muted">
        {#each item.specs as f}
          <li>{f}</li>
        {/each}
      </ul>
    </div>
  </a>
</div>
