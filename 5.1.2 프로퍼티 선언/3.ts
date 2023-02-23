class User {
  name?: string;
  age: number = 0;
}

const uhyo = new User();
console.log(uhyo.name); // undefined가 출력된다
uhyo.name = "うひょ";
console.log(uhyo.name); // "Uhyo"가 출력된다
