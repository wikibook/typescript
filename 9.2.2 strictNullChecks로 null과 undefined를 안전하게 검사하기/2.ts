type MaybeHuman = {
  name?: string;
}

function func(obj: MaybeHuman) {
  // 에러: Type 'string | undefined' is not assignable to type 'string'.
  const name: string = obj.name;
  console.log(name);
}