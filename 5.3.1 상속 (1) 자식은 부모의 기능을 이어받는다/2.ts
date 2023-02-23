function getMessage(u: User) {
  return `${u.name}님, 안녕하세요`;
}

const john = new User("John Smith", 15);
const uhyo = new PremiumUser("uhyo", 26);

console.log(getMessage(john)); // "John Smith님, 안녕하세요"라고 출력된다
console.log(getMessage(uhyo)); // "uhyo님, 안녕하세요"라고 출력된다
