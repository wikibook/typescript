type MyFunc = {
  isUsed?: boolean;
  (arg: number): void;
};

const double: MyFunc = (arg: number) => {
  console.log(arg * 2)
};

// double은 isUsed 프로퍼티를 지닌다
double.isUsed = true;
console.log(double.isUsed);
// double은 함수로서 호출할 수 있다
double(1000);
