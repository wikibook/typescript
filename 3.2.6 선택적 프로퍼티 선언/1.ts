type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
}

const obj: MyObj  = { foo: false, bar: true };
const obj2: MyObj = { foo: true, bar: false, baz: 1234 };