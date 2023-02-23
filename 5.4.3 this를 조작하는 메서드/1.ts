class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

const uhyo = new User("uhyo", 25);
const john = new User("John Smith", 15);

console.log(uhyo.isAdult()); // true가 출력된다

// uhyo.isAdult 함수를 호출하고, john을 this로 삼는다
console.log(uhyo.isAdult.apply(john, [])); // false가 출력된다
