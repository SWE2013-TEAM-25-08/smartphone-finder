<script>
    let brands = ["삼성전자", "애플", "샤오미"];
    let years = ["2025년", "2024년", "2023년 이전"];
    let features = ["고성능", "오래가는 배터리", "폴더블"];

    let phones = [
        {
            name: "아이폰 16",
            description: "균형잡힌 성능, 과감한 색상",
            specs: ["A18 칩셋", "8GB RAM"],
            image: ""
        },
        {
            name: "갤럭시 S25",
            description: "강력한 칩셋과 훌륭한 AI",
            specs: ["Snapdragon 8 Elite 칩셋", "8GB RAM"]
        }
    ];

    let selectedBrand = null;
    let selectedYear = null;
    let selectedFeature = null;

    function selectBrand(brand){
        selectedBrand = brand;
    }

    function selectYear(year){
        selectedYear = year;
    }

    function selectFeature(feature){
        selectedFeature = feature;
    }

    $: filteredPhones = phones.filter(phone => {
        return (!selectedBrand || phone.brand === selectedBrand) &&
               (!selectedYear || phone.year === selectedYear) &&
               (!selectedFeature || phone.feature === selectedFeature);
    });
</script>

<div class = "page">
    <header class = "page-header">
        <h1 class = "service-title">서비스 이름</h1>
        <nav class = "nav-bar">
            <a href="/">홈</a>
            <a href = "/test">테스트</a>
            <a href = "/smartphone">스마트폰</a>
            <a href = "/news">IT 소식</a>
        </nav>
    </header>

    <section class = "filters">
        <h2>브랜드</h2>
        <div class = "brand-buttons">
            {#each brands as brand}
             <button
                class:selected={selectedBrand === brand}
                on:click={() => selectBrand(brand)}
             >
             {brand}
             </button>
            {/each}
        </div>
    </section>

    <section class = "filters">
        <h2>출시년도</h2>
        <div class = "year-buttons">
            {#each years as year}
                <button 
                    class:selected={selectedYear === year}
                    on:click={() => selectYear(year)}
                >
                    {year}
                </button>
            {/each}
        </div>
    </section>

    <section class="filters">
        <h2>선호사항</h2>
        <div class = "feature-buttons">
            {#each features as feature}
                <button
                    class:selected={selectedFeature === feature}
                    on:click={() => selectFeature(feature)}
                >
                    {feature}
                </button>
            {/each}
        </div>
    </section>

    <section class = "product-list">
        <h2>인기 제품</h2>
        {#each filteredPhones as phone}
            <article class = "phone-card">
                {#if phone.image}
                    <img src = {phone.image} alt = {phone.name} />
                {:else}
                    <div class = "no-image">이미지 없음</div>
                {/if}
                <div class = "phone-info">
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