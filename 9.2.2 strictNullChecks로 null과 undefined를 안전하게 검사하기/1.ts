type MaybeHuman = {
  name?: string;
}

function func(obj: MaybeHuman) {
  const name = obj.name;
  console.log(name);
}