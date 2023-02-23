type Some<T> = {
  tag: "some";
  value: T;
}
type None = {
  tag: "none";
}
type Option<T> = Some<T> | None;

function isSome<T>(obj: Option<T>): obj is Some<T> {
  return obj.tag === "some";
}