function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === "string" || typeof value === "number";
}

const something: unknown = 123;

if (isStringOrNumber(something)) {
  // 여기서 something은 string | number 타입
  console.log(something.toString());
}
