type FooBar = {
  foo: string;
  bar: number;
}
type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
}

const obj: FooBarBaz = {
  foo: "hi",
  bar: 1,
  baz: false
};
const obj2: FooBar = obj;