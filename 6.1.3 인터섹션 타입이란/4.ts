// 에러: Type 'string' is not assignable to type 'Animal & string'.
//   Type 'string' is not assignable to type 'Animal'.
const cat1: Animal & string = "cat";

// Type '{ species: string; age: number; }' is not assignable to type 'Animal & string'.
//   Type '{ species: string; age: number; }' is not assignable to type 'string'.
const cat2: Animal & string = {
  species: "Felis silvestris catus",
  age: 3
}