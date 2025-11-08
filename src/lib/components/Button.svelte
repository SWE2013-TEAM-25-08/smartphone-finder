<script lang="ts">
    let { onclick, state, icon, message }: { onclick: (event: MouseEvent) => void, state: boolean, icon?: string[], message: string } = $props()
</script>

<style>
    .wrapper {
        display: flex;
        padding: 0.375rem;
        border: 0.0625rem rgba(233, 236, 239, 1) solid;
        border-radius: 1rem;
        box-shadow: 0 0.25rem 0.5rem 0 rgba(217, 217, 217, 0.3);
        background: rgba(255, 255, 255, 1);
        cursor: pointer;
        user-select: none;
        transition: all 100ms ease;
    }

    .select {
        border: 0.0625rem rgba(128, 62, 248, 1) solid;
        box-shadow: 0 0.25rem 0.5rem 0 rgba(128, 62, 248, 0.3);
    }

    .icon-layout {
        position: relative;
        height: 3rem;
        width: 3rem;
    }

    .icon {
        display: block;
        height: inherit;
        box-sizing: border-box;
        border: 0.0625rem rgba(233, 236, 239, 1) solid;
        border-radius: 0.75rem;
    }

    .icon-double {
        display: block;
        position: absolute;
        height: 2.25rem;
        box-sizing: border-box;
        border: 0.0625rem rgba(233, 236, 239, 1) solid;
        border-radius: 0.75rem;
    }

    .right-bottom {
        bottom: 0;
        right: 0;
    }

    .message {
        height: 3rem;
        margin-inline-start: 0.5rem;
        align-content: center;
        font-size: inherit;
        color: #212529;
    }
</style>

<button class="wrapper" class:select={state} onclick={onclick}>
    {#if icon !== undefined && icon.length > 0}
        {#if icon.length === 1 }
            <div class="icon-layout">
                <img class="icon" src="{icon[0]}" alt="">
            </div>
        {:else}
            <div class="icon-layout">
                <img class="icon-double" src="{icon[0]}" alt="">
                <img class="icon-double right-bottom" src="{icon[1]}" alt="">
            </div>
        {/if}
    {/if}
    <span class="message">{message}</span>
</button>