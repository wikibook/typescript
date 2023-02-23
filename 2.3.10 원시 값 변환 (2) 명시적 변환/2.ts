const num1 = Number(true);
console.log(num1); // 1이라고 출력된다

const num2 = Number(false);
console.log(num2); // 0이라고 출력된다

const num3 = Number(null);
console.log(num3); // 0이라고 출력된다

const num4 = Number(undefined);
console.log(num4); // NaN이라고 출력된다