import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone17ProMax = new Smartphone({
    link: "iphone-17-pro-max",

    name: "아이폰 17 프로 맥스",
    description: "가장 큰 디스플레이와 배터리를 갖춘 아이폰 17 최상위 프로 모델",
    image: "/phone_img/iPhone17Plus.png",
    specs: ["Apple A19 Pro 칩셋", "12GB RAM"],
    release_date: new Date("2025-09-19"),

    foldable: false,

    cpu: { single: 3750, multi: 9708 },
    gpu: 1974,
    battery_time: 13 * 60, // 13시간
    brand: Brand.Apple,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.95,
    price: 199,
    ram: 12,
    size: 6.9,
    storage: 256,
    weight: 233
});
