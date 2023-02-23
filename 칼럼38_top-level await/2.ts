import { readFile } from "fs/promises";

const fooContent = await readFile("foo.txt", "utf8");

export const bar = fooContent + fooContent;