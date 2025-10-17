<script lang="ts">
  import Hero from '$lib/ui/Hero.svelte';
  import SectionHeader from '$lib/ui/SectionHeader.svelte';
  import Carousel from '$lib/ui/Carousel.svelte';
  import ProductCard from '$lib/ui/ProductCard.svelte';
  import NewsCard from '$lib/ui/NewsCard.svelte';

  // 데이터 없으면 스켈레톤만 보여줌
  let phones: any[] = [];
  let news: any[] = [];
</script>

<section id="test" class="container-x hero section">
  <Hero />
</section>

<section id="browse" class="container-x section">
  <SectionHeader title="둘러보기" href="#" />
  <Carousel items={phones} let:item>
    <ProductCard {item} />
  </Carousel>
</section>

<section id="news" class="container-x section">
  <SectionHeader title="전자기기 소식" href="#" />
  <Carousel items={news} let:item cardWidth="360px">
    <NewsCard {item} />
  </Carousel>
</section>
