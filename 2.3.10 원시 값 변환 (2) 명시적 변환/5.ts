// 숫자에서 문자열로
const str1 = String(1234.5); // "1234.5"라는 문자열이 된다
console.log(str1); // "1234.5"라고 출력된다

// 불리언에서 문자열로
const str2 = String(true); // "true"라는 문자열이 된다
console.log(str2); // "true"라고 출력된다

// null과 undefined도 문자열로 변환 가능
const str3 = String(null); // "null"라는 문자열이 된다
const str4 = String(undefined); // "undefined"라는 문자열이 된다
console.log(str3, str4); // "null undefined"라고 출력된다
