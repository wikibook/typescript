type Family<Parent extends HasName, Child extends HasName = Animal> = {
  mother: Parent;
  father: Parent;
  child: Child;
}