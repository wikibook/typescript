type PriceData = {
  [key: string]: number;
}
const data: PriceData = {
  apple: 220,
  coffee: 120,
  bento: 500
};
// 여기는 OK
data.chicken = 250;
// 여기는 컴파일 에러: Type '"foo"' is not assignable to type 'number'.
data.점심 = "foo";
