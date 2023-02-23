readFile("foo.txt", "utf8")
  .then((result) => repeat10(result))
  .then((result) => {
    console.log(result);
  });