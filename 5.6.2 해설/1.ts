class User {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("이름은 비워둘 수 없습니다!");
    }
    this.name = name;
    this.age = age;
  }

  getMessage(message: string): string {
    return `${this.name} (${this.age}) '${message}'`;
  }
}
