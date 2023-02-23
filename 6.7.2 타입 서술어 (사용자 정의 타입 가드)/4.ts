type Human = {
  type: "Human";
  name: string;
  age: number;
};

function isHuman(value: any): value is Human {
  // 프로퍼티에 접근할 수 없을 가능성을 배제
  if (value == null) return false;
  // 3개의 프로퍼티의 타입을 판정
  return (
    value.type === "Human" &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}
