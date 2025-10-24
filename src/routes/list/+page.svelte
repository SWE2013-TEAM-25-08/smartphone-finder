<script>
    let brands = ["삼성전자", "애플", "샤오미"];
    let years = ["2025년", "2024년", "2023년 이전"];
    let features = ["고성능", "오래가는 배터리", "폴더블"];

    let phones = [
        { name: "아이폰 16", description: "균형잡힌 성능, 과감한 색상", specs: ["A18 칩셋", "8GB RAM"], image: "", brand: "애플", year: "2025년", feature: "고성능" },
        { name: "갤럭시 S25", description: "강력한 칩셋과 훌륭한 AI", specs: ["Snapdragon 8 Elite 칩셋", "8GB RAM"], brand: "삼성전자", year: "2025년", feature: "폴더블" }
    ];

    let selectedBrands = [];
    let selectedYears = [];
    let selectedFeatures = [];

    function toggleBrand(brand) {
        if (selectedBrands.includes(brand)) {
            selectedBrands = selectedBrands.filter(b => b !== brand);
        } else {
            selectedBrands = [...selectedBrands, brand];
        }
    }

    function toggleYear(year) {
        if (selectedYears.includes(year)) {
            selectedYears = selectedYears.filter(y => y !== year);
        } else {
            selectedYears = [...selectedYears, year];
        }
    }

    function toggleFeature(feature) {
        if (selectedFeatures.includes(feature)) {
            selectedFeatures = selectedFeatures.filter(f => f !== feature);
        } else {
            selectedFeatures = [...selectedFeatures, feature];
        }
    }

    $: filteredPhones = phones.filter(phone => {
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(phone.brand);
        const yearMatch = selectedYears.length === 0 || selectedYears.includes(phone.year);
        const featureMatch = selectedFeatures.length === 0 || selectedFeatures.includes(phone.feature);
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
                            {brand}
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
                            on:click={() => toggleYear(year)}
                        >
                            {year}
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
                            {feature}
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