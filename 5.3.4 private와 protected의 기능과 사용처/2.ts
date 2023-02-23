class User {
  name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }
}

class PremiumUser extends User {
  public isAdult(): boolean {
    return this.age >= 10;
  }
}

const miniUhyo = new PremiumUser("uhyo", 15);
const john = new User("John Smith", 15);

console.log(miniUhyo.isAdult()); // true가 출력된다
console.log(john.isAdult());     // false가 출력된다

// 여기는 에러: Property 'age' is protected and only accessible within class 'User' and its subclasses.
console.log(miniUhyo.age);