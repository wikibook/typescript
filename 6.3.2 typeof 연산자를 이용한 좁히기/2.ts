function formatNumberOrString(value: string | number) {
  if (typeof value === "number") {
    return value.toFixed(3);
  } else {
    return value;
  }
}

console.log(formatNumberOrString(3.14));   // "3.140"이라고 출력된다
console.log(formatNumberOrString("uhyo")); // "uhyo"라고 출력된다
