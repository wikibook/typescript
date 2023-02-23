const tama: User = {
  tag: "animal",
  species: "Felis silvestris catus"
};
const uhyo: User = {
  tag: "human",
  name: "uhyo",
};

// 이 객체는 대입할 수 없다
const alien: User = {
  // 에러: Type '"alien"' is not assignable to type '"animal" | "human"'.
  tag: "alien",
  name: "gray"
};
