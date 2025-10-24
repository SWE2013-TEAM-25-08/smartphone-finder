<script lang="ts">
  export let item: any = {};
</script>

<div class="card">
  <div class="p-16">
    <div class="ratio ratio-4-3" style="border-radius:12px; background:#f3f4f6; display:flex; align-items:center; justify-content:center; overflow:hidden;">
      {#if item.image}
        <img src={item.image} alt={item.name} class="img-contain" />
      {:else}
        <div class="skeleton" style="width:100%; height:100%;"></div>
      {/if}
    </div>

    <div class="mt-12" style="display:flex; gap:8px; flex-wrap:wrap;">
      {#each item.tags ?? ['# 카메라', '# 디자인'] as t}
        <span class="badge">{t}</span>
      {/each}
    </div>

    <h3 class="mt-12" style="margin:0; font-weight:700;">{item.name ?? '아이폰 16'}</h3>

    <ul class="list text-sm text-muted">
      {#each item.features ?? ['A18 칩셋','8GB RAM'] as f}
        <li>{f}</li>
      {/each}
    </ul>
  </div>
</div>
