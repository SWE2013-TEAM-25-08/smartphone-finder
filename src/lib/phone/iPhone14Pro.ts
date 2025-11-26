import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone14Pro = new Smartphone({
    link: "iphone-14-pro",

    name: "아이폰 14 프로",
    description: "프로급 카메라와 향상된 성능의 플래그십 모델",
    image: "/phone_img/iPhone14Pro.png",
    specs: ["Apple A16 Bionic 칩셋", "6GB RAM"],
    release_date: new Date("2022-09-16"),

    foldable: false,

    cpu: { single: 2550, multi: 6700 },
    gpu: 1089,
    battery_time: 7 * 60 + 49,
    brand: Brand.Apple,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.8,
    price: 159,
    ram: 6,
    size: 6.1,
    storage: 128,
    weight: 206
});
