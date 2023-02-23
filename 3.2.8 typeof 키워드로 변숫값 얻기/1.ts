const num: number = 0;
// 타입 T는 number 타입
type T = typeof num;
// foo는 number 타입 변수가 된다
const foo: T = 123;
