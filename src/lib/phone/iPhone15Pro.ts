import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone15Pro = new Smartphone({
    link: "iphone-15-pro",

    name: "아이폰 15 프로",
    description: "프로급 성능과 카메라를 갖춘 아이폰 15 시리즈의 상위 모델",
    image: null,
    specs: ["Apple A17 Pro 칩셋", "8GB RAM"],
    release_date: new Date("2023-09-22"),

    cpu: { single: 2980, multi: 7640 },
    gpu: 32000,
    battery_time: 23 * 60, // 동영상 재생 최대 23시간
    brand: Brand.Apple,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.8,
    price: 164,
    ram: 8,
    size: 6.1,
    storage: 128,
    weight: 187
});
