class User {
  name: string = "";
  age: number = 0;
}

const uhyo = new User();
console.log(uhyo.name); // ""이 출력된다
console.log(uhyo.age); // 0이 출력된다

uhyo.age = 26;
console.log(uhyo.age); // 26이 출력된다
