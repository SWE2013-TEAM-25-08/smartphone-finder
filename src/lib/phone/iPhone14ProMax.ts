import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let iPhone14ProMax = new Smartphone({
    name: "아이폰 14 프로 맥스",
    description: "더 큰 화면과 배터리를 갖춘 프로급 플래그십",
    image: null,
    specs: ["Apple A16 Bionic 칩셋", "6GB RAM"],
    release_date: new Date("2022-09-16"),

    cpu: { single: 2550, multi: 6700 },
    gpu: 27200,
    battery_time: 29 * 60, // 동영상 재생 최대 29시간 기준
    brand: Brand.Apple,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.85,
    price: 196,
    ram: 6,
    size: 6.7,
    storage: 128,
    weight: 240
});
