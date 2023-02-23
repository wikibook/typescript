// T는 {
//   name?: string | undefined;
//   age?: number | undefined;
// }
type T = Partial<{
  name: string;
  age: number;
}>
