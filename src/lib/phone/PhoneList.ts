import {galaxyS25} from "$lib/phone/galaxyS25";
import {galaxyS25Plus} from "$lib/phone/galaxyS25Plus";
import {galaxyS25Ultra} from "$lib/phone/galaxyS25Ultra";
import {iPhone17} from "$lib/phone/iPhone17";
import {iPhone17Pro} from "$lib/phone/iPhone17Pro";
import {iPhone17ProMax} from "$lib/phone/iPhone17ProMax";
import type {Smartphone} from "$lib/types/Smartphone";

export const phoneList = [galaxyS25, galaxyS25Plus, galaxyS25Ultra, iPhone17, iPhone17Pro, iPhone17ProMax]
    .sort((a: Smartphone, b: Smartphone) => {
        let time = b.release_date.getTime() - a.release_date.getTime()
        return time != 0 ? time : a.price - b.price
    })