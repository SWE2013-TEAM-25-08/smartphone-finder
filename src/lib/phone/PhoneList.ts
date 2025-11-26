import { galaxyA15LTE } from "$lib/phone/galaxyA15LTE";
import { galaxyA16LTE } from "$lib/phone/galaxyA16LTE";
import { galaxyA17LTE } from "$lib/phone/galaxyA17LTE";
import { galaxyA35 } from "$lib/phone/galaxyA35";
import { galaxyA36 } from "$lib/phone/galaxyA36";
import { galaxyS24Fe } from "$lib/phone/galaxyS24Fe";
import { galaxyS24Plus } from "$lib/phone/galaxyS24Plus";
import { galaxyS25 } from "$lib/phone/galaxyS25";
import { galaxyS25Edge } from "$lib/phone/galaxyS25Edge";
import { galaxyS25Fe } from "$lib/phone/galaxyS25Fe";
import { galaxyS25Plus } from "$lib/phone/galaxyS25Plus";
import { galaxyS25Ultra } from "$lib/phone/galaxyS25Ultra";
import { galaxyZflip6 } from "$lib/phone/galaxyZflip6";
import { galaxyZflip7 } from "$lib/phone/galaxyZflip7";
import { galaxyZfold7 } from "$lib/phone/galaxyZfold7";

import { iPhone14 } from "$lib/phone/iPhone14";
import { iPhone14Plus } from "$lib/phone/iPhone14Plus";
import { iPhone14Pro } from "$lib/phone/iPhone14Pro";
import { iPhone14ProMax } from "$lib/phone/iPhone14ProMax";
import { iPhone15 } from "$lib/phone/iPhone15";
import { iPhone15Plus } from "$lib/phone/iPhone15Plus";
import { iPhone15Pro } from "$lib/phone/iPhone15Pro";
import { iPhone15ProMax } from "$lib/phone/iPhone15ProMax";
import { iPhone16 } from "$lib/phone/iPhone16";
import { iPhone16Plus } from "$lib/phone/iPhone16Plus";
import { iPhone16Pro } from "$lib/phone/iPhone16Pro";
import { iPhone16ProMax } from "$lib/phone/iPhone16ProMax";
import { iPhone16e } from "$lib/phone/iPhone16e";
import { iPhone17 } from "$lib/phone/iPhone17";
import { iPhone17Pro } from "$lib/phone/iPhone17Pro";
import { iPhone17ProMax } from "$lib/phone/iPhone17ProMax";

import type { Smartphone } from "$lib/types/Smartphone";

export const phoneList: Smartphone[] = [
        galaxyA15LTE, galaxyA16LTE, galaxyA17LTE,
        galaxyA35, galaxyA36,
        galaxyS24Fe, galaxyS24Plus,
        galaxyS25, galaxyS25Edge, galaxyS25Fe, galaxyS25Plus, galaxyS25Ultra,
        galaxyZflip6, galaxyZflip7, galaxyZfold7,

        iPhone14, iPhone14Plus, iPhone14Pro, iPhone14ProMax,
        iPhone15, iPhone15Plus, iPhone15Pro, iPhone15ProMax,
        iPhone16, iPhone16Plus, iPhone16Pro, iPhone16ProMax, iPhone16e,
        iPhone17, iPhone17Pro, iPhone17ProMax,
    ]
    .sort((a: Smartphone, b: Smartphone) => {
        let time = b.release_date.getTime() - a.release_date.getTime()
        return time != 0 ? time : a.price - b.price
    })