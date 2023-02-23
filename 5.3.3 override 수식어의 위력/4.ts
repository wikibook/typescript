class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isChild(): boolean {
    return this.#age < 20;
  }
}

class PremiumUser extends User {
  rank: number = 1;

  // 오버라이딩하려 했지만 더 이상 오버라이딩이 아니게 됐다!
  public isAdult(): boolean {
    return true;
  }
}
