<script lang="ts">
  export let items: any[] = [];
  export let cardWidth = '280px';
  let scroller: HTMLDivElement;

  const scrollBy = (dir: number) => {
    const amt = (scroller?.clientWidth ?? 0) * 0.9 * dir;
    scroller?.scrollBy({ left: amt, behavior: 'smooth' });
  };

  $: showSkeleton = items.length === 0;
</script>

<div class="carousel">
  <button class="carousel-nav carousel-prev" aria-label="prev" on:click={() => scrollBy(-1)}>❮</button>

  <div bind:this={scroller} class="carousel-track">
    {#if showSkeleton}
      {#each Array(6) as _}
        <div class="card carousel-item" style={`--card-w:${cardWidth}`}>
          <div class="p-16">
            <div class="skeleton ratio ratio-4-3" style="border-radius:12px;"></div>
            <div class="skeleton mt-12" style="height:16px; border-radius:6px;"></div>
            <div class="skeleton mt-8" style="height:16px; width:66%; border-radius:6px;"></div>
            <div class="mt-16">
              <div class="skeleton" style="height:12px; width:50%; border-radius:6px; margin-bottom:8px;"></div>
              <div class="skeleton" style="height:12px; width:33%; border-radius:6px;"></div>
            </div>
          </div>
        </div>
      {/each}
    {:else}
      {#each items as item}
        <div class="carousel-item" style={`--card-w:${cardWidth}`}>
          <slot {item} />
        </div>
      {/each}
    {/if}
  </div>

  <button class="carousel-nav carousel-next" aria-label="next" on:click={() => scrollBy(1)}>❯</button>
</div>
