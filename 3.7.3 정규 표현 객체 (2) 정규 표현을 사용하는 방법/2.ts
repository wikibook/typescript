const result = "Hello, abbbbbbc world! abc".match(/a(b+)c/);
if (result !== null) {
  console.log(result[0]); // "abbbbbbc"라고 출력된다
  console.log(result[1]); // "bbbbbb"라고 출력된다
}