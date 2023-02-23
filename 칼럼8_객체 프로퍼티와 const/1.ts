const user = {
  name: "uhyo",
  age: 25,
};

// 에러: Cannot assign to 'user' because it is a constant.
user = {
  name: "John Smith",
  age: 15,
};