function thrower(): never {
  throw new Error("error!!!!");
}

// 컴파일 에러는 발생하지 않는다
const result: never = thrower();

const str: string = result;
console.log(str);
