import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone14 = new Smartphone({
    link: "iphone-14",

    name: "아이폰 14",
    description: "균형 잡힌 성능의 기본 플래그십",
    image: null,
    specs: ["Apple A15 Bionic 칩셋 (5코어 GPU)", "6GB RAM"],
    release_date: new Date("2022-09-16"),

    cpu: {single: 2259, multi: 5534},
    gpu: 21336,
    battery_time: 20 * 60,
    brand: Brand.Apple,
    camera: CameraLens.MACRO,
    display: 0.6,
    price: 98,
    ram: 6,
    size: 6.1,
    storage: 128,
    weight: 172
});