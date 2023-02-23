class user {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    // 에러: Property 'age' is used before being assigned.
    console.log(this.age);
    this.name = name;
    this.age = age;
    // 여기는 this.age에 값이 대입된 뒤이므로 OK
    console.log(this.age);
  }
}
