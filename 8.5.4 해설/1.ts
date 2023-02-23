import path from "path"
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  })
};

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../uhyo.txt");

sleep(1).then(() => {
  process.exit();
});
const data = await readFile(dataFile, { encoding: "utf8" });
// (이하 생략)
