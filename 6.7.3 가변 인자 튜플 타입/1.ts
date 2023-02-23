type NumberAndStrings = [number, ...string[]];

// 여기는 OK
const arr1: NumberAndStrings = [25, "uhyo", "hyo", "hyo"];
const arr2: NumberAndStrings = [25];
// 여기는 컴파일 에러
const arr3: NumberAndStrings = ["uhyo", "hyo"];
const arr4: NumberAndStrings = [25, 26, 27];
const arr5: NumberAndStrings = [];
