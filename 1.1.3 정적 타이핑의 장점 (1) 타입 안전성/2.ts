function repeatHello(count: number): string {
  return "hello".repeat(count);
}

// ↓타입 에러가 없어진다
console.log(repeatHello(10));
