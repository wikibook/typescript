class User {
  name: string = "";
  age: number = 0;
}

type MyUserConstructor = new () => User;

// User는 MyUserConstructor 타입
const MyUser: MyUserConstructor = User;
// MyUser는 new에 사용할 수 있다
const u = new MyUser();
// u는 User 타입
console.log(u.name, u.age);
