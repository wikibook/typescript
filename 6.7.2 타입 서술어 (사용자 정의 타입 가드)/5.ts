function assertHuman(value: any): asserts value is Human {
  // 프로퍼티에 접근할 수 없을 가능성을 배제
  if (value == null) {
    throw new Error('Given value is null or undefined');
  }
  // 3개의 프로퍼티의 타입을 판정
  if (
    value.type !== "Human" ||
    typeof value.name !== "string" ||
    typeof value.age !== "number"
  ) {
    throw new Error('Given value is not a Human');
  }
}
