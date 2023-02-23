type Item = {
  name: string;
  price: number;
}

const apple: Item = {
  name: "사과",
  price: 200
};
// 에러: 'apple' refers to a value, but is being used as a type here. Did you mean 'typeof apple'?
const orange: apple = {
  name: "오렌지",
  price: 150
};
// 에러: 'Item' only refers to a type, but is being used as a value here.
console.log(Item);
