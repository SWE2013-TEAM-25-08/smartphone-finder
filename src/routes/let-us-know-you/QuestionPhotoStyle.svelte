<script lang="ts">
    import QuestionUI from "./QuestionUI.svelte";
    import ImageButton from "$lib/components/ImageButton.svelte";

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
        <ImageButton onclick={() => select = 0} state={select === 0} image="photo/galaxys23.jpg"/>
        <ImageButton onclick={() => select = 1} state={select === 1} image="photo/iphone13.jpg"/>
    </div>
{/snippet}


<QuestionUI title="📷 어떤 사진이
            마음에 드시나요?" description="가장 적합한 스마트폰을 찾고 있어요" content={content}/>