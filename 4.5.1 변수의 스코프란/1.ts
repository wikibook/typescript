const repeat = function<T>(element: T, length: number): T[] {
  // 이 변수 result는 repeat의 변수 스코프에 속한다
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

// 함수 바깥에는 변수 result가 존재하지 않는다
// 에러: Cannot find name 'result'.
console.log(result);
