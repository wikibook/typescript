const date = new Date("2020-02-03T15:00:00+09:00");
const timeNum = date.getTime();
console.log(timeNum); // 1580709600000라고 출력된다

const date2 = new Date(timeNum);
console.log(date2); // Mon Feb 03 2020 15:00:00 GMT+0900 (한국 표준시)라고 출력된다
