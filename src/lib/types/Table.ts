export type Table = {
    cpu: number
    gpu: number
    ram: number
    display: number
    battery_time: number
    storage: number
    size: {
        inch: number
        weight: number
    }
    weight: number
    camera: {
        macro: boolean
        telephoto: boolean
        weight: number
    }
    brand: {
        apple: number
        samsung: number
    }
    price: {
        range: number[]
        weight: number
    }
}