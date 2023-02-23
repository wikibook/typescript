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

class PremiumUser extends User {
  rank: number = 1;

  // 여기에서 isAdult를 다시 선언
  public isAdult(): boolean {
    return true;
  }
}

const john = new User("John Smith", 15);
const taro = new PremiumUser("Hong gildong", 15);

console.log(john.isAdult()); // false가 출력된다
console.log(taro.isAdult()); // true가 출력된다
