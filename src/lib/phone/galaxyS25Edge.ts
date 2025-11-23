import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyS25Edge = new Smartphone({
    name: "갤럭시 S25 Edge",
    description: "초슬림 엣지 디자인과 AI 기능",
    image: null,
    specs: ["Snapdragon 8 Elite 칩셋", "12GB RAM"],
    release_date: new Date("2025-01-22"),

    cpu: {single: 2745, multi: 9320},
    gpu: 1875,
    battery_time: 10 * 60 + 42,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.71,
    price: 124.9,
    ram: 12,
    size: 6.3,
    storage: 256,
    weight: 168
})