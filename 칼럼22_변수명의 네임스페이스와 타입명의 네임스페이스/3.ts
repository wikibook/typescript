// 타입명 네임스페이스에 Item을 만든다
type Item = {
  name: string;
  price: number;
}
// 변수명 네임스페이스에 Item을 만든다
const Item: Item = {
  name: "사과",
  price: 200
};
// 이 Item은 타입명 Item
const orange: Item = {
  name: "오렌지",
  price: 150
};
// 이 Item은 변수명 Item
console.log(Item);
