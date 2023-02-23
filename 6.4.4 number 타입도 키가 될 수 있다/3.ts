function get<T, K extends keyof T & string>(obj: T, key: K): T[K] {
  const keyName: string = key;
  return obj[key];
}