const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  })
};

async function get3() {
  await sleep(1000);
  return 3;
}

async function main() {
  const num1 = await get3();
  const num2 = await get3();
  const num3 = await get3();
  return num1 + num2 + num3;
}

main().then(result => {
  console.log(`result is ${result}`);
});