function isSome<T>(obj: Option<T>): obj is Extract<Option<T>, { tag: "some" }> {
  return obj.tag === "some";
}