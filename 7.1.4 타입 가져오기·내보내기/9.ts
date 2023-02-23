import type { Animal, tama } from "./animal.js";

// 에러: 'tama' cannot be used as a value because it was imported using 'import type'.
const myCat: Animal = { ...tama };

// 여기는 OK
const otherCat: typeof tama = {
  species: "Felis silvestris catus",
  age: 20
};
