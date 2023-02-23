function repeatHello(count: number): string {
  return "hello".repeat(count);
}

// ↓여기에서 타입 에러 발생
console.log(repeatHello("wow"));
