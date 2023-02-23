type HasToString = {
  toString: () => string
}

function useToString2(value: HasToString & object) {
  console.log(`value is ${value.toString()}`);
}

// "value is foo!"라고 출력된다
useToString2({
  toString() {
    return "foo!";
  }
});

// 에러: Argument of type 'number' is not assignable to parameter of type 'HasToString & object'.
//          Type 'number' is not assignable to type 'object'.
useToString2(3.14);