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
  let answered = false; // 선택 완료 여부

  let showGamePage = false
  let showCameraPage = false

  // 다음 페이지로 이동
  function nextPage() {
    if (answered && currentIndex < pages.length - 1) {
      if (pages[currentIndex] === QuestionUsage) {
        if (showGamePage) currentIndex += 1
        else if (showCameraPage) currentIndex += 2
        else currentIndex += 3
      }
      else if (pages[currentIndex] === QuestionUsageGame) {
        if (showCameraPage) currentIndex += 1
        else currentIndex += 2
      }
      else {
        currentIndex += 1;
      }
      answered = false; // 다음 페이지로 넘어가면 다시 비활성화
    }
  }

  // 이전 페이지로 이동
  function prevPage() {
    if (currentIndex > 0) {
      if (pages[currentIndex] === QuestionUsageCamera) {
        if (showGamePage) currentIndex -= 1
        else currentIndex -= 2
      }
      else if (pages[currentIndex] === QuestionPrice) {
        if (showCameraPage) currentIndex -= 1
        else if (showGamePage) currentIndex -= 2
        else currentIndex -= 3
      }
      else {
        currentIndex -= 1;
      }
      answered = false; // 이전 페이지로도 초기화
    }
  }

  function complete() {
    // TODO: 테이블 계산 후 "/list"로 넘기기
  }

  function calcTable(data: any) {
    switch (pages[currentIndex]) {
      case QuestionUsage:
        showGamePage = data[2] === true
        showCameraPage = data[3] === true
        break

      case QuestionUsageGame:
        break

      case QuestionUsageCamera:
        break

      case QuestionPrice:
        break

      case QuestionPhotoStyle:
        break

      case QuestionOutdoorUsage:
        break

      case QuestionMultitasking:
        break

      case QuestionPhoneStyle:
        break

      case QuestionAccessories:
        break

      case QuestionFeatures:
        break

      case QuestionAdditional:
        break
    }
  }

  // 현재 표시 중인 컴포넌트
  $: CurrentComponent = pages[currentIndex];
</script>

<!-- 현재 질문 화면 표시 -->
<div class="question-container">
  <svelte:component
    this={CurrentComponent}
    on:answered={(event) => {
      answered = true
      calcTable(event.detail.selected)
    }}
    on:unanswered={() => answered = false} />
</div>

<!-- 페이지 이동 버튼 -->
<div class="button-box">
  {#if currentIndex > 0}
    <button class="prev-button" on:click={prevPage}>이전</button>
  {/if}
  {#if currentIndex < pages.length - 1}
    <button class="next-button" on:click={nextPage} disabled={!answered}>다음</button>
  {:else}
    <button class="next-button" on:click={complete}>완료</button>
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

  .next-button {
    background-color: rgba(128, 62, 248, 1);
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .prev-button {
    background-color: transparent;
    color: #212529;
    border: 1px rgba(233, 236, 239, 1) solid;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  button:disabled {
    background-color: #ccc;
    cursor: default;
  }
</style>