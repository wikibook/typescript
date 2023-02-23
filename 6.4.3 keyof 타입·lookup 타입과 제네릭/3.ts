// 에러: Type 'K' cannot be used to index type 'T'.
function get<T, K>(obj: T, key: K): T[K] {
  return obj[key];
}