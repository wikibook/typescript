type HasName = { name: string };
type HasNameAndAge = { name: string; age: number };
type Obj = {
  func: (arg: HasName) => string;
  method(arg: HasName): string;
}

const something: Obj = {
  func: user => user.name,
  method: user => user.name,
}

const getAge = (user: HasNameAndAge) => String(user.age);

// 에러: Type '(user: HasNameAndAge) => string' is not assignable to type '(arg: HasName) => string'.
something.func = getAge;
// 여기는 에러가 발생하지 않는다
something.method = getAge;
