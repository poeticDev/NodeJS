const object = {
  name: "김휴고",
  main: function () {
    console.log(this);
  },
};

const object2 = {
  name: "다른 객체",
  main: object.main,
};

object.main(); // object
object2.main(); // object2
