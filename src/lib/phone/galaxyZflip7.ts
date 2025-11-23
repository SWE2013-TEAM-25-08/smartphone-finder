import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyZflip7 = new Smartphone({
    name: "갤럭시 Z Flip 7",
    description: "세련된 폴더블과 강력한 성능",
    image: null,
    specs: ["Snapdragon 8 Gen 4 칩셋", "12GB RAM"],
    release_date: new Date("2025-07-10"),

    cpu: {single: 2750, multi: 8850},
    gpu: 1950,
    battery_time: 9 * 60 + 32,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO,
    display: 0.68,
    price: 139.9,
    ram: 12,
    size: 6.7,
    storage: 256,
    weight: 185
})