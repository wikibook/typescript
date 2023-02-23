type Human = {
  height: number;
  weight: number;
};
type ReturnObj = {
  bmi: number
}
// 올바른 사용 방법
const calcBMIObject = ({
  height, weight
}: Human): ReturnObj => ({
  bmi: weight / height ** 2
});

// 컴파일 에러 발생
// 에러: A function whose declared type is neither 'void' nor 'any' must return a value.
const calcBMIObject2 = ({
  height, weight
}: Human): ReturnObj => {
  bmi: weight / height ** 2;
};
