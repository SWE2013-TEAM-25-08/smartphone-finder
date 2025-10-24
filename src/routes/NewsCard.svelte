<script lang="ts">
  export let item: any = {};
</script>

<div class="card">
  <div class="p-16">
    <div class="ratio ratio-16-9" style="border-radius:12px; overflow:hidden; background:#f3f4f6;">
      {#if item.thumb}
        <img src={item.thumb} alt={item.title} class="img-cover" />
      {:else}
        <div class="skeleton" style="width:100%; height:100%;"></div>
      {/if}
    </div>

    <h3 class="mt-12" style="margin:0; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{item.title ?? '아이폰 17 루머 최종 정리'}</h3>
    <p class="text-sm text-muted mt-8" style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{item.meta ?? 'ITSub잇섭 · 2025. 8. 22.'}</p>
  </div>
</div>
