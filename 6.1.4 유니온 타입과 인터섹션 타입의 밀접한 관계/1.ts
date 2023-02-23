type Human = { name: string };
type Animal = { species: string };
function getName(human: Human) {
  return human.name;
}
function getSpecies(animal: Animal) {
  return animal.species;
}

const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;