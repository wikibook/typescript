const r = /^abc/;
console.log(r.test("abcdefg")); // true라고 출력된다
console.log(r.test("Hello, abcdefg")); // false라고 출력된다