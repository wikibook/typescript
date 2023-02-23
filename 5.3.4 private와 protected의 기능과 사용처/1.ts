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
  public isAdult(): boolean {
    // 에러: Property '#age' is not accessible outside class 'User' because it has a private identifier.
    return this.#age >= 10;
  }
}