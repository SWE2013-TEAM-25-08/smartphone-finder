<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import QuestionUI from "./QuestionUI.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // ✅ -1이면 아직 아무것도 선택 안 함
  let select = $state(-1);

  // ✅ 선택 상태가 바뀔 때마다 이벤트 전달
  $effect(() => {
    if (select === -1) {
      // 선택되지 않은 경우 → 다음 버튼 비활성화
      dispatch("unanswered");
    } else {
      // 하나 선택된 경우 → 다음 버튼 활성화
      dispatch("answered", { selected: $state.snapshot(select) });
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
    <Button onclick={() => (select = 0)} state={select === 0} message="3시간 이하" />
    <Button onclick={() => (select = 1)} state={select === 1} message="3시간 ~ 5시간" />
    <Button onclick={() => (select = 2)} state={select === 2} message="5시간 ~ 7시간" />
    <Button onclick={() => (select = 3)} state={select === 3} message="7시간 이상" />
  </div>
{/snippet}

<QuestionUI
  title="⏱️ 스마트폰의 야외 사용 시간을 알려주세요"
  description="가장 적합한 스마트폰을 찾고 있어요"
  content={content}
/>