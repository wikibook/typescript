type Fruit = "apple" | "orange" | "strawberry";

// FruitArrays는 {
//     apple: "apple"[];
//     orange: "orange"[];
//     strawberry: "strawberry"[];
// } 타입
type FruitArrays = {
  [P in Fruit]: P[]
};

const numbers: FruitArrays = {
  apple: ["apple", "apple"],
  orange: ["orange", "orange", "orange"],
  strawberry: []
};
