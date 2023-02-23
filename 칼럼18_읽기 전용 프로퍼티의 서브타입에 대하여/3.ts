type User = { name: string };
type ReadonlyUser = { readonly name: string };

const uhyoify = (user: User) => {
  user.name = "uhyo";
};

const john: ReadonlyUser = {
  name: "John Smith"
};
// 여기는 컴파일 에러 (john.name은 readonly이기 때문)
// 에러: Cannot assign to 'name' because it is a read-only property.
john.name = "Nanashi";

// 여기서는 에러가 발생하지 않는다!
uhyoify(john);

// readonly인데도 name이 변경되고 말았다
console.log(john.name); // "uhyo"라고 출력된다
