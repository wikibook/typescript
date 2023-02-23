class User {
  readonly name: string = "";
  age: number = 0;
}

const uhyo = new User();
// 에러: Cannot assign to 'name' because it is a read-only property.
uhyo.name = "うひょ";