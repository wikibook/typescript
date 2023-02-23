try {
  throwError();
  // try 블록에서 탈출하므로 여기는 실행되지 않는다
  console.log("これ는表示されない");
} catch (err) {
  console.log(err);
}

function throwError() {
  const error = new Error("에러가 발생했습니다!!!!!");
  throw error;
  // 함수에서 탈출하므로 여기는 실행되지 않는다
  console.log("이 문장도 출력되지 않는다");
}
