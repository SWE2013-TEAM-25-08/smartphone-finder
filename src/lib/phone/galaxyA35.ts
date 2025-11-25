import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyA35 = new Smartphone({
    link: "galaxy-a35",

    name: "갤럭시 A35",
    description: "고성능 프로세서와 넉넉한 용량",
    image: "/phone_img/galaxyA35.png",
    specs: ["Exynos 1380 칩셋", "6GB RAM"],
    release_date: new Date("2024-03-11"),

    cpu: {single: 1025, multi: 2950},
    gpu: 1520,
    battery_time: 10 * 60 + 12,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO,
    display: 0.35,
    price: 49.9,
    ram: 6,
    size: 6.6,
    storage: 128,
    weight: 209
})