// T는 {
//   age: number;
// }
type T = Pick<{
  name: string;
  age: number;
}, "age">;
