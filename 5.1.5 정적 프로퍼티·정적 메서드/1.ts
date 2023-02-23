class User {
  static adminName: string = "uhyo";
  static getAdminUser() {
    return new User(User.adminName, 26);
  }

  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }
}

console.log(User.adminName);  // "uhyo"가 출력된다
const admin = User.getAdminUser();
console.log(admin.age);       // 26이 출력된다
console.log(admin.isAdult()); // true가 출력된다

const uhyo = new User("uhyo", 26);
// 에러: Property 'adminName' does not exist on type 'User'. Did you mean to access the static member 'User.adminName' instead?
console.log(uhyo.adminName);
