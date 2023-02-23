type Animal = {
  species: string;
  age: number;
};

const tama: Animal = {
  species: "Felis silvestris catus",
  age: 1
};
// 여기는 OK!
export type { Animal, tama };