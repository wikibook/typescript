function doNothing(val: unknown) {
  console.log(val);
}

// doNothing에는 어떤 값이든 넘길 수 있다
doNothing(3);
doNothing({
  user: {
    name: "uhyo"
  }
});
doNothing(()=> {
  console.log("hi");
});
