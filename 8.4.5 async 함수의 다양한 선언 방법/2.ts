const main = async () => {
  const fooContent = await readFile("foo.txt", "utf8");
  // 2번 반복시킨 내용을 bar.txt에 쓴다
  await writeFile("bar.txt", fooContent + fooContent);
  console.log("쓰기가 완료됐습니다");
};
