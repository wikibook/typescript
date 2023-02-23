type UnaryFunc = (arg: number) => number;
type BinaryFunc = (left: number, right: number) => number;

const double: UnaryFunc = arg => arg * 2;
const add: BinaryFunc = (left, right) => left + right;

// UnaryFunc를 BinaryFunc로 취급할 수 있다
const bin: BinaryFunc = double;
// 20이 출력된다
console.log(bin(10, 100));
