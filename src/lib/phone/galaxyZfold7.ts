import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyZfold7 = new Smartphone({
    link: "galaxy-zfold-7",

    name: "갤럭시 Z Fold 7",
    description: "대화면 폴더블과 최고 성능",
    image: "/phone_img/galaxyZfold7.png",
    specs: ["Snapdragon 8 Gen 4 칩셋", "16GB RAM"],
    release_date: new Date("2025-07-10"),

    foldable: true,

    cpu: {single: 2785, multi: 8920},
    gpu: 1972,
    battery_time: 11 * 60 + 25,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.82,
    price: 209.9,
    ram: 16,
    size: 7.6,
    storage: 512,
    weight: 239
})