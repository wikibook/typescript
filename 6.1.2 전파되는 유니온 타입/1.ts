type Animal = {
  species: string;
  age: string;
};
type Human = {
  name: string;
  age: number;
}

type User = Animal | Human;

const tama: User = {
  species: "Felis silvestris catus",
  age: "영원한 17세"
}

const uhyo: User = {
  name: "uhyo",
  age: 26
};