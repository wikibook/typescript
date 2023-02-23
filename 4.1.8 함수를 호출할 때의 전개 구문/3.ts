const sum3 = (a: number, b: number, c: number) => a + b + c;

const nums: [number, number, number] = [1, 2, 3];
console.log(sum3(...nums)); // 6이라고 출력된다