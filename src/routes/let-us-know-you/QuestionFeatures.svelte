<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import QuestionUI from "./QuestionUI.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // ✅ 상태 (Svelte 5의 Runes API)
  let data = $state([false, false, false, false, false, false, false, false]);

  // ✅ 반응형 효과 — 선택이 바뀔 때마다 실행
  $effect(() => {
    dispatch("answered", { selected: $state.snapshot(data) });
  });
</script>

<style>
  .description {
    color: #909090;
  }

  .select-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
  }
</style>

{#snippet content()}
  <p class="description">생태계 기능</p>
  <div class="select-layout">
    <Button onclick={() => (data[0] = !data[0])} state={data[0]} icon={["icons/air_drop.webp"]} message="AirDrop" />
    <Button onclick={() => (data[1] = !data[1])} state={data[1]} icon={["icons/quick_share.png"]} message="Quick Share" />
    <Button onclick={() => (data[2] = !data[2])} state={data[2]} icon={["icons/apple_wallet.webp"]} message="애플페이" />
    <Button onclick={() => (data[3] = !data[3])} state={data[3]} icon={["icons/samsung_wallet.png"]} message="삼성 월렛" />
  </div>

  <p class="description">AI 기능</p>
  <div class="select-layout">
    <Button onclick={() => (data[4] = !data[4])} state={data[4]} icon={["icons/galaxy_ai.webp"]} message="이미지 편집" />
    <Button onclick={() => (data[5] = !data[5])} state={data[5]} icon={["icons/gemini.webp"]} message="인공지능 비서" />
    <Button onclick={() => (data[6] = !data[6])} state={data[6]} icon={["icons/apple_translate.webp"]} message="실시간 통역" />
    <Button onclick={() => (data[7] = !data[7])} state={data[7]} icon={["icons/google_lens.png"]} message="사진 기반 검색" />
  </div>
{/snippet}

<QuestionUI
  title="💡 관심있거나 사용할 기능이 있나요?"
  description="해당하는 선택지를 모두 골라주세요"
  content={content}
/>