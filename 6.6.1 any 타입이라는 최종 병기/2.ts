// 모두 컴파일 에러는 발생하지 않지만 런타임 에러가 발생한다
doWhatever(3);
doWhatever({
  user: {
    name: "uhyo"
  }
});
doWhatever(()=> {
  console.log("hi");
});
