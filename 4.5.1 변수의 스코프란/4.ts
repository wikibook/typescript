const repeatLength = 5;
const repeat = function<T>(element: T): T[] {
  const repeatLength = 3;

  const result: T[] = [];
  for (let i = 0; i < repeatLength; i++) {
    result.push(element);
  }
  return result;
};

console.log(repeat("a"));  // ["a", "a", "a"]라고 출력된다
console.log(repeatLength); // 5라고 출력된다