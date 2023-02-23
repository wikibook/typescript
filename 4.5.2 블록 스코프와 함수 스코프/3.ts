function sabayomi(age: number) {
  if (age >= 30) {
    const lie = age - 10;
    return lie;
  }
  if (age >= 20) {
    const lie = age - 5;
    return lie;
  }
  return age;
}