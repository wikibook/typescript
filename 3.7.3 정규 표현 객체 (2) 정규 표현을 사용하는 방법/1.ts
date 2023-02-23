// "Hello, foobar world! abbc"라고 출력된다
console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/, "foobar"));
// "Hello, foobar world! foobar"라고 출력된다
console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/g, "foobar"));