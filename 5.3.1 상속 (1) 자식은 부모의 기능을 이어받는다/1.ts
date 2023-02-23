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
}

const uhyo = new PremiumUser("uhyo", 26);
console.log(uhyo.rank);      // 1이 출력된다
console.log(uhyo.name);      // "uhyo"가 출력된다
console.log(uhyo.isAdult()); // true가 출력된다
