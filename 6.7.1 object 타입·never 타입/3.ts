function useNever(value: never) {
  // never 타입은 어떤 타입으로도 끼워 맞출 수 있다
  const num: number = value;
  const str: string = value;
  const obj: object = value;
  console.log(`value is ${value}`);
}

// 에러: Argument of type '{}' is not assignable to parameter of type 'never'.
useNever({});
// 에러: Argument of type 'number' is not assignable to parameter of type 'never'.
useNever(3.14);
