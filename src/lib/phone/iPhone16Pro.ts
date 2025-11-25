import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone16Pro = new Smartphone({
    link: "iphone-16-pro",

    name: "아이폰 16 프로",
    description: "프로급 성능과 카메라를 갖춘 아이폰 16 시리즈의 상위 모델",
    image: null,
    specs: ["Apple A18 Pro 칩셋", "8GB RAM"],
    release_date: new Date("2024-09-20"),

    foldable: false,

    cpu: { single: 3480, multi: 8568 },
    gpu: 1500,
    battery_time: 10 * 60 + 30,
    brand: Brand.Apple,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.85,
    price: 195,
    ram: 8,
    size: 6.3,
    storage: 128,
    weight: 194
});
