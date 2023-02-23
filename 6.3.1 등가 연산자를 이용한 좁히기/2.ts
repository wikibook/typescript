function numberWithSign2(num: number, type: SignType | "none") {
  if (type === "none") {
    // 여기에서 type은 "none" 타입
    return 0;
  }

  // 여기에서 type은 SignType 타입
  return num * signNumber(type);
}

function numberWithSign3(num: number, type: SignType | "none") {
  return type === "none" ? 0 : num * signNumber(type);
}

console.log(numberWithSign2(5, "minus")); // -5라고 출력된다
console.log(numberWithSign3(3, "plus")); // 3이라고 출력된다
