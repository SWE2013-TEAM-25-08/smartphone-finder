import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone16e = new Smartphone({
    link: "iphone-16-plus",

    name: "아이폰 16 플러스",
    description: "더 과감해진 색상, 프로 부럽지 않은 성능",
    image: "/phone_img/iPhone16Plus.png",
    specs: ["Apple A18 칩셋", "8GB RAM"],
    release_date: new Date("2024-09-20"),

    foldable: false,

    cpu: {single: 3402, multi: 8418},
    gpu: 1477,
    battery_time: 9 * 60 + 30,
    brand: Brand.Apple,
    camera: CameraLens.TELEPHOTO,
    display: 0.65,
    price: 124.2,
    ram: 8,
    size: 6.7,
    storage: 128,
    weight: 199
})