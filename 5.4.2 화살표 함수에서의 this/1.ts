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

  public filterOlder(users: readonly User[]): User[] {
    return users.filter(u => u.#age > this.#age);
  }
}

const uhyo = new User("uhyo", 25);
const john = new User("John Smith", 15);
const bob = new User("Bob", 40);

const older = uhyo.filterOlder([john, bob]);
// [ User { name: "Bob" } ]라고 출력된다
console.log(older);