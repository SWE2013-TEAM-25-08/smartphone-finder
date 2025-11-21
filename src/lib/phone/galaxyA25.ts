import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyS25 = new Smartphone({
    name: "갤럭시 A25",
    description: "깔끔한 화면 화질, 오래가는 배터리",
    image: null,
    specs: ["Exynos 1280 칩셋", "6GB RAM"],
    release_date: new Date("2024-01-05"),

    cpu: {single: 971, multi: 2101},
    gpu: 1780,
    battery_time: 10 * 60 + 34,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO,
    display: 0.22,
    price: 43.99,
    ram: 6,
    size: 6.5,
    storage: 128,
    weight: 197
})