<script lang="ts">
    let { onclick, state, image }: { onclick: (event: MouseEvent) => void, state: boolean, image: string } = $props()
</script>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        text-align: start;
        gap: 0.5rem;
        height: 18rem;
        padding: 0.375rem;
        border: 0.0625rem rgba(233, 236, 239, 1) solid;
        border-radius: 1rem;
        box-shadow: 0 0.25rem 0.5rem 0 rgba(217, 217, 217, 0.3);
        background: rgba(255, 255, 255, 1);
        cursor: pointer;
        transition: all 100ms ease;
    }

    .select {
        border: 0.0625rem rgba(128, 62, 248, 1) solid;
        box-shadow: 0 0.25rem 0.5rem 0 rgba(128, 62, 248, 0.3);
    }

    .image {
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-radius: 0.75rem;
        object-fit: cover;
    }
</style>

<button class="wrapper" class:select={state} onclick={onclick}>
    <img class="image" src="{image}" alt="">
</button>