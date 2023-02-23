// FooBarObj를 선언하기 전에 사용해도 OK
const obj: FooBarObj = {
  foo: 123,
  bar: "Hello, world!"
};
type FooBarObj = {
  foo: number;
  bar: string;
};
