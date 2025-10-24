
// 점수 정규화를 위한 함수


/**
 * 주어진 값을 범위를 기준으로 [-1, 1] 값으로 정규화
 */
export const normalize = (x: number, min: number = 0, max: number): number => x <= min? -1 : ( x >= max? 1 : 2 * ((x - min) / (max - min)) - 1)

/**
 * 선형 함수
 */
export const linear = (x: number, a: number, b: number): number => x * a + b


// ------------

// 점수 보정을 위한 함수 ([-1, 1] 범위로 확장)
// https://easings.net/ko

// 이미지 출처: https://github.com/asweigart/pytweening

/**
 * ![이미지](https://raw.githubusercontent.com/asweigart/pytweening/master/docs/tweenGraphEaseoutquad.png)
 */
export const easeOutQuad = (x: number): number => 1 - (x - 1) * (x - 1) / 2

/**
 * ![이미지](https://raw.githubusercontent.com/asweigart/pytweening/master/docs/tweenGraphEaseinoutquad.png)
 */
export const easeInOutQuad = (x: number): number => x >= 0? x * (2 - x) : x * (x + 2)

/**
 * ![이미지](https://raw.githubusercontent.com/asweigart/pytweening/master/docs/tweenGraphEaseinexpo.png)
 */
export const easeInExpo = (x: number): number => 2 ** (6 * x - 5) - 1

// ------------

/**
 * 가격 점수를 위한 Ad-Hoc 함수
 */
export const priceCurve = (x: number): number => x >= 0? 1 - 2 * x * x : 1 - 0.25 * x * x