type Func = <T>(arg: T, num: number) => T[];

const repeat: Func = (element, length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};