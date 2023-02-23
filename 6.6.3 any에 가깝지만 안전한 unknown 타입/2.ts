function doNothing(val: unknown) {
  // 에러: Object is of type 'unknown'.
  const name = val.name;
  console.log(name);
}