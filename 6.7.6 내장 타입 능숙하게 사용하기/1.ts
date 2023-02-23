// T는 {
//   readonly name: string;
//   readonly age: number;
// }
type T = Readonly<{
  name: string;
  age: number;
}>;
