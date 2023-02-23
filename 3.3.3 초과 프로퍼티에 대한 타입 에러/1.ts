type User = { name: string; age: number };
const u: User = {
  name: "uhyo",
  age: 26,
  // 에러: Type '{ name: string; age: number; telNumber: string; }' is not assignable to type 'User'.
  //   Object literal may only specify known properties, and 'telNumber' does not exist in type 'User'.
  telNumber: "09012345678"
};