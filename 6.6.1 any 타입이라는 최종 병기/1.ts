function doWhatever(obj: any) {
  // 원하는 프로퍼티에 접근할 수 있다
  console.log(obj.user.name);
  // 함수 호출도 할 수 있다
  obj();
  // 계산도 할 수 있다
  const result = obj * 10;
  return result;
}
