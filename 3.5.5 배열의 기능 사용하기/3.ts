const arr = [1, 10, 100];
console.log(arr.includes(100)); // true라고 출력된다
console.log(arr.includes(50));  // false라고 출력된다

// 여기는 컴파일 에러:
// Argument of type '"foobar"' is not assignable to parameter of type 'number'.
console.log(arr.includes("foobar"));