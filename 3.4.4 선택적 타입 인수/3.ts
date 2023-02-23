type Family<Parent, Child = Animal> = {
  mother: Parent;
  father: Parent;
  child: Child;
}