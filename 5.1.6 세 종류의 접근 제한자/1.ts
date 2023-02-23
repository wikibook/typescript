class User {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }
}

const uhyo = new User("uhyo", 26);
console.log(uhyo.name);      // "uhyo"가 출력된다
console.log(uhyo.isAdult()); // true가 출력된다
// 에러: Property 'age' is private and only accessible within class 'User'.
console.log(uhyo.age);
