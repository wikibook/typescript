type F = (arg: number) => string;
// 이 함수 표현식은 인수의 타입을 기입하지 않아도 OK
const xRepeat: F = (num) => "x".repeat(num);
