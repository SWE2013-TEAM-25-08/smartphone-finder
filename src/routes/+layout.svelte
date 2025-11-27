<script lang="ts">
  import '$lib/styles/app.css';
  import '$lib/styles/color.css';
  import '$lib/styles/font.css';

  import { page } from "$app/state";
  import { browser } from "$app/environment";

  let { children } = $props()

  const active = $derived.by(() => {
    const path = page.url.pathname;

    if (browser) {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-VRB9BCY5TY', {
          'page_path': path
        })
      }
    }

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

  if (browser) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() { window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', 'G-VRB9BCY5TY')
  }
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

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-VRB9BCY5TY"></script>
</svelte:head>

<div id="container">
  <nav class="navbar">
    <div class="navbar-inner container-x">
      <a href="/" class="brand"><strong style="color:var(--primary)">Upik</strong></a>
      <ul class="nav-menu">
        <li class:active={active === 'home'}><a href="/">홈</a></li>
        <li class:active={active === 'test'}><a href="/let-us-know-you">테스트</a></li>
        <li class:active={active === 'list'}><a href="/list">스마트폰</a></li>
        <li class:active={active === 'news'}><a href="/#news">IT 소식</a></li>
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