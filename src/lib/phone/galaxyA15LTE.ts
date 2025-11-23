import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyA15LTE = new Smartphone({
    link: "galaxy-a15-lte",

    name: "갤럭시 A15 LTE",
    description: "합리적 가격의 기본형 스마트폰",
    image: null,
    specs: ["MediaTek Helio G99 칩셋", "6GB RAM"],
    release_date: new Date("2024-03-18"),

    cpu: {single: 743, multi: 2005},
    gpu: 1556,
    battery_time: 11 * 60 + 47,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO,
    display: 0.27,
    price: 31.9,
    ram: 6,
    size: 6.5,
    storage: 128,
    weight: 200
})