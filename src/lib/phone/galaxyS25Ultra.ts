import {Smartphone} from "$lib/types/Smartphone";
import {Brand} from "$lib/enum/Brand";
import {CameraLens} from "$lib/enum/CameraLens";

export let galaxyS25Ultra = new Smartphone({
    link: "galaxy-s25-ultra",

    name: "갤럭시 S25 울트라",
    description: "강력한 칩셋과 뛰어난 AI",
    image: "/phone_img/galaxyS25Ultra.png",
    specs: ["Snapdragon 8 Elite 칩셋", "12GB RAM"],
    release_date: new Date("2025-01-22"),

    cpu: {single: 2853, multi: 9451},
    gpu: 2016,
    battery_time: 11 * 60 + 50,
    brand: Brand.Samsung,
    camera: CameraLens.MACRO | CameraLens.TELEPHOTO,
    display: 0.75,
    price: 169.84,
    ram: 12,
    size: 6.9,
    storage: 256,
    weight: 218
})