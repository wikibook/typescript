class User {
  name: string;
  protected age: number;
  private _isAdult: boolean;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this._isAdult = age >= 20;
  }

  public isAdult(): boolean {
    return this._isAdult;
  }
}

class PremiumUser extends User {
  // 프리미엄 사용자는 자신의 나이를 수정할 수 있다
  public setAge(newAge: number) {
    this.age = newAge;
  }
}

const uhyo = new PremiumUser("uhyo", 26);
console.log(uhyo.isAdult()); // true가 출력된다

uhyo.setAge(15);
console.log(uhyo.isAdult()); // true가 출력된다
