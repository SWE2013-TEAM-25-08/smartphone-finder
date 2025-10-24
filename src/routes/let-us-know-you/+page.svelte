<script lang="ts">
  // 모든 질문 컴포넌트 import
  import QuestionUsage from "./QuestionUsage.svelte";
  import QuestionUsageGame from "./QuestionUsageGame.svelte";
  import QuestionUsageCamera from "./QuestionUsageCamera.svelte";
  import QuestionPrice from "./QuestionPrice.svelte";
  import QuestionPhotoStyle from "./QuestionPhotoStyle.svelte";
  import QuestionOutdoorUsage from "./QuestionOutdoorUsage.svelte";
  import QuestionMultitasking from "./QuestionMultitasking.svelte";
  import QuestionPhoneStyle from "./QuestionPhoneStyle.svelte";
  import QuestionAccessories from "./QuestionAccessories.svelte";
  import QuestionFeatures from "./QuestionFeatures.svelte";
  import QuestionAdditional from "./QuestionAdditional.svelte";

  // 페이지 배열로 관리
  const pages = [
    QuestionUsage,
    QuestionUsageGame,
    QuestionUsageCamera,
    QuestionPrice,
    QuestionPhotoStyle,
    QuestionOutdoorUsage,
    QuestionMultitasking,
    QuestionPhoneStyle,
    QuestionAccessories,
    QuestionFeatures,
    QuestionAdditional
  ];

  let currentIndex = 0; // 현재 페이지 index

  // 다음 페이지로 이동
  function nextPage() {
    if (currentIndex < pages.length - 1) {
      currentIndex += 1;
    }
  }

  // 이전 페이지로 이동 (선택사항)
  function prevPage() {
    if (currentIndex > 0) {
      currentIndex -= 1;
    }
  }

  // 현재 표시 중인 컴포넌트
  $: CurrentComponent = pages[currentIndex];
</script>

<!-- 현재 질문 화면 표시 -->
<div class="question-container">
  <svelte:component this={CurrentComponent} />
</div>

<!-- 페이지 이동 버튼 -->
<div class="button-box">
  {#if currentIndex > 0}
    <button on:click={prevPage}>이전</button>
  {/if}
  {#if currentIndex < pages.length - 1}
    <button on:click={nextPage}>다음</button>
  {:else}
    <button disabled>완료!</button>
  {/if}
</div>

<style>
  .question-container {
    transition: opacity 0.4s ease;
    padding: 2rem;
  }

  .button-box {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  button {
    background-color: #ff7bac;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
  }

  button:disabled {
    background-color: #ccc;
    cursor: default;
  }
</style>