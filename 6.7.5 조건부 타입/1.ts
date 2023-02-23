type RestArgs<M> = M extends "string" ? [string, string] : [number, number, number];

function func<M extends "string" | "number">(
  mode: M,
  ...args: RestArgs<M>
) {
  console.log(mode, ...args);
}

// 이 호출들은 OK
func("string", "uhyo", "hyo");
func("number", 1, 2, 3)

// 여기는 컴파일 에러
// 에러: Argument of type 'number' is not assignable to parameter of type 'string'.
func("string", 1, 2);
// 에러: Expected 4 arguments, but got 3.
func("number", "uhyo", "hyo")