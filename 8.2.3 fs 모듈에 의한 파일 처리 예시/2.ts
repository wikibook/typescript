import { readFile } from "fs";
import { performance } from "perf_hooks";

const startTime = performance.now();
readFile("foo.txt", "utf8", (err, result) => {
  const endTime = performance.now();
  console.log(`${endTime - startTime}밀리초 걸렸습니다`);
});
