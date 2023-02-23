type SignType = "plus" | "minus";
function signNumber(type: SignType) {
  return type === "plus" ? 1 : -1;
}

function numberWithSign(num: number, type: SignType | "none") {
  if (type === "none") {
    // 여기에서 type은 "none" 타입
    return 0;
  } else {
    // 여기에서 type은 SignType 타입
    return num * signNumber(type);
  }
}

console.log(numberWithSign(5, "plus"));  // 5라고 출력된다
console.log(numberWithSign(5, "minus")); // -5라고 출력된다
console.log(numberWithSign(5, "none"));  // 0이라고 출력된다
