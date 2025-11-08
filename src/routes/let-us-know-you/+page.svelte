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
  import type {Table} from "$lib/types/Table";
  import {goto} from "$app/navigation";

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

  let oldData: any[] = []

  let table: Table = {
    cpu: 4,
    gpu: 3,
    ram: 3,
    display: 4,
    battery_time: 3,
    storage: 1.5,
    size: {inch: 6.4, weight: 1},
    weight: 0.8,
    camera: {macro: false, telephoto: false, weight: 1},
    brand: {apple: 2, samsung: 2},
    price: {range: [], weight: 3},
  };

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
  // TODO: 선택이 유지되어야 함
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
    sessionStorage.setItem("table", JSON.stringify(table))
    goto("/list")
  }

  function calcTable(data: any) {
    switch (pages[currentIndex]) {
      case QuestionUsage:
        showGamePage = data[2] === true
        showCameraPage = data[3] === true

        if ((data[0] && !oldData[currentIndex]) || oldData[currentIndex] && data[0] !== oldData[currentIndex][0]) {  // 인터넷 · 미디어
          let sf = data[0] ? 1 : -1
          table.display += 0.3 * sf
        }
        if ((data[1] && !oldData[currentIndex]) || oldData[currentIndex] && data[1] !== oldData[currentIndex][1]) {  // 업무
          let sf = data[1] ? 1 : -1
          table.cpu += 0.1 * sf
          table.storage += 0.5 * sf
        }
        if ((data[2] && !oldData[currentIndex]) || oldData[currentIndex] && data[2] !== oldData[currentIndex][2]) {  // 게임
          let sf = data[2] ? 1 : -1
          table.cpu += 0.4 * sf
          table.ram += 0.5 * sf
          table.storage += 0.5 * sf
          table.display += 0.3 * sf
          table.battery_time += 0.8 * sf
        }
        if ((data[3] && !oldData[currentIndex]) || oldData[currentIndex] && data[3] !== oldData[currentIndex][3]) {  // 사진
          let sf = data[3] ? 1 : -1
          table.cpu += 0.2 * sf
          table.ram += 0.5 * sf
          table.storage += 0.8 * sf
          table.battery_time += 0.8 * sf
        }
        if ((data[4] && !oldData[currentIndex]) || oldData[currentIndex] && data[4] !== oldData[currentIndex][4]) {  // 일상 · SNS
          let sf = data[4] ? 1 : -1
          table.storage += 0.5 * sf
          table.battery_time += 1.2 * sf
          table.camera.weight += 0.6 * sf
          table.weight += 0.5 * sf
        }
        break

      case QuestionUsageGame:
        if ((data[1] && !oldData[currentIndex]) || oldData[currentIndex] && data[1] !== oldData[currentIndex][1]) {  // MMORPG
          let sf = data[1] ? 1 : -1
          table.cpu += 0.8 * sf
        }
        if ((data[3] && !oldData[currentIndex]) || oldData[currentIndex] && data[3] !== oldData[currentIndex][3]) {  // 스포츠 · 액션
          let sf = data[3] ? 1 : -1
          table.cpu += 0.6 * sf
        }
        if ((data[4] && !oldData[currentIndex]) || oldData[currentIndex] && data[4] !== oldData[currentIndex][4]) {  // 전략
          let sf = data[4] ? 1 : -1
          table.cpu += 0.3 * sf
        }
        if ((data[5] && !oldData[currentIndex]) || oldData[currentIndex] && data[5] !== oldData[currentIndex][4]) {  // 롤플레잉
          let sf = data[5] ? 1 : -1
          table.cpu += 0.4 * sf
        }
        break

      case QuestionUsageCamera:
        table.camera.macro = data[2]
        table.camera.telephoto = data[3]
        if ((data[0] && !oldData[currentIndex]) || oldData[currentIndex] && data[0] !== oldData[currentIndex][0]) {  // 인물 촬영
          let sf = data[0] ? 1 : -1
          table.brand.apple += 0.4 * sf
          table.camera.weight += 0.5 * sf
        }
        if ((data[1] && !oldData[currentIndex]) || oldData[currentIndex] && data[1] !== oldData[currentIndex][1]) {  // 풍경 촬영
          let sf = data[1] ? 1 : -1
          table.brand.samsung += 0.2 * sf
          table.camera.weight += 0.5 * sf
        }
        if ((data[2] && !oldData[currentIndex]) || oldData[currentIndex] && data[2] !== oldData[currentIndex][2]) {  // 근접 촬영
          let sf = data[2] ? 1 : -1
          table.camera.weight += 0.2 * sf
        }
        if ((data[3] && !oldData[currentIndex]) || oldData[currentIndex] && data[3] !== oldData[currentIndex][3]) {  // 망원 촬영
          let sf = data[3] ? 1 : -1
          table.camera.weight += 0.2 * sf
        }
        break

      case QuestionPrice:
        table.price.range = data
        break

      case QuestionPhotoStyle:
        if (data !== oldData[currentIndex]) {
          if (oldData[currentIndex] === 0) {
            table.brand.apple += 0.5
            table.brand.samsung -= 0.5
          }
          if (oldData[currentIndex] === 1) {
            table.brand.apple -= 0.5
            table.brand.samsung += 0.5
          }

          if (data === 0) {
            table.brand.apple -= 0.5
            table.brand.samsung += 0.5
          }
          if (data === 1) {
            table.brand.apple += 0.5
            table.brand.samsung -= 0.5
          }
        }
        break

      case QuestionOutdoorUsage:
        if (data !== oldData[currentIndex]) {
          if (oldData[currentIndex] === 0)
            table.battery_time += 0.8
          if (oldData[currentIndex] === 1)
            table.battery_time += 0.2
          if (oldData[currentIndex] === 2)
            table.battery_time -= 0.2
          if (oldData[currentIndex] === 3)
            table.battery_time -= 0.8

          if (data === 0)
            table.battery_time -= 0.8
          if (data === 1)
            table.battery_time -= 0.2
          if (data === 2)
            table.battery_time += 0.2
          if (data === 3)
            table.battery_time += 0.8
        }
        break

      case QuestionMultitasking:
        if (data !== oldData[currentIndex]) {
          if (oldData[currentIndex] === 0)
            table.ram -= 0.8
          if (oldData[currentIndex] === 1)
            table.ram += 0.2

          if (data === 0)
            table.ram += 0.8
          if (data === 1)
            table.ram -= 0.2
        }
        break

      case QuestionPhoneStyle:
        if (data !== oldData[currentIndex]) {
          if (oldData[currentIndex] === 0) {
            table.size.inch += 0.4
            table.size.weight -= 0.4
            table.weight -= 0.4
          }
          if (oldData[currentIndex] === 1) {
            table.size.weight -= 0.4
            table.weight -= 0.6
          }
          if (oldData[currentIndex] === 2) {
            table.size.weight += 0.4
            table.weight += 0.4
          }

          if (data === 0) {
            table.size.inch -= 0.4
            table.size.weight += 0.4
            table.weight += 0.4
          }
          if (data === 1) {
            table.size.weight += 0.4
            table.weight += 0.6
          }
          if (data === 2) {
            table.size.weight -= 0.4
            table.weight -= 0.4
          }
        }
        break

      case QuestionAccessories:
        if ((data[0] && !oldData[currentIndex]) || oldData[currentIndex] && data[0] !== oldData[currentIndex][0]) {  // 갤럭시 버즈
          let sf = data[0] ? 1 : -1
          table.brand.samsung += 0.2 * sf
        }
        if ((data[1] && !oldData[currentIndex]) || oldData[currentIndex] && data[1] !== oldData[currentIndex][1]) {  // 애플 에어팟
          let sf = data[1] ? 1 : -1
          table.brand.apple += 0.2 * sf
        }
        if ((data[2] && !oldData[currentIndex]) || oldData[currentIndex] && data[2] !== oldData[currentIndex][2]) {  // 갤럭시 워치
          let sf = data[2] ? 1 : -1
          table.brand.samsung += 1.2 * sf
        }
        if ((data[3] && !oldData[currentIndex]) || oldData[currentIndex] && data[3] !== oldData[currentIndex][3]) {  // 애플워치
          let sf = data[3] ? 1 : -1
          table.brand.apple += 1.2 * sf
        }
        if ((data[4] && !oldData[currentIndex]) || oldData[currentIndex] && data[4] !== oldData[currentIndex][4]) {  // 갤럭시 탭, 갤럭시 북
          let sf = data[4] ? 1 : -1
          table.brand.samsung += 0.6 * sf
        }
        if ((data[5] && !oldData[currentIndex]) || oldData[currentIndex] && data[5] !== oldData[currentIndex][5]) {  // 아이패드, 맥북
          let sf = data[5] ? 1 : -1
          table.brand.apple += 0.6 * sf
        }
        break

      case QuestionFeatures:
        if ((data[0] && !oldData[currentIndex]) || oldData[currentIndex] && data[0] !== oldData[currentIndex][0]) {  // AirDrop
          let sf = data[0] ? 1 : -1
          table.brand.apple += 0.3 * sf
        }
        if ((data[1] && !oldData[currentIndex]) || oldData[currentIndex] && data[1] !== oldData[currentIndex][1]) {  // 퀵셰어
          let sf = data[1] ? 1 : -1
          table.brand.samsung += 0.2 * sf
        }
        if ((data[2] && !oldData[currentIndex]) || oldData[currentIndex] && data[2] !== oldData[currentIndex][2]) {  // 애플페이
          let sf = data[2] ? 1 : -1
          table.brand.apple += 0.3 * sf
        }
        if ((data[3] && !oldData[currentIndex]) || oldData[currentIndex] && data[3] !== oldData[currentIndex][3]) {  // 삼성페이
          let sf = data[3] ? 1 : -1
          table.brand.samsung += 0.4 * sf
        }

        if ((data[4] && !oldData[currentIndex]) || oldData[currentIndex] && data[4] !== oldData[currentIndex][4]) {  // 이미지 편집
          let sf = data[4] ? 1 : -1
          table.brand.samsung += 0.3 * sf
        }
        if ((data[5] && !oldData[currentIndex]) || oldData[currentIndex] && data[5] !== oldData[currentIndex][5]) {  // 인공지능 비서
          let sf = data[5] ? 1 : -1
          table.brand.samsung += 0.6 * sf
        }
        if ((data[6] && !oldData[currentIndex]) || oldData[currentIndex] && data[6] !== oldData[currentIndex][6]) {  // 실시간 통역
          let sf = data[6] ? 1 : -1
          table.brand.apple += 0.3 * sf
          table.brand.samsung += 0.2 * sf
        }
        if ((data[7] && !oldData[currentIndex]) || oldData[currentIndex] && data[7] !== oldData[currentIndex][7]) {  // 사진 검색
          let sf = data[7] ? 1 : -1
          table.brand.apple += 0.2 * sf
          table.brand.samsung += 0.3 * sf
        }
        break

      case QuestionAdditional:
        if ((data[0] && !oldData[currentIndex]) || oldData[currentIndex] && data[0] !== oldData[currentIndex][0]) {  // AS
          let sf = data[0] ? 1 : -1
          table.brand.samsung += 0.4 * sf
        }
        if ((data[1] && !oldData[currentIndex]) || oldData[currentIndex] && data[1] !== oldData[currentIndex][1]) {  // 중고 가격 유지
          let sf = data[1] ? 1 : -1
          table.brand.apple += 0.2 * sf
        }
        if ((data[2] && !oldData[currentIndex]) || oldData[currentIndex] && data[2] !== oldData[currentIndex][2]) {  // 다양한 액세서리
          let sf = data[2] ? 1 : -1
          table.brand.apple += 0.3 * sf
        }
        break
    }

    oldData[currentIndex] = data
    console.log(table)
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