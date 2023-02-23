function useUnknown(val: unknown) {
  if (typeof val === "string") {
    // 타입 좁히기에 의해 이곳의 val은 string 타입이다
    console.log("val은 문자열입니다");
    console.log(val.slice(0, 5));
  } else {
    console.log("val은 문자열 외의 무언가입니다");
    console.log(val);
  }
}

useUnknown("foobar");
useUnknown(null);
