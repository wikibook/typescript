const four: Option<number> = {
  tag: "some",
  value: 4
};

const nothing: Option<number> = {
  tag: "none"
};

showNumberIfExists(four);    // 4가 출력된다
showNumberIfExists(nothing); // 아무것도 출력되지 않는다
