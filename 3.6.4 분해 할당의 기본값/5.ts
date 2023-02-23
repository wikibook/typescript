type NestedObj = {
  obj?: {
    foo: number
  }
};
const nested1: NestedObj = {
  obj: { foo: 123 }
};
const nested2: NestedObj = {};

// 변수 foo1에는 123이 할당된다
const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
// 변수 foo2에는 500이 할당된다
const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
