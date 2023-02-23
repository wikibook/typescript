const uhyo: Human = { height: 1.84, weight: 72 };
// 에러: Block-scoped variable 'calcBMI' used before its declaration.
console.log(calcBMI(uhyo));

type Human = {
  height: number;
  weight: number;
};
const calcBMI = function({
  height, weight
}: Human): number {
  return weight / height ** 2;
};