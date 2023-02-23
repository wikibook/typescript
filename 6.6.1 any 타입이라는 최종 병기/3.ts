function useNumber(num: number) {
  console.log(num);
}

function doWhatever(obj: any) {
  // string 타입 변수에 넣을 수 있다
  const str: string = obj;
  // number 타입을 요구하는 함수에도 넘길 수 있다
  useNumber(obj);
}
