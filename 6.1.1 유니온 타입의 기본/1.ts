type Animal = {
  species: string;
};
type Human = {
  name: string;
}

type User = Animal | Human;

// 이 객체는 Animal 타입이므로 User 타입에 대입할 수 있다
const tama: User = {
  species: "Felis silvestris catus"
}
// 이 객체는 Human 타입이므로 User 타입에 대입할 수 있다
const uhyo: User = {
  name: "uhyo"
};
