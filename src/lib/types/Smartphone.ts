import type {Table} from "$lib/types/Table";
import {CameraLens} from "$lib/enum/CameraLens";
import {Brand} from "$lib/enum/Brand";
import {linear, normalize, easeInOutQuad, easeOutQuad, easeInExpo, priceCurve} from "$lib/utils/converter";

export interface SmartphoneData {
    readonly cpu: {
        single: number
        multi: number
    }
    readonly gpu: number
    readonly ram: number
    readonly display: number
    readonly battery_time: number
    readonly storage: number
    readonly size: number
    readonly weight: number
    readonly camera: CameraLens
    readonly brand: Brand
    readonly price: number
}
export class Smartphone implements SmartphoneData {

    readonly cpu!: {                // GeekBench 6 점수 (싱글코어 70%, 멀티코어 30%)
        single: number              // 싱글코어 70% (min = 500, max = 4000)
        multi: number               // 멀티코어 30% (min = 2000, max = 10000)
    }
    readonly gpu!: number           // GFXbench 프레임 점수 (min = 500, max = 2000)
    readonly ram!: number           // 물리 RAM 용량 (min: 4, max: 16)
    readonly display!: number       // 디스플레이 평가 (min: -1, max: 1)
    readonly battery_time!: number  // 배터리 실사용 시간 (min: 4, max: 15)
    readonly storage!: number       // 물리 저장 공간 (min: 128GB, max: 1TB = 1024GB)
    readonly size!: number          // 화면 크기 inch (사용자 희망 크기에 가까우면 1점, 벗어날수록 감점)
    readonly weight!: number        // 무게 (min: 160, max: 250, 무거울수록 가파른 감점)
    readonly camera!: CameraLens    // 근접·망원 렌즈 여부 (각 렌즈 비중 50%씩, 렌즈가 있거나 사용자가 렌즈가 필요 없다고 답할 시 점수 부여)
    readonly brand!: Brand          // 브랜드 선호도 (min: -1, max: 1)
    readonly price!: number         // 가격 (min: -1, max: 1, 범위 내 가격일 때 1점, 초과 시 가파른 감점, 미만 시 완만한 감점)

    constructor(data: SmartphoneData) {
        Object.assign(this, data);
    }


    public getScore(table: Table): number {
        let score = 0

        // CPU & GPU
        score += table.cpu * easeOutQuad(normalize(this.cpu.single, 500, 4000) * 0.7 + normalize(this.cpu.multi, 2000, 10000) * 0.3)
        score += table.gpu * linear(normalize(this.gpu, 500, 2000), 1, 0)

        // RAM
        score += table.ram * easeInOutQuad(normalize(this.ram, 4, 16))

        // Display
        score += table.display * linear(normalize(this.display, -1, 1), 1, 0)

        // Battery
        score += table.battery_time * linear(normalize(this.battery_time, 4 * 60, 15 * 60), 1, 0)

        // Storage
        score += table.storage * (this.storage <= 128 ? -1 : this.storage <= 256 ? 0 : this.storage <= 512 ? 0.5 : 1)

        // Size & Weight
        let size = normalize(this.size - table.size.inch, -2, 2)
        score += table.size.weight * (1 - 2 * size * size)
        score += table.weight * -easeInExpo(normalize(this.weight, 160, 250))

        // Camera
        let macro = ((this.camera & CameraLens.MACRO) != 0 || !table.camera.macro) ? 1 : 0
        let telephoto = ((this.camera & CameraLens.TELEPHOTO) != 0 || !table.camera.telephoto) ? 1 : 0
        score += table.camera.weight * normalize(macro + telephoto, 0, 2)

        // Brand
        score += this.brand == Brand.Apple ? table.brand.apple : this.brand == Brand.Samsung ? table.brand.samsung : 0

        // Price
        let price = (table.price.range[0] <= this.price && this.price <= table.price.range[1]) ? 0 : (table.price.range[1] < this.price) ? (this.price - table.price.range[1]) : (this.price - table.price.range[0])
        score += table.price.weight * priceCurve(normalize(price, -20, 20))

        return score
    }
}