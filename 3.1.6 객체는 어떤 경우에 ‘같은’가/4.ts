const foo = { obj: { num: 1234 } };
const bar = { ...foo };
bar.obj.num = 0;
console.log(foo.obj.num); // 0이라고 출력된다