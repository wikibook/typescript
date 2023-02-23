const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

async function get3() {
  console.log("get3이 호출됐습니다");
  await sleep(1000);
  console.log("await의 다음으로 넘어갔습니다");
  return 3;
}

console.log("get3을 호출합니다");
const p = get3();
p.then((num) => {
  console.log(`num is ${num}`);
});
console.log("get3을 호출했습니다");