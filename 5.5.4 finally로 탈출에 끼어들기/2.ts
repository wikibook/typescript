try {
  console.log("try 블록 1")
  throwError();
  console.log("try 블록 2")
} catch (err) {
  console.log("catch 블록")
} finally {
  console.log("finally 블록")
}
