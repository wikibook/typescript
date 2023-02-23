type Fruit = "apple" | "orange" | "strawberry";

// FruitNumbers는 {
//     apple: number;
//     orange: number;
//     strawberry: number;
// } 타입
type FruitNumbers = {
  [P in Fruit]: number
};

const numbers: FruitNumbers = {
  apple: 3,
  orange: 10,
  strawberry: 20
};
