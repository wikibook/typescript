class User {
  name: string;
  // 에러: Property 'age' has no initializer and is not definitely assigned in the constructor.
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
  }
}