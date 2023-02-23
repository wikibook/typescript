// 여기는 OK
let val: {} = 123;
val = "foobar";
val = { num: 1234 };
// 여기는 컴파일 에러
val = null;
// 여기도 컴파일 에러
val = undefined;
