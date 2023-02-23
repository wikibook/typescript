const result = "Hello, abbbbbbc world! abc".match(/a(?<worldName>b+)c/);
if (result !== null) {
  console.log(result.groups); // { "worldName": "bbbbbb" }라고 출력된다
}