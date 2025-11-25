import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyS25Plus = new Smartphone({
    link: "galaxy-s25-plus",

    name: "갤럭시 S25+",
    description: "강력한 칩셋과 뛰어난 AI",
    image: "/phone_img/galaxyS25Plus.png",
    specs: ["Snapdragon 8 Elite 칩셋", "12GB RAM"],
    release_date: new Date("2025-01-22"),

    cpu: {single: 2841, multi: 9447},
    gpu: 1939,
    battery_time: 10 * 60 + 31,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.75,
    price: 135.3,
    ram: 12,
    size: 6.7,
    storage: 256,
    weight: 190
})