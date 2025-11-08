<script lang="ts">
    import { onMount } from 'svelte';

    import {galaxyS25} from "$lib/phone/galaxyS25";
    import {galaxyS25Plus} from "$lib/phone/galaxyS25Plus";
    import {galaxyS25Ultra} from "$lib/phone/galaxyS25Ultra";
    import {iPhone17} from "$lib/phone/iPhone17";
    import {iPhone17Pro} from "$lib/phone/iPhone17Pro";
    import {iPhone17ProMax} from "$lib/phone/iPhone17ProMax";

    import type {Smartphone} from "$lib/types/Smartphone";
    import {Brand} from "$lib/enum/Brand";
    import type {Table} from "$lib/types/Table";

    interface Filter {
        display: string
        filter: (phone: Smartphone) => boolean
    }

    onMount(() => {
        let tableString: string | null = sessionStorage.getItem("table")
        if (tableString) {
            let table: Table = JSON.parse(tableString)

            phones = phones.sort((a: Smartphone, b: Smartphone) => b.getScore(table) - a.getScore(table))
        }
    })

    let brands: Filter[] = [
        { display: "삼성전자", filter: ((phone: Smartphone): boolean => phone.brand === Brand.Samsung) },
        { display: "애플", filter: ((phone: Smartphone): boolean => phone.brand === Brand.Apple) },
        { display: "샤오미", filter: ((phone: Smartphone): boolean => phone.brand === null) }
    ];
    let years: Filter[] = [
        { display: "2025년", filter: ((phone: Smartphone): boolean => phone.release_date.getFullYear() === 2025) },
        { display: "2024년", filter: ((phone: Smartphone): boolean => phone.release_date.getFullYear() === 2024) },
        { display: "2023년 이전", filter: ((phone: Smartphone): boolean => phone.release_date.getFullYear() <= 2023) },
    ];
    let features: Filter[] = [
        { display: "고성능", filter: ((phone: Smartphone): boolean => phone.cpu.single >= 2000) },
        { display: "오래가는 배터리", filter: ((phone: Smartphone): boolean => phone.battery_time >= 9 * 60) },
        { display: "폴더블", filter: ((phone: Smartphone): boolean => false) },
    ];

   let phones = [
        galaxyS25, galaxyS25Plus, galaxyS25Ultra,
        iPhone17, iPhone17Pro, iPhone17ProMax,
    ];

    let selectedBrands: Filter[] = [];
    let selectedYears: Filter[] = [];
    let selectedFeatures: Filter[] = [];

    function toggleBrand(brand: Filter) {
        if (selectedBrands.includes(brand)) {
            selectedBrands = selectedBrands.filter(b => b !== brand);
        } else {
            selectedBrands = [...selectedBrands, brand];
        }
    }

    function toggleYear(year: Filter) {
        if (selectedYears.includes(year)) {
            selectedYears = selectedYears.filter(y => y !== year);
        } else {
            selectedYears = [...selectedYears, year];
        }
    }

    function toggleFeature(feature: Filter) {
        if (selectedFeatures.includes(feature)) {
            selectedFeatures = selectedFeatures.filter(f => f !== feature);
        } else {
            selectedFeatures = [...selectedFeatures, feature];
        }
    }

    $: filteredPhones = phones.filter(phone => {
        const brandMatch = selectedBrands.length === 0 || selectedBrands.some(brand => brand.filter(phone));
        const yearMatch = selectedYears.length === 0 || selectedYears.some(year => year.filter(phone));
        const featureMatch = selectedFeatures.length === 0 || selectedFeatures.some(feature => feature.filter(phone));
        return brandMatch && yearMatch && featureMatch;
    });
</script>

<div class="page">
    <div class="wrapper">
        <div class="filters-container">
            <section class="filters">
                <h2>브랜드</h2>
                <div class="brand-buttons">
                    {#each brands as brand}
                        <button
                            class:selected={selectedBrands.includes(brand)}
                            on:click={() => toggleBrand(brand)}
                        >
                            {brand.display}
                        </button>
                    {/each}
                </div>
            </section>

            <section class="filters">
                <h2>출시년도</h2>
                <div class="year-buttons">
                    {#each years as year}
                        <button
                            class:selected={selectedYears.includes(year)}
                            on:click={() => toggleYear(year)}>
                            {year.display}
                        </button>
                    {/each}
                </div>
            </section>

            <section class="filters">
                <h2>선호사항</h2>
                <div class="feature-buttons">
                    {#each features as feature}
                        <button
                            class:selected={selectedFeatures.includes(feature)}
                            on:click={() => toggleFeature(feature)}
                        >
                            {feature.display}
                        </button>
                    {/each}
                </div>
            </section>
        </div>

        <section class="product-list">
            <p>≡ 인기순</p>
            {#each filteredPhones as phone}
                <article class="phone-card">
                    {#if phone.image}
                        <img src={phone.image} alt={phone.name} />
                    {:else}
                        <div class="no-image">이미지 없음</div>
                    {/if}
                    <div class="phone-info">
                        <h3>{phone.name}</h3>
                        <p>{phone.description}</p>
                        <ul>
                            {#each phone.specs as spec}
                                <li>{spec}</li>
                            {/each}
                        </ul>
                    </div>
                </article>
            {/each}
        </section>
    </div>
</div>

<style>
.page {
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
    background-color: #fff;
    color: #222;
}

.wrapper {
    margin: 0 auto;
    max-width: 960px;
    min-width: 480px;
}

.nav-bar a {
    margin-left: 24px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
}

.nav-bar a:hover {
    color: #5B4EFF;
}

/*필터 리스트 사이 구분선*/
.filters-container {
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 15px;
    margin-bottom: 40px;
    width: 100%;
    box-sizing: border-box;
}

.filters {
    display: flex;
    align-items: center;
    text-align: right;
    gap: 30px;
    margin-top: 15px;
}

.filters h2 {
    width: 80px;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
    margin: 0;
}

.brand-buttons,
.year-buttons,
.feature-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

button {
    padding: 8px 14px;
    border: none;
    border-radius: 8px;
    background-color: #f4f4f4;
    color: #333;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
}

button:hover {
    background-color: #e9e9e9;
}

button.selected {
    background-color: #E7E1FF;
    color: #5B4EFF;
    font-weight: 600;
}

.product-list {
    margin-top: 40px;
}

.phone-card {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 12px 0;
    margin-bottom: 20px;
}

.phone-card img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    display: block;
}

.no-image {
    width: 120px;
    height: 120px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
    border: 1px solid #f0f0f0;
}

.phone-info h3 {
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 4px;
}

.phone-info p {
    color: #666;
    font-size: 14px;
    margin: 0 0 8px;
}

.phone-info ul {
    padding-left: 16px;
    margin: 0;
    color: #555;
    font-size: 13px;
}

.phone-info li {
    margin-bottom: 4px;
}
</style>