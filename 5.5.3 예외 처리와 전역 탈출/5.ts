try {
  const bigInt = BigInt("foobar"); // 여기서 에러 발생
  // 따라서 아래의 console.log는 실행되지 않는다
  console.log(bigInt);
} catch(error) {
  // SyntaxError: Cannot convert foobar to a BigInt가 출력된다(Node.js의 경우)
  console.log(error);
}
