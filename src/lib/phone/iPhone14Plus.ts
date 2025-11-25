import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone14Plus = new Smartphone({
    link: "iphone-14-plus",

    name: "아이폰 14 플러스",
    description: "더 큰 화면과 긴 배터리를 갖춘 플러스 모델",
    image: null,
    specs: ["Apple A15 Bionic 칩셋 (5코어 GPU)", "6GB RAM"],
    release_date: new Date("2022-10-07"),

    foldable: false,

    cpu: { single: 2259, multi: 5534 },
    gpu: 1028,
    battery_time: 9 * 60 + 23,
    brand: Brand.Apple,
    camera: CameraLens.MACRO,
    display: 0.7,
    price: 97,
    ram: 6,
    size: 6.7,
    storage: 128,
    weight: 203
});
