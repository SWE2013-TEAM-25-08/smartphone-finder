import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyS24Plus = new Smartphone({
    link: "galaxy-s24-plus",

    name: "갤럭시 S24+",
    description: "넓은 화면과 강력한 멀티태스킹",
    image: "/phone_img/galaxyS24Plus.png",
    specs: ["Snapdragon 8 Gen 3 칩셋", "12GB RAM"],
    release_date: new Date("2024-01-24"),

    foldable: false,

    cpu: {single: 2220, multi: 6900},
    gpu: 1750,
    battery_time: 10 * 60 + 15,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.72,
    price: 119.9,
    ram: 12,
    size: 6.7,
    storage: 256,
    weight: 197
})