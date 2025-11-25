import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyA36 = new Smartphone({
    link: "galaxy-a36",

    name: "갤럭시 A36",
    description: "강력한 성능과 선명한 화면",
    image: "/phone_img/galaxyA36.png",
    specs: ["Snapdragon 7 Gen 1 칩셋", "8GB RAM"],
    release_date: new Date("2024-12-13"),

    foldable: false,

    cpu: {single: 1150, multi: 3200},
    gpu: 1620,
    battery_time: 10 * 60 + 28,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO,
    display: 0.42,
    price: 59.9,
    ram: 8,
    size: 6.6,
    storage: 128,
    weight: 207
})