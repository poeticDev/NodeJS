function main() {
  console.log(this);
}

const object = {
  name: "김휴고",
  main,
};
object.main();
