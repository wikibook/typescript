// User의 인스턴스를 두 개 만든다
const uhyo = new User();
const baby = new User();

uhyo.age = 26;

console.log(uhyo.isAdult()); // true가 출력된다
console.log(baby.isAdult()); // false가 출력된다
