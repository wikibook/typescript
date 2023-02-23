type HasName = {
  name: string;
}
type HasNameAndAge = {
  name: string;
  age: number;
}

const showName = (obj: HasName) => {
  console.log(obj.name);
};
const g: (obj: HasNameAndAge) => void = showName;

g({
  name: "uhyo",
  age: 26,
});