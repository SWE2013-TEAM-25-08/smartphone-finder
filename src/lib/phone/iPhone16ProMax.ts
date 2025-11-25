import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone16ProMax = new Smartphone({
    link: "iphone-16-pro-max",

    name: "아이폰 16 프로 맥스",
    description: "가장 큰 디스플레이와 배터리를 갖춘 아이폰 16 최상위 프로 모델",
    image: "/phone_img/iPhone16ProMax.png",
    specs: ["Apple A18 Pro 칩셋", "8GB RAM"],
    release_date: new Date("2024-09-20"),

    foldable: false,

    cpu: { single: 3480, multi: 8568 },
    gpu: 1500,
    battery_time: 11 * 60 + 30,
    brand: Brand.Apple,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.9,
    price: 179,
    ram: 8,
    size: 6.9,
    storage: 256,
    weight: 225
});
