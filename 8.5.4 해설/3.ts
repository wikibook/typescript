const data = await Promise.race([
  readFile(dataFile, { encoding: "utf8" }),
  errorAfter1ms()
]).catch(() => {
  console.log("실패했습니다");
  process.exit();
});
