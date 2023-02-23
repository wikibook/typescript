type Animal = {
  tag: "animal";
  species: string;
}
type Human = {
  tag: "human";
  name: string;
}
type User = Animal | Human;