import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyS25 = new Smartphone({
    name: "갤럭시 A15 LTE",
    description: "준수한 화면, 오래가는 배터리",
    image: null,
    specs: ["Media Tek Helio G99 칩셋", "6GB RAM"],
    release_date: new Date("2024-03-18"),

    cpu: {single: 743, multi: 2005},
    gpu: 1556,
    battery_time: 11 * 60 + 47,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO,
    display: 0.27,
    price: 31.9,
    ram: 6,
    size: 6.5,
    storage: 128,
    weight: 200
})