class User {
  name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    // 여기는 OK
    this.age = age;
  }

  setAge(newAge: number) {
    // 에러: Cannot assign to 'age' because it is a read-only property.
    this.age = newAge;
  }
}

const uhyo = new User("uhyo", 26);
// 에러: Cannot assign to 'age' because it is a read-only property.
uhyo.age = 27;