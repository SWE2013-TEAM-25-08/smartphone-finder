<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import QuestionUI from "./QuestionUI.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // ✅ 각 항목 선택 상태 (Runes API)
  let data = $state([false, false, false, false, false]);

  // ✅ 선택 상태 변화 감시
  $effect(() => {
    const hasSelection = data.some(v => v);

    // 하나라도 선택되면 answered, 전부 해제되면 unanswered
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
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    gap: 1rem;
  }
</style>

{#snippet content()}
  <div class="select-layout">
    <Button
      onclick={() => (data[0] = !data[0])}
      state={data[0]}
      icon={["icons/netflix.png", "icons/chrome.png"]}
      message="인터넷 · 미디어"
    />
    <Button
      onclick={() => (data[1] = !data[1])}
      state={data[1]}
      icon={["icons/notion.png", "icons/excel.png"]}
      message="업무"
    />
    <Button
      onclick={() => (data[2] = !data[2])}
      state={data[2]}
      icon={["icons/battlegrounds.png", "icons/lineage_m.png"]}
      message="게임"
    />
    <Button
      onclick={() => (data[3] = !data[3])}
      state={data[3]}
      icon={["icons/photo.png", "icons/camera.png"]}
      message="사진"
    />
    <Button
      onclick={() => (data[4] = !data[4])}
      state={data[4]}
      icon={["icons/spotify.png", "icons/instagram.png"]}
      message="일상 · SNS"
    />
  </div>
{/snippet}

<QuestionUI
  title="📱 스마트폰을 어떤 일에 사용하나요?"
  description="스마트폰으로 하는 일을 모두 선택해주세요"
  content={content}
/>
