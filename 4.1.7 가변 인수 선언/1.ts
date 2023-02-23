const sum = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

console.log(sum(1, 10, 100)); // 111이라고 출력된다
console.log(sum(123, 456));   // 579라고 출력된다
console.log(sum());           // 0이라고 출력된다