class User {
  name: string = "";
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 20;
  }
}
// 여기는 당연히 OK
const uhyo: User = new User();
// 여기도 OK!
const john: User = {
  name: "John Smith",
  age: 15,
  isAdult: () => true
};
