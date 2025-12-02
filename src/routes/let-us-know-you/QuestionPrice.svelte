<script lang="ts">
    import RangeSlider from 'svelte-range-slider-pips';
    import QuestionUI from "./QuestionUI.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let range = $state([10, 300])

    $effect(() => {
        dispatch("answered", { selected: $state.snapshot(range) });
    })
</script>


<style>
    .select-layout {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1rem;
    }

    :global(#always .rangeFloat) {
        opacity: 1;
        translate: -50% 0;
    }
</style>


{#snippet content()}
    <div class="select-layout">
        <RangeSlider id="always" suffix="만원" pips rangeFloat range draggy min={10} max={200} step={10} pipstep={1} rangeGapMin={20} first=label last=label bind:values={range} />
    </div>
{/snippet}


<QuestionUI title="🪙 원하는
            가격을 알려주세요" description="가장 적합한 스마트폰을 찾고 있어요" content={content}/>