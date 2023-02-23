type Human = {
  type: "Human";
  name: string;
  age: number;
};

function isPropertyAccessible(value: unknown): value is { [key: string]: unknown } {
  return value != null;
}

function isHuman(value: unknown): value is Human {
  // 프로퍼티에 접근할 수 없을 가능성을 배제
  if (!isPropertyAccessible(value)) return false;
  // 3개의 프로퍼티의 타입을 판정
  return (
    value.type === "Human" &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}
