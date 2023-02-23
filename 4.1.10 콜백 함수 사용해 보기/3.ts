type User = { name: string; age: number };
const users: User[] = [
  { name: "uhyo", age: 26 },
  { name: "John Smith", age: 15 }
];

const names = users.map((u: User): string => u.name);
console.log(names); // ["uhyo", "John Smith"]라고 출력된다