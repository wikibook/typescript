const sum3 = (a: number, b: number, c: number) => a + b + c;

const nums = [1, 2, 3];
// 에러: A spread argument must either have a tuple type or be passed to a rest parameter.
console.log(sum3(...nums));