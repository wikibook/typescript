
const uhyo: Human & Animal = {
  name: "uhyo",
  species: "Homo sapiens sapiens"
};

// 에러 없이 호출할 수 있다!
const value = mysteryFunc(uhyo);
console.log(value);
