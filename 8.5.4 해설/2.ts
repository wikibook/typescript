import path from "path"
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  })
};

const errorAfter1ms = async () => {
  await sleep(1);
  throw new Error("Timeout!");
}

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../uhyo.txt");

const data = await Promise.race([
  readFile(dataFile, { encoding: "utf8" }),
  errorAfter1ms()
]);
// (이하 생략)
