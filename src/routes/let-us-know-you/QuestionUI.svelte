<script lang="ts">
    import type {Snippet} from "svelte";

    let { title, description, content }: { title: string, description: string, content: Snippet } = $props()
</script>


<style>
    .wrapper {
        max-width: 30rem;
        min-width: 18rem;
        margin-inline: auto;
        padding-top: 6rem;
    }

    .title-layout {
        display: flex;
        margin-bottom: 3rem;
        flex-direction: column;
        gap: 0.5rem;
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        white-space: pre-line;
        color: #212529;
    }

    .description {
        color: #909090;
    }
</style>


<div class="wrapper">
    <div class="title-layout">
        <span class=title>{title}</span>
        <span class="description">{description}</span>
    </div>

    {@render content?.()}
</div>