type Obj = { foo?: number };
const obj1: Obj = {};
const obj2: Obj = { foo: -1234 };

// 변수 foo에는 500이 할당된다
const { foo = 500 } = obj1;
console.log(foo);
// 변수 bar에는 -1234가 할당된다
const { foo: bar = 500 } = obj2;
console.log(bar);
