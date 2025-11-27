<script lang="ts">
    let { onclick, state, image, title, description }: { onclick: (event: MouseEvent) => void, state: boolean, image: string, title: string, description: string } = $props()
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
        object-fit: contain;
    }

    .title {
        margin-top: 1rem;
        margin-inline: 0.5rem;
        font-size: 1.1rem;
        color: #212529;
    }

    .message {
        margin-inline: 0.5rem;
        margin-bottom: 1rem;
        align-content: center;
        font-size: inherit;
        white-space: pre-line;
        color: #909090;
    }
</style>

<button class="wrapper" class:select={state} onclick={onclick}>
    <img class="image" src="{image}" alt="">
    <span class="title">{title}</span>
    <span class="message">{description}</span>
</button>