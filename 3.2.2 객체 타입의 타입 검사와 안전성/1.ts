const obj: {
  foo: number;
  bar: string;
} = {
  foo: 123,
  // 에러: Type 'boolean' is not assignable to type 'string'.
  bar: true,
};