function main() {
  console.log(this);
}

const object = {
  name: "김휴고",
  smallObject: {
    name: "작은 김휴고",
    main,
  },
};
object.smallObject.main();
