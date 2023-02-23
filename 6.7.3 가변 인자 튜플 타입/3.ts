// ...배열 타입을 2번 사용했으므로 컴파일 에러
type T1 = [number, ...string[], number, ...string[]];
type T2 = [number, ...string[], ...number[], string];
// 선택적 요소를 ...배열 타입보다 뒤에서 사용했으므로 컴파일 에러
type T3 = [number, ...string[], number?];
