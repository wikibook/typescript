const sum = (base: number, ...args: number[]): number => {
  let result = base * 1000;
  for (const num of args) {
    result += num;
  }
  return result;
}

console.log(sum(1, 10, 100)); // 1110라고 출력된다
console.log(sum(123, 456));   // 123456이라고 출력된다
// 에러: Expected at least 1 arguments, but got 0.
console.log(sum());
