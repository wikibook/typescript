const obj = {
  foo: 123,
  bar: "string",
  baz: false,
};

const { foo, ...restObj } = obj;

console.log(foo); // 123이 출력된다
console.log(restObj); // { bar: "string", baz: false }가 출력된다
