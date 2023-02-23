type HasName = {
  name: string;
};
type Family<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
};