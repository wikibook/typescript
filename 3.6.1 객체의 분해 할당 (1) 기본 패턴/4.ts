const obj = {
  str: "hello, world!",
  num: 1234
};

const {
  // 에러: Property 'foo' does not exist on type '{ str: string; num: number; }'.
  foo
} = obj;