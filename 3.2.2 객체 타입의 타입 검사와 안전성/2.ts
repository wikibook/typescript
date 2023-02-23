// 에러: Property 'bar' is missing in type '{ foo: number; }' but required in type '{ foo: number; bar: string; }'.
const obj: {
  foo: number;
  bar: string;
} = {
  foo: 123,
};