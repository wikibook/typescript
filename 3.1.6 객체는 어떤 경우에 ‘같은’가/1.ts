const foo = { num: 1234 };
const bar = foo;
console.log(bar.num); // 1234라고 출력된다
bar.num = 0;
console.log(foo.num); // 0이라고 출력된다