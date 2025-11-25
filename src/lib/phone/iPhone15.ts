import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone15 = new Smartphone({
    link: "iphone-15",

    name: "아이폰 15",
    description: "다이내믹 아일랜드와 USB-C를 갖춘 새로운 기본 모델",
    image: null,
    specs: ["Apple A16 Bionic 칩셋", "6GB RAM"],
    release_date: new Date("2023-09-22"),

    foldable: false,

    cpu: { single: 2550, multi: 6700 },
    gpu: 1053,
    battery_time: 9 * 60 + 57,
    brand: Brand.Apple,
    camera: CameraLens.MACRO,
    display: 0.65,
    price: 94,
    ram: 6,
    size: 6.1,
    storage: 128,
    weight: 171
});
