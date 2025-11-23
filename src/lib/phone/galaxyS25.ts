import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyS25 = new Smartphone({
    link: "galaxy-s25",

    name: "갤럭시 S25",
    description: "강력한 칩셋과 뛰어난 AI",
    image: null,
    specs: ["Snapdragon 8 Elite 칩셋", "8GB RAM"],
    release_date: new Date("2025-01-22"),

    cpu: {single: 2712, multi: 9245},
    gpu: 1850,
    battery_time: 10 * 60 + 36,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.7,
    price: 115.5,
    ram: 12,
    size: 6.2,
    storage: 256,
    weight: 162
})