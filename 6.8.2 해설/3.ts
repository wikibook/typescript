function showNumber(obj: Option<number>) {
  // Property 'value' does not exist on type 'Option<number>'.
  //   Property 'value' does not exist on type '{ tag: "none"; }'.
  console.log(obj.value);
}