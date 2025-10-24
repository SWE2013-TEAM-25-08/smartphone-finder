<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import QuestionUI from "./QuestionUI.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // ✅ Runes API의 상태
  let data = $state([false, false, false]);

  // ✅ 반응형 효과: data가 바뀔 때마다 실행
  $effect(() => {
    const hasSelection = data.some(v => v);

    // 하나라도 선택되면 answered 이벤트
    if (hasSelection) {
      dispatch("answered", { selected: $state.snapshot(data) });
    } 
    // 전부 해제되면 unanswered 이벤트
    else {
      dispatch("unanswered");
    }
  });
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
    <Button onclick={() => (data[0] = !data[0])} state={data[0]} message="편한 AS가 필요해요" />
    <Button onclick={() => (data[1] = !data[1])} state={data[1]} message="중고 가격 유지가 중요해요" />
    <Button onclick={() => (data[2] = !data[2])} state={data[2]} message="다양한 액세서리가 중요해요" />
  </div>
{/snippet}

<QuestionUI
  title="🧐 추가로 고려하고 싶은 것이 있나요?"
  description="가장 적합한 스마트폰을 찾고 있어요"
  content={content}
/>