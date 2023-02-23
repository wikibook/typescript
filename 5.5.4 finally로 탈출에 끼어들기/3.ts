try {
  console.log("에러를 발생시킵니다");
  throwError();
  console.log("에러를 발생시켰습니다");
} finally {
  console.log("finally 블록");
}
console.log("try 문의 뒤");

function throwError() {
  throw new Error("에러가 발생했습니다!!!!!");
}
