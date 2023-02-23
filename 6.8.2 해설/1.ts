type Option<T> = {
  tag: "some";
  value: T;
} | {
  tag: "none";
};

function showNumberIfExists(obj: Option<number>): void {
  if (obj.tag === "some") {
    console.log(obj.value);
  }
}