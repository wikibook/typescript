// 에러: Type '{ title: string; }' is not assignable to type 'User'.
// Object literal may only specify known properties, and 'title' does not exist in type 'User'.
const book: User = {
  title: "Software Design"
};