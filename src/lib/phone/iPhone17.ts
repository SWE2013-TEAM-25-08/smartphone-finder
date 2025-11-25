import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone17 = new Smartphone({
    link: "iphone-17",

    name: "아이폰 17",
    description: "프로모션이 적용된 최초의 일반 모델",
    image: null,
    specs: ["A19 칩셋", "8GB RAM"],
    release_date: new Date("2025-09-19"),

    foldable: false,

    cpu: {single: 3593, multi: 9125},
    gpu: 1697,
    battery_time: 9 * 60 + 43,
    brand: Brand.Apple,
    camera: CameraLens.MACRO,
    display: 0.9,
    price: 129,
    ram: 8,
    size: 6.3,
    storage: 256,
    weight: 177
})