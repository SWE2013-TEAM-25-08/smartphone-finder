<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  export let data;

  let active: 'home' | 'test' | 'browse' | 'news' = 'home';

  onMount(() => {
    const ids = ['test','browse','news'];
    const sections = ids.map((id)=>document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((entries)=>{
      const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible){
        const id = visible.target.id as 'test'|'browse'|'news';
        active = id==='test' ? 'home' : id;
      }
    },{root:null,rootMargin:'-30% 0px -60% 0px',threshold:[0,.25,.5,.75,1]});
    sections.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  });
</script>

<nav class="navbar">
  <div class="navbar-inner container-x">
    <a href="/" class="brand"><strong style="color:var(--primary)">서비스</strong> 이름</a>
    <ul class="nav-menu">
      <li class:active={active==='home'}><a href="/">홈</a></li>
      <li class:active={active==='test'}><a href="#test">테스트</a></li>
      <li class:active={active==='browse'}><a href="#browse">스마트폰</a></li>
      <li class:active={active==='news'}><a href="#news">IT 소식</a></li>
    </ul>
  </div>
</nav>

<slot />

<footer class="footer">
  <div class="container-x">
    <h3 class="text-gradient" style="margin:0 0 8px;">Footer</h3>
    <small>© SWE2013·TEAM-25-08</small>
  </div>
</footer>

