type HasName = {
  name: string;
}
type HasNameAndAge = {
  name: string;
  age: number;
}

const fromAge = (age: number): HasNameAndAge => ({
  name: "John Smith",
  age,
});

const f: (age: number) => HasName = fromAge;
const obj: HasName = f(100);