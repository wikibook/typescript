const obj = {
  foo: 123,
  bar: "Hello, world!",
};
// 에러: Type 'null' is not assignable to type 'number'.
obj.foo = null;