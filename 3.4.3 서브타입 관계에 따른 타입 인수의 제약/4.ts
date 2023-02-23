type Family<Parent extends HasName, Child extends Parent> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

// 여기는 OK
type S = Family<Animal, Human>;
// 여기는 에러 (Animal은 Human의 서브타입이 아니기 때문)
type T = Family<Human, Animal>;
