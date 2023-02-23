import("fs/promises")
  .then(({ readFile }) =>
    readFile("foo.txt", "utf8")
  )
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("에러가 발생했습니다!!!!", error);
  });