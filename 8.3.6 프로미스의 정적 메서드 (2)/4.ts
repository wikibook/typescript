import { readFile } from "fs/promises";

const p = Promise.race([
  readFile("foo.txt", "utf8"),
  readFile("bar.txt", "utf8"),
  readFile("baz.txt", "utf8"),
]);

p.then((result) => {
  console.log(result);
});