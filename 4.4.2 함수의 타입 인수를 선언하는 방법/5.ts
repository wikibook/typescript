const repeat = <T extends {
  name: string;
}>(element: T, length: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}

type HasNameAndAge = {
  name: string;
  age: number;
}

// 여기는 OK
// 출력 결과:
// [{
//   "name": "uhyo",
//   "age": 26
// }, {
//   "name": "uhyo",
//   "age": 26
// }, {
//   "name": "uhyo",
//   "age": 26
// }] 
console.log(repeat<HasNameAndAge>({
  name: "uhyo",
  age: 26,
}, 3));
// 여기는 컴파일 에러
// 에러: Type 'string' does not satisfy the constraint '{ name: string; }'.
console.log(repeat<string>("a", 5));
