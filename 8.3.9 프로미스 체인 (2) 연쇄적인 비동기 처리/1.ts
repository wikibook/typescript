const repeat10 = (str: string) =>
  new Promise<string>((resolve) => {
    setTimeout(
      () => resolve(str.repeat(10)),
      1000
    );
  });