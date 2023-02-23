const toLowerOrUpper = (str: string, upper?: boolean): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}

console.log(toLowerOrUpper("Hello"));        // "hello"라고 출력된다
console.log(toLowerOrUpper("Hello", false)); // "hello"라고 출력된다
console.log(toLowerOrUpper("Hello", true));  // "HELLO"라고 출력된다