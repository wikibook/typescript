import { readFile } from "fs/promises";

readFile("foo.txt", "utf8")
  .catch(() => "")
  .then((result) => {
    console.log(result);
  });