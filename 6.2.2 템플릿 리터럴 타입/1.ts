function getHelloStr(): `Hello, ${string}!` {
  const rand = Math.random();
  if (rand < 0.3) {
    return "Hello, world!";
  } else if (rand < 0.6) {
    return "Hello, my world!";
  } else if (rand < 0.9) {
    // 에러: Type '"Hello, world."' is not assignable to type '`Hello, ${string}!`'.
    return "Hello, world.";
  } else {
    // 에러: Type '"Hell, world!"' is not assignable to type '`Hello, ${string}!`'.
    return "Hell, world!";
  }
}