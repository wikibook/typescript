type Animal = {
  name: string;
}
type Family<Parent = Animal, Child = Animal> = {
  mother: Parent;
  father: Parent;
  child: Child;
}