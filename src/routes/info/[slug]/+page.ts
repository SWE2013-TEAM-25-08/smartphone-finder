import {error} from '@sveltejs/kit'
import {phoneList} from "$lib/phone/PhoneList";
import type {Smartphone} from "$lib/types/Smartphone";

export const load = async ({ params : { slug }}) => {
    let find = phoneList.find((phone: Smartphone) => phone.link == slug)
    if (find === undefined) throw error(404)
    return {
        phone: find
    }
}