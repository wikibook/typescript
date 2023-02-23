// 통상적인 형태
const calcBMI = ({
  height, weight
}: Human): number => {
  return weight / height ** 2;
};

// 생략형
const calcBMI = ({
  height, weight
}: Human): number => weight / height ** 2;
