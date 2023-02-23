import { readFile } from "fs/promises";

const p = readFile("foo.txt", "utf8");

p.then((result) => {
  console.log("성공", result);
});
p.catch((error) => {
  console.log("실패", error);
});