console.log("에러를 발생시킵니다");
throwError();
console.log("에러를 발생시켰습니다");

function throwError() {
  const error = new Error("에러가 발생했습니다!!!!!");
  throw error;
}