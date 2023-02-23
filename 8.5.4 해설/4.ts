const data = await Promise.race([
  readFile(dataFile, { encoding: "utf8" }),
  errorAfter1ms()
]).catch(() => {
  return "";
});