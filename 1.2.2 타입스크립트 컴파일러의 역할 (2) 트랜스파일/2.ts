// 변환 전
class Human {
  greet() {
    console.log("Hello");
  }
}

// 변환 후
var Human = /** @class */ (function () {
  function Human() {
  }
  Human.prototype.greet = function () {
    console.log("Hello");
  };
  return Human;
}());
