// 트랜스파일 전（타입스크립트）
function repeatHello(count: number): string {
  return "hello".repeat(count);
}

// 트랜스파일 후（자바스크립트）
function repeatHello(count) {
  return "hello".repeat(count);
}
