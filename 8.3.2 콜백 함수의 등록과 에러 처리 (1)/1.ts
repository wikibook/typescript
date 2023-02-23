import { readFile } from "fs/promises";

const p = readFile("foo.txt", "utf8");

p.then((result) => {
  console.log("1");
});
p.then((result) => {
  console.log("2");
});
p.then((result) => {
  console.log("3");
});