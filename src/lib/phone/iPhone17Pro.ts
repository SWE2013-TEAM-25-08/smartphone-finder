import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone17Pro = new Smartphone({
    link: "iphone-17-pro",

    name: "아이폰 17 프로",
    description: "성능을 뽐내는 새로운 후면 디자인",
    image: null,
    specs: ["A19 Pro 칩셋", "12GB RAM"],
    release_date: new Date("2025-09-19"),

    cpu: {single: 3750, multi: 9708},
    gpu: 1974,
    battery_time: 11 * 60 + 53,
    brand: Brand.Apple,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.9,
    price: 179,
    ram: 12,
    size: 6.3,
    storage: 256,
    weight: 204
})