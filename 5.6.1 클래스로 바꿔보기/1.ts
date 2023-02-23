type User = {
  name: string;
  age: number;
}

function createUser(name: string, age: number): User {
  if (name === "") {
    throw new Error("이름은 비워둘 수 없습니다!");
  }
  return {
    name,
    age
  };
}

function getMessage(user: User, message: string): string {
  return `${user.name} (${user.age}) '${message}'`;
}

const uhyo = createUser("uhyo", 26);
// "uhyo (26) '안녕하세요'"라고 출력된다
console.log(getMessage(uhyo, "안녕하세요"));
