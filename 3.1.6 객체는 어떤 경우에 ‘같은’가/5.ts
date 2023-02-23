const foo = { num: 1234 };
const bar = foo;
const baz = { num: 1234 };

console.log(foo === bar); // true라고 출력된다
console.log(foo === baz); // false라고 출력된다