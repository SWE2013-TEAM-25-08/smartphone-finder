<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import QuestionUI from "./QuestionUI.svelte";

    let data = $state([false, false, false, false])

    $effect(() => {
        console.log($state.snapshot(data))
    })
</script>


<style>
    .select-layout {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>


{#snippet content()}
    <div class="select-layout">
        <Button onclick={() => data[0] = !data[0]} state={data[0]} message="인물 촬영"/>
        <Button onclick={() => data[1] = !data[1]} state={data[1]} message="풍경 촬영"/>
        <Button onclick={() => data[2] = !data[2]} state={data[2]} message="가까운 물체 촬영"/>
        <Button onclick={() => data[3] = !data[3]} state={data[3]} message="멀리 있는 물체 촬영"/>
    </div>
{/snippet}


<QuestionUI title="📷 스마트폰으로
            어떤 촬영을 많이 하나요?" description="해당하는 선택지를 모두 골라주세요" content={content}/>