type Human = {
  name: string;
  age?: number;
};

const john: Human = {
  name: "John Smith",
  // exactOptionalPropertyTypes가 켜져 있을 경우 여기서 컴파일 에러 발생
  // 에러: Type 'undefined' is not assignable to type 'number'.
  age: undefined
};
