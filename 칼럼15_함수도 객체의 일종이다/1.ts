function foo(): void {}
const bar = (): void => {};

console.log(foo.name); // "foo"라고 출력된다
console.log(bar.name); // "bar"라고 출력된다