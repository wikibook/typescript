const obj = {
  foo: 123,
  bar: "Hello, world!",
};
// 에러: Property 'hoge' does not exist on type '{ foo: number; bar: string; }'.
console.log(obj.hoge);