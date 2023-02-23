console.log(obj.baz * 1000); // 여기는 컴파일 에러

if (obj2.baz !== undefined) {
  console.log(obj2.baz * 1000); // 여기는 OK
}