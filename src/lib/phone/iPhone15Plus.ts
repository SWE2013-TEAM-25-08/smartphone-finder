import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone15Plus = new Smartphone({
    link: "iphone-15-plus",

    name: "아이폰 15 플러스",
    description: "더 큰 화면과 긴 배터리를 갖춘 아이폰 15 플러스 모델",
    image: null,
    specs: ["Apple A16 Bionic 칩셋", "6GB RAM"],
    release_date: new Date("2023-09-22"),

    cpu: { single: 2550, multi: 6700 },
    gpu: 27200,
    battery_time: 26 * 60, // 동영상 재생 최대 26시간
    brand: Brand.Apple,
    camera: CameraLens.MACRO,
    display: 0.75,
    price: 137,
    ram: 6,
    size: 6.7,
    storage: 128,
    weight: 201
});
