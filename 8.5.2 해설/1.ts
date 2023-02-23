import path from "path"
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../uhyo.txt");

const data = await readFile(dataFile, { encoding: "utf8" });
// (이하 생략)
