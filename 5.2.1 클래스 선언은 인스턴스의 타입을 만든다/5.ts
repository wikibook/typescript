class User<T> {
  name: string;
  #age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }
}

const uhyo: User<string> = new User("uhyo", 26, "추가 데이터");
