class User {
  name: string = "";
  age: number = 0;
}

const uhyo = new User();
// uhyo는 User의 인스턴스이므로 true
console.log(uhyo instanceof User);
// {}는 User의 인스턴스가 아니므로 false
console.log({} instanceof User);

const john: User = {
  name: "John Smith",
  age: 15,
};
// john은 User의 인스턴스가 아니므로 false
console.log(john instanceof User);
