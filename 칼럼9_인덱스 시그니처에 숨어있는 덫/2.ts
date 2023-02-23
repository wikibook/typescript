const propName: string = "foo";
// obj는 { [x: string}: number } 타입
const obj = {
  [propName]: 123
};
console.log(obj.foo); // 123이라고 출력된다
