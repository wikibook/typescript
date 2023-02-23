function mapOption<T, U>(obj: Option<T>, callback: (value: T) => U): Option<U> {
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value)
      };
    case "none":
      return {
        tag: "none"
      }
  }
}