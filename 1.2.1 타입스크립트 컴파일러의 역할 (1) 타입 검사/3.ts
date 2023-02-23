function double(value: string | number) {
  if (typeof value === "number") {
    console.log(value * 2);
  } else {
    console.log(value.repeat(2));
  }
}

double(123);
double("hello");