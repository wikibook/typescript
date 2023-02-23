class User {
  name: string;
  private age: number;
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