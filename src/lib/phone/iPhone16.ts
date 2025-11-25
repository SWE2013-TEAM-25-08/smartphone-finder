import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone16 = new Smartphone({
    link: "iphone-16",

    name: "아이폰 16",
    description: "성능과 휴대성을 모두 갖춘 차세대 기본 모델",
    image: null,
    specs: ["Apple A18 칩셋", "8GB RAM"],
    release_date: new Date("2024-09-20"),

    foldable: false,

    cpu: { single: 3200, multi: 8200 },
    gpu: 30000,
    battery_time: 22 * 60, // 동영상 재생 기준 22시간 가정
    brand: Brand.Apple,
    camera: CameraLens.MACRO,
    display: 0.7,
    price: 132,
    ram: 8,
    size: 6.1,
    storage: 128,
    weight: 170
});