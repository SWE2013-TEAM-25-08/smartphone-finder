import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone16e = new Smartphone({
    link: "iphone-16-e",

    name: "아이폰 16e",
    description: "애플의 새로운 보급형 시리즈",
    image: null,
    specs: ["Apple A18 칩셋", "8GB RAM"],
    release_date: new Date("2025-02-28"),

    cpu: {single: 3231, multi: 7921},
    gpu: 1264,
    battery_time: 9 * 60 + 10,
    brand: Brand.Apple,
    camera: CameraLens.MACRO,
    display: 0.45,
    price: 94.05,
    ram: 8,
    size: 6.1,
    storage: 128,
    weight: 167
})