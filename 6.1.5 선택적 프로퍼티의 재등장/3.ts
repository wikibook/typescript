type Human = {
  name: string;
  age: number | undefined;
};

const uhyo: Human = {
  name: "uhyo",
  age: 25
};

const john: Human = {
  name: "John Smith",
  age: undefined
};

// 에러: Property 'age' is missing in type '{ name: string; }' but required in type 'Human'.
const taro: Human = {
  name: "Taro Yamada"
};