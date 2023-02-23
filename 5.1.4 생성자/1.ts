class User {
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

const uhyo = new User("uhyo", 26);
console.log(uhyo.name);      // "uhyo"가 출력된다
console.log(uhyo.isAdult()); // true가 출력된다
