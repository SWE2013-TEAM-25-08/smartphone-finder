import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone14ProMax = new Smartphone({
    link: "iphone-14-promax",

    name: "아이폰 14 프로 맥스",
    description: "더 큰 화면과 배터리를 갖춘 프로급 플래그십",
    image: null,
    specs: ["Apple A16 Bionic 칩셋", "6GB RAM"],
    release_date: new Date("2022-09-16"),

    foldable: false,

    cpu: { single: 2550, multi: 6700 },
    gpu: 1084,
    battery_time: 9 * 60 + 31,
    brand: Brand.Apple,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.85,
    price: 196,
    ram: 6,
    size: 6.7,
    storage: 128,
    weight: 240
});
