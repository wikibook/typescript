import { readFile } from "fs";

readFile("foo.txt", "utf8", (err, result) => {
  console.log(result);
});
console.log("불러오기 시작")
