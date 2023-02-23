const r = /ab+c/;

console.log(r.test("abbbbc")); // true가 출력된다
console.log(r.test("Hello, abc world!")); // true가 출력된다
console.log(r.test("ABC")); // false가 출력된다
console.log(r.test("안녕하세요")); // false가 출력된다
