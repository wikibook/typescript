import { readFile } from "fs/promises";

const p = readFile("foo.txt", "utf8");

const p2 = p.then((result) => result + result);

p2.then((result) => {
  console.log(result);
});