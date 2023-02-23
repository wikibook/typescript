import { readFile } from "fs/promises";

const p = readFile("foo.txt", "utf8");

p.then((data) => {
  console.log(data);
});