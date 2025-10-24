<script lang="ts">
  export let title = '';
  export let href: string | undefined = undefined;
</script>

<div class="section-header">
  <h2>{title}</h2>
  {#if href}<a href={href}>더보기 ›</a>{/if}
</div>
