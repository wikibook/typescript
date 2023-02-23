function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}

console.log(signNumber("plus")); // 1이라고 출력된다
console.log(signNumber("minus")); // -1이라고 출력된다
// 에러: Argument of type '"uhyo"' is not assignable to parameter of type '"plus" | "minus"'.
console.log(signNumber("uhyo"));