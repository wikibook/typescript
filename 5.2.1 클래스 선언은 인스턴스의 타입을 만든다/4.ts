const User = class {
  name: string = "";
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 20;
  }
};

// 여기는 OK
const uhyo = new User();
// 에러: 'User' refers to a value, but is being used as a type here. Did you mean 'typeof User'?
const john: User = new User();