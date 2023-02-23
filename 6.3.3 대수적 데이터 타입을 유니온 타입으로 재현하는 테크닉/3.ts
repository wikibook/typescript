function getUserName(user: User) {
  if (user.tag === "human") {
    // 여기에서 user는 Human 타입
    return user.name;
  } else {
    // 여기에서 user는 Animal 타입
    return "이름 없음";
  }
}

const nabi: User = {
  tag: "animal",
  species: "Felis silvestris catus"
};
const uhyo: User = {
  tag: "human",
  name: "uhyo",
};

console.log(getUserName(nabi)); // "이름 없음"이라고 출력된다
console.log(getUserName(uhyo)); // "uhyo"라고 출력된다
