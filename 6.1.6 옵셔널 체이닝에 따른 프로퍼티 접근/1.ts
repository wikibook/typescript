type Human = {
  name: string;
  age: number;
};

function useMaybeHuman(human: Human | undefined) {
  // age는 number | undefined 타입
  const age = human?.age;
  console.log(age);
}
