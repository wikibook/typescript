function showNumberIfExists(obj: Option<number>) {
  if (isSome(obj)) {
    // 컴파일 에러가 발생하지 않는다!
    console.log(obj.value);
  }
}