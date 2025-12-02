<script lang="ts">
    import type {Smartphone} from "$lib/types/Smartphone";
    import {CameraLens} from "$lib/enum/CameraLens";

    let { data } = $props();
    let phone: Smartphone = $derived(data.phone)
</script>

<style>
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        max-width: 68rem;
        margin: 2rem auto 0;
        gap: 1.5rem;
    }
    .image-layout, .description-layout {
        flex: 1;
        min-width: 300px;
        padding: 1rem;
    }

    .img-cover {
        object-fit: contain;
    }

    .phone-name {
        color: #212529;
        font-size: 1.5rem;
        font-weight: bold;
        margin-block: 1rem;
    }
    .phone-description {
        color: #909090;
        margin-block: 1rem;
    }

    .subtitle {
        font-weight: bold;
    }

    .table-layout {
        width: 100%;
    }
    td {
        height: 2.25rem
    }
    tr:not(:first-child) td {
        border-top: thin solid #F2F3F5;
    }
</style>

<div class="wrapper">
    <div class="image-layout">
        {#if phone.image}
            <img src={phone.image} alt={phone.name} class="img-cover" />
        {:else}
            <div class="skeleton" style="width:100%; height:100%;"></div>
        {/if}
    </div>
    <div class="description-layout">
        <p class="phone-name">{phone.name}</p>
        <p class="phone-description">{phone.description}</p>
        <br/>
        <p class="subtitle">주요 정보</p>
        <table class="table-layout">
            <thead style="display: none;"><tr><th>스펙</th><th>정보</th></tr></thead>
            <tbody>
                <tr>
                    <td style="width:25%">AP</td><td>{phone.specs[0]}</td>
                </tr>
                <tr>
                    <td>램</td><td>{phone.ram}GB</td>
                </tr>
                <tr>
                    <td>용량</td><td>{phone.storage}GB</td>
                </tr>
                <tr>
                    <td>출시 가격</td><td>{phone.price}만원</td>
                </tr>
            </tbody>
        </table>
        <br/>
        <p class="subtitle">카메라</p>
        <table class="table-layout">
            <thead style="display: none;"><tr><th>스펙</th><th>정보</th></tr></thead>
            <tbody>
                <tr>
                    <td style="width:25%">접사 기능</td><td>{phone.camera & CameraLens.MACRO ? "O" : "X"}</td>
                </tr>
                <tr>
                    <td>망원 기능</td><td>{phone.camera & CameraLens.TELEPHOTO ? "O" : "X"}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>