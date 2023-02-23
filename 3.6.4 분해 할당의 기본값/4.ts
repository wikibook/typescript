type Obj = { foo?: number };
const obj1: Obj = {};
// foo는 number 타입
const { foo = 500 } = obj1;
