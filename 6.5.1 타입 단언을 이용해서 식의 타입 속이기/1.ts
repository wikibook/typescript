function getFirstFiveLetters(strOrNum: string | number) {
  const str = strOrNum as string;
  return str.slice(0, 5);
}

// "uhyoh"라고 출력된다
console.log(getFirstFiveLetters("uhyohyohyo"));

// 런타임 에러 발생!
console.log(getFirstFiveLetters(123));
