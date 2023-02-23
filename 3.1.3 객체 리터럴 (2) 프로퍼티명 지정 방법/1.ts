const obj = {
  foo: 123,
  "foo bar": -500,
  "↑↓↑↓": "",
};

console.log(obj.foo); // 123이라고 출력된다
console.log(obj["foo bar"]); // -500이라고 출력된다
