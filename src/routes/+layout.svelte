<script lang="ts">
  import '$lib/styles/app.css';
  import '$lib/styles/color.css';
  import '$lib/styles/font.css';

  import { page } from "$app/state";

  let { children } = $props()

  const active = $derived.by(() => {
    const path = page.url.pathname;

    if (path === '/') {
      return 'home';
    } else if (path.startsWith('/let-us-know-you')) {
      return 'test';
    } else if (path.startsWith('/list')) {
      return 'list';
    } else if (path.startsWith('/news')) {
      return 'news';
    }
    return 'none';
  });
</script>

<style>
#container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.wrapper {
  flex-grow: 1;
}
</style>

<div id="container">
  <nav class="navbar">
    <div class="navbar-inner container-x">
      <a href="/" class="brand"><strong style="color:var(--primary)">Upik</strong></a>
      <ul class="nav-menu">
        <li class:active={active === 'home'}><a href="/">홈</a></li>
        <li class:active={active === 'test'}><a href="/let-us-know-you">테스트</a></li>
        <li class:active={active === 'list'}><a href="/list">스마트폰</a></li>
        <li class:active={active === 'news'}><a href="/news">IT 소식</a></li>
      </ul>
    </div>
  </nav>

  <div class="wrapper">
    {@render children?.()}
  </div>

  <footer class="footer">
    <div class="container-x">
      <h3 class="text-gradient" style="margin:0 0 8px;">Upik</h3>
      <p>전자기기 추천 서비스</p>
      <small>© SWE2013·TEAM-25-08</small>
    </div>
  </footer>
</div>