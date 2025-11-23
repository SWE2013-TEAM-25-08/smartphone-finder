import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone15 = new Smartphone({
    name: "아이폰 15",
    description: "다이내믹 아일랜드와 USB-C를 갖춘 새로운 기본 모델",
    image: null,
    specs: ["Apple A16 Bionic 칩셋", "6GB RAM"],
    release_date: new Date("2023-09-22"),

    cpu: { single: 2550, multi: 6700 },
    gpu: 27200,
    battery_time: 20 * 60, // 동영상 재생 최대 20시간
    brand: Brand.Apple,
    camera: CameraLens.MACRO,
    display: 0.65,
    price: 94,
    ram: 6,
    size: 6.1,
    storage: 128,
    weight: 171
});
