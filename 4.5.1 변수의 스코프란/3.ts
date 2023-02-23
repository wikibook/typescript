const repeatLength = 5;
const repeat = function<T>(element: T): T[] {
  const result: T[] = [];
  for (let i = 0; i < repeatLength; i++) {
    result.push(element);
  }
  return result;
};

console.log(repeat("a")); // ["a", "a", "a", "a", "a"]라고 출력된다