function foo(a, ...rest) {
  console.log(rest); // ["a","b","c"]
}
foo("a", "b", "c", "d");
