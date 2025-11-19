import {error} from '@sveltejs/kit'
import {iPhone17} from "$lib/phone/iPhone17";
import {iPhone17Pro} from "$lib/phone/iPhone17Pro";
import {iPhone17ProMax} from "$lib/phone/iPhone17ProMax";
import {galaxyS25} from "$lib/phone/galaxyS25";
import {galaxyS25Plus} from "$lib/phone/galaxyS25Plus";
import {galaxyS25Ultra} from "$lib/phone/galaxyS25Ultra";
import type {Smartphone} from "$lib/types/Smartphone";


const  matching = {
    "iphone-17": iPhone17,
    "iphone-17-pro": iPhone17Pro,
    "iphone-17-promax": iPhone17ProMax,
    "galaxy-s25": galaxyS25,
    "galaxy-s25-plus": galaxyS25Plus,
    "galaxy-s25-ultra": galaxyS25Ultra,
}

export const load = async ({ params : { slug }}) => {
    if (!(slug in matching)) throw error(404)
    return {
        phone: matching[slug as keyof typeof matching]
    }
}