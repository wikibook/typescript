type User = { name: string; age: number };
const getName = (u: User): string => {
  console.log("u is", u);
  return u.name;
};
const users: User[] = [
  { name: "uhyo", age: 26 },
  { name: "John Smith", age: 15 }
];

const names = users.map(getName);
console.log(names); // ["uhyo", "John Smith"]라고 출력된다