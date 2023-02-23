console.log("1. 파일을 불러옵니다");
readFile("filename.txt", (data) => {
  console.log("3. 파일 불러오기 완료")
});
console.log("2. 파일 불러오기 시작");