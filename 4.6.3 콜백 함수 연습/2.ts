const data = [1, -3, -2, 8, 0, -1];

const result: boolean[] = map(data, (x) => x >= 0);
// [true, false, false, true, true, false]라고 출력된다
console.log(result);