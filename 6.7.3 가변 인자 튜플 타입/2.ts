type NumberStringNumber = [number, ...string[], number];

// 여기는 OK
const arr1: NumberStringNumber = [25, "uhyo", "hyo", 0];
const arr2: NumberStringNumber = [25, 25];
// 여기는 컴파일 에러
const arr3: NumberStringNumber = [25, "uhyo", "hyo", "hyo"];
const arr4: NumberStringNumber = [];
const arr5: NumberStringNumber = ["uhyo", "hyo", 25];
const arr6: NumberStringNumber = [25, "uhyo", 25, "hyo"];
