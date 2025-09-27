<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import QuestionUI from "./QuestionUI.svelte";

    let select = $state(-1)

    $effect(() => {
        console.log(select)
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
        <Button onclick={() => select = 0} state={select === 0} message="작고 가벼운 스마트폰이 좋아요"/>
        <Button onclick={() => select = 1} state={select === 1} message="화면은 크지만 가벼웠으면 좋겠어요"/>
        <Button onclick={() => select = 2} state={select === 2} message="무게보다는 다른 것이 중요해요"/>
    </div>
{/snippet}


<QuestionUI title="👍 선호하는
            스마트폰 스타일을 알려주세요" description="가장 적합한 스마트폰을 찾고 있어요" content={content}/>