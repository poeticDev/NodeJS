const object = {
  name: "김휴고",
  main: function () {
    const innerFunction = function () {
      console.log(this);
    };
    innerFunction();
  },
};

object.main();
