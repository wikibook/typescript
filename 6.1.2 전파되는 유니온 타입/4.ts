type MaybeFunc =
  | ((str: string) => string)
  | string;

function useFunc(func: MaybeFunc) {
  // 에러: This expression is not callable.
  //  Not all constituents of type 'MaybeFunc' are callable.
  //    Type 'string' has no call signatures.
  const result = func("uhyo");
}