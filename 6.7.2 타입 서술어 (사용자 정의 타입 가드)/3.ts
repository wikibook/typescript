function isStringOrNumber(value: unknown): value is string | number {
  // 잘못 구현됐지만 에러가 발생하지 않는다!
  return typeof value === "string" || typeof value === "boolean";
}
