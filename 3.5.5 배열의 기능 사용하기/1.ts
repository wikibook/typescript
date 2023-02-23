const arr = [1, 10, 100];
arr.push(1000);
console.log(arr); // [1, 10, 100, 1000]라고 출력된다

// 여기는 컴파일 에러:
// Argument of type '"foobar"' is not assignable to parameter of type 'number'.
arr.push("foobar");