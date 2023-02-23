type MysteryFunc =
  | ((str: string) => string)
  | ((str: string) => number);

function useFunc(func: MysteryFunc) {
  const result = func("uhyo");
  console.log(result);
}