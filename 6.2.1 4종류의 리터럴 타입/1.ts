// "foo"라는 문자열만이 속하는 리터럴 타입
type FooString = "foo";

// 여기는 OK
const foo: FooString = "foo";

// 에러: Type '"bar"' is not assignable to type '"foo"'.
const bar: FooString = "bar";
