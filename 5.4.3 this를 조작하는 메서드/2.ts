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

// this가 uhyo로 고정된 isAdult
const boundIsAdult = uhyo.isAdult.bind(uhyo);

console.log(boundIsAdult()); // true가 출력된다
console.log(boundIsAdult.call(john)); // true가 출력된다
