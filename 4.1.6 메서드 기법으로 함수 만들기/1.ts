const obj = {
  // 메서드 기법
  double(num: number): number {
    return num * 2;
  },
  // 통상적인 기법 + 화살표 함수
  double2: (num: number): number => num * 2,
};

console.log(obj.double(100));  // 200이라고 출력된다
console.log(obj.double2(-50)); // -100이라고 출력된다
