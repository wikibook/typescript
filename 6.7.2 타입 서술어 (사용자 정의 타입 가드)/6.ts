function checkAndUseHuman(value: unknown) {
  assertHuman(value);
  // 여기서부터는 value가 Human 타입이 된다
  const name = value.name;
  // （생략）
}
