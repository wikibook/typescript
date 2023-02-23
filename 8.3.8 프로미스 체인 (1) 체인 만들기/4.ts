readFile("foo.txt", "utf8")
  .finally(() => {
    console.log("foo.txt is loaded?");
  })
  .catch(() => "")
  .then((result) => {
    console.log(result);
  });