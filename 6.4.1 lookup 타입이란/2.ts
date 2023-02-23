type Human = {
  type: "human";
  name: string;
  age: bigint; // ← 여기를 bigint로 변경
};

function setAge(human: Human, age: Human["age"]) {
  return {
    ...human,
    age
  };
}

const uhyo: Human = {
  type: "human",
  name: "uhyo",
  age: 26n, // ← 여기를 BigInt 리터럴로 변경
};

const uhyo2 = setAge(uhyo, 27n); // ← 여기도 BigInt 리터럴로 변경
console.log(uhyo2);
