import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyS24Fe = new Smartphone({
    name: "갤럭시 S24 FE",
    description: "합리적 가격의 플래그십 경험",
    image: null,
    specs: ["Exynos 2400 칩셋", "8GB RAM"],
    release_date: new Date("2024-10-03"),

    cpu: {single: 1850, multi: 6100},
    gpu: 1650,
    battery_time: 9 * 60 + 45,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.68,
    price: 79.9,
    ram: 8,
    size: 6.4,
    storage: 128,
    weight: 208
})