import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyZflip6 = new Smartphone({
    link: "galaxy-zflip-6",

    name: "갤럭시 Z Flip 6",
    description: "컴팩트한 폴더블 디자인",
    image: "/phone_img/galaxyZflip6.png",
    specs: ["Snapdragon 8 Gen 3 칩셋", "12GB RAM"],
    release_date: new Date("2024-07-10"),

    foldable: true,

    cpu: {single: 2205, multi: 6850},
    gpu: 1742,
    battery_time: 9 * 60 + 18,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO,
    display: 0.65,
    price: 129.9,
    ram: 12,
    size: 6.7,
    storage: 256,
    weight: 187
})