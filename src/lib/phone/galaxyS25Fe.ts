import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyS25Fe = new Smartphone({
    link: "galaxy-s25-fe",

    name: "갤럭시 S25 FE",
    description: "가성비 좋은 플래그십 성능",
    image: "/phone_img/galaxyS25Fe.png",
    specs: ["Exynos 2500 칩셋", "8GB RAM"],
    release_date: new Date("2025-10-10"),

    foldable: false,

    cpu: {single: 2450, multi: 7500},
    gpu: 1820,
    battery_time: 10 * 60 + 8,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.69,
    price: 84.9,
    ram: 8,
    size: 6.4,
    storage: 128,
    weight: 205
})