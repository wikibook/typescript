const User = class {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }
};
// User는 지금까지와 동일하게 사용할 수 있다
const uhyo = new User("uhyo", 26);
console.log(uhyo.name);      // "uhyo"가 출력된다
console.log(uhyo.isAdult()); // true가 출력된다
