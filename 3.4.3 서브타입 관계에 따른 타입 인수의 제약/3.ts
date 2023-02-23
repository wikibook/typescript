type Animal = {
  name: string;
};
type Human = {
  name: string;
  age: number;
};

type T = Family<Animal, Human>;