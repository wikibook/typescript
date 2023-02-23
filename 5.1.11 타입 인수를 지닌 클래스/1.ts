class User<T> {
  name: string;
  #age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

// uhyo는 User<string> 타입
const uhyo = new User<string>("uhyo", 26, "追加データ");
// data는 string 타입
const data = uhyo.data;

// john은 User<{ num: number; }> 타입
const john = new User("John Smith", 15, { num: 123 })
// data2는 { num: number; } 타입
const data2 = john.data;
