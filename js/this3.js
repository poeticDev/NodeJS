const object = {
  name: "김휴고",
  main: function () {
    console.log(this);
  },
};
// object.main();

const main2 = object.main;

main2();