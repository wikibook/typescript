function sum(arr: number[]) {
  let result = 0;
  // 이 변수 i는 for 문의 내부 스코프에 존재한다
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  // 여기서 변수 i를 사용하면 에러가 발생한다
  // 에러: Cannot find name 'i'.
  console.log(i);
  return result;
}
