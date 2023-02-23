// toString을 지닌 객체 타입
type HasToString = {
  toString: () => string
}

function useToString1(value: HasToString) {
  console.log(`value is ${value.toString()}`);
}

// "value is foo!"라고 출력된다
useToString1({
  toString() {
    return "foo!";
  }
});

// "value is 3.14"라고 출력된다
useToString1(3.14);
