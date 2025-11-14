<script lang="ts">
  import Hero from './Hero.svelte';
  import SectionHeader from './SectionHeader.svelte';
  import Carousel from './Carousel.svelte';
  import ProductCard from './ProductCard.svelte';
  import NewsCard from './NewsCard.svelte';
  import {phoneList} from "$lib/phone/PhoneList";
  import {newsList} from "$lib/news/NewsList";
  import type {Smartphone} from "$lib/types/Smartphone";
  import type {News} from "$lib/types/News";

  let phones: Smartphone[] = phoneList;
  let news: News[] = newsList;
</script>

<section id="test" class="container-x hero section">
  <Hero />
</section>

<section id="browse" class="container-x section">
  <SectionHeader title="둘러보기" href="/list" />
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
