import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone17ProMax = new Smartphone({
    link: "iphone-17-promax",

    name: "아이폰 17 프로맥스",
    description: "성능을 뽐내는 새로운 후면 디자인",
    image: null,
    specs: ["A19 Pro 칩셋", "12GB RAM"],
    release_date: new Date("2025-09-19"),

    foldable: false,

    cpu: {single: 3755, multi: 9707},
    gpu: 1986,
    battery_time: 13 * 60 + 5,
    brand: Brand.Apple,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.9,
    price: 199,
    ram: 12,
    size: 6.9,
    storage: 256,
    weight: 231
})