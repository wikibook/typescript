type Human = {
  height: number;
  weight: number;
};
const calcBMI = function({ height, weight }: Human): number {
  return weight / height ** 2;
};
const uhyo: Human = { height: 1.84, weight: 72 };
// 21.266540642722116이라고 출력된다
console.log(calcBMI(uhyo));