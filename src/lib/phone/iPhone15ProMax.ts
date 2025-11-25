import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone15ProMax = new Smartphone({
    link: "iphone-15-promax",

    name: "아이폰 15 프로 맥스",
    description: "가장 큰 디스플레이와 고급 카메라를 갖춘 아이폰 15 최상위 모델",
    image: null,
    specs: ["Apple A17 Pro 칩셋", "8GB RAM"],
    release_date: new Date("2023-09-22"),

    foldable: false,

    cpu: { single: 2980, multi: 7640 },
    gpu: 1149,
    battery_time: 11 * 60 + 41,
    brand: Brand.Apple,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.85,
    price: 164,
    ram: 8,
    size: 6.7,
    storage: 256,
    weight: 221
});
