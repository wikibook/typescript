try {
  throwNull();
} catch (err) {
  console.log(err, "이 던져졌습니다");
}

function throwNull() {
  throw null;
}
