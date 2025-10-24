<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import QuestionUI from "./QuestionUI.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // 각 버튼의 선택 상태
  let data = $state([false, false, false, false, false, false]);

  // 상태 변화 감지
  $effect(() => {
    dispatch("answered", { selected: $state.snapshot(data) });
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
    <Button onclick={() => (data[0] = !data[0])} state={data[0]} icon={["devices/galaxy_buds_3_pro.png"]} message="갤럭시 버즈" />
    <Button onclick={() => (data[1] = !data[1])} state={data[1]} icon={["devices/airpods_pro_3.png"]} message="애플 에어팟" />
    <Button onclick={() => (data[2] = !data[2])} state={data[2]} icon={["devices/galaxy_watch_8.png"]} message="갤럭시 워치" />
    <Button onclick={() => (data[3] = !data[3])} state={data[3]} icon={["devices/apple_watch_11.png"]} message="애플워치" />
    <Button onclick={() => (data[4] = !data[4])} state={data[4]} icon={["devices/galaxy_tab_s_11_ultra.png"]} message="갤럭시 탭 · 갤럭시 북" />
    <Button onclick={() => (data[5] = !data[5])} state={data[5]} icon={["devices/ipad_pro_13_m4.jpg"]} message="아이패드 · 맥북" />
  </div>
{/snippet}

<QuestionUI
  title="⌚️ 같이 사용할 주변기기가 있나요?"
  description="해당하는 선택지를 모두 골라주세요"
  content={content}
/>