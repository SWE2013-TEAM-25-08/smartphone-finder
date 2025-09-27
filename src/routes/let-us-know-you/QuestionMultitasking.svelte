<script lang="ts">
    import QuestionUI from "./QuestionUI.svelte";
    import ImageTextButton from "$lib/components/ImageTextButton.svelte";

    let select = $state(-1)

    $effect(() => {
        console.log(select)
    })
</script>


<style>
    .select-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex-direction: column;
        gap: 1rem;
    }
</style>


{#snippet content()}
    <div class="select-layout">
        <ImageTextButton onclick={() => select = 0} state={select === 0} image="img/multi.png" title="많이 사용해요" description="인터넷을 하며 영상을 보거나
                         게임하면서 통화를 해요"/>
        <ImageTextButton onclick={() => select = 1} state={select === 1} image="img/single.jpg" title="사용하지 않아요" description="영상이면 영상, 게임이면 게임
                         한 번에 하나씩만 해요"/>
    </div>
{/snippet}


<QuestionUI title="🔀 동시에 여러 앱을
            사용하는 경우가 많나요?" description="가장 적합한 스마트폰을 찾고 있어요" content={content}/>