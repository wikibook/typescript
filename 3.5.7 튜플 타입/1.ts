let tuple: [string, number] = ["foo", 0];
tuple = ["aiueo", -555];

const str = tuple[0]; // str은 string 타입
const num = tuple[1]; // num는 number 타입
// 에러: Tuple type '[string, number]' of length '2' has no element at index '2'.
const nothing = tuple[2];
