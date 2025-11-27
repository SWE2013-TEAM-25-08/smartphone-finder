<script lang="ts">
  import type {News} from "$lib/types/News";

  export let item: News;
</script>

<style>
  a {
    text-decoration: none;
  }
</style>

<div class="card">
  <a href="{item.link}">
    <div class="p-16">
      <div class="ratio ratio-16-9" style="border-radius:12px; overflow:hidden; background:#f3f4f6;">
        {#if item.image}
          <img src={item.image} alt={item.title} class="img-cover" />
        {:else}
          <div class="skeleton" style="width:100%; height:100%;"></div>
        {/if}
      </div>

      <br/>

      <h3 class="mt-12" style="margin:0; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{item.title}</h3>
      <p class="text-sm text-muted mt-8" style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{item.meta}</p>
    </div>
  </a>
</div>
