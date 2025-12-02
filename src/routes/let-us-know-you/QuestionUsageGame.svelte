<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import QuestionUI from "./QuestionUI.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // ✅ 각 항목의 선택 상태 (Svelte 5 Runes API)
  let data = $state([false, false, false, false, false, false]);

  // ✅ 선택 상태 변화 감시
  $effect(() => {
    const hasSelection = data.some(v => v);

    // 하나라도 선택되면 answered 이벤트, 모두 해제되면 unanswered 이벤트
    if (hasSelection) {
      dispatch("answered", { selected: $state.snapshot(data) });
    } else {
      dispatch("unanswered");
    }
  });
</script>

<style>
  .select-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    flex-direction: column;
    gap: 1rem;
  }
</style>

{#snippet content()}
  <div class="select-layout">
    <Button
      onclick={() => (data[0] = !data[0])}
      state={data[0]}
      icon={["icons/infinite_stairs.png"]}
      message="아케이드"
    />
    <Button
      onclick={() => (data[1] = !data[1])}
      state={data[1]}
      icon={["icons/lineage_m.png"]}
      message="MMORPG"
    />
    <Button
      onclick={() => (data[2] = !data[2])}
      state={data[2]}
      icon={["icons/royal_match.png"]}
      message="캐주얼 · 퍼즐"
    />
    <Button
      onclick={() => (data[3] = !data[3])}
      state={data[3]}
      icon={["icons/fc_mobile.png"]}
      message="스포츠 · 액션"
    />
    <Button
      onclick={() => (data[4] = !data[4])}
      state={data[4]}
      icon={["icons/clash_of_clans.png"]}
      message="전략"
    />
    <Button
      onclick={() => (data[5] = !data[5])}
      state={data[5]}
      icon={["icons/genshin.png"]}
      message="롤플레잉"
    />
  </div>
{/snippet}

<QuestionUI
  title="🎮 스마트폰으로 하는 게임을 알려주세요"
  description="하고 있는 게임의 장르를 모두 골라주세요"
  content={content}
/>
