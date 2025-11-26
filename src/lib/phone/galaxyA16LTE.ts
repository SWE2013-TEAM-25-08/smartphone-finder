import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyA16LTE = new Smartphone({
    link: "galaxy-a16-lte",

    name: "갤럭시 A16 LTE",
    description: "가성비 좋은 실용형 스마트폰",
    image: "/phone_img/galaxyA16LTE.png",
    specs: ["MediaTek Helio G99 칩셋", "4GB RAM"],
    release_date: new Date("2024-07-18"),

    foldable: false,

    cpu: {single: 756, multi: 2018},
    gpu: 1562,
    battery_time: 11 * 60 + 23,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO,
    display: 0.28,
    price: 34.9,
    ram: 4,
    size: 6.5,
    storage: 128,
    weight: 202
})