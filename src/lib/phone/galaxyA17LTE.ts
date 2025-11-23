import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyA17LTE = new Smartphone({
    name: "갤럭시 A17 LTE",
    description: "오래가는 배터리와 기본 기능",
    image: null,
    specs: ["MediaTek Helio G99 칩셋", "6GB RAM"],
    release_date: new Date("2024-11-18"),

    cpu: {single: 762, multi: 2032},
    gpu: 1571,
    battery_time: 11 * 60 + 31,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO,
    display: 0.29,
    price: 38.9,
    ram: 6,
    size: 6.5,
    storage: 128,
    weight: 201
})