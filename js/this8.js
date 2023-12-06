const object = {
  name: "김휴고",
  main: function () {
    console.log(this);
  },
  mainArrow: () => {
    console.log(this);
  },
};

const object2 = {
  name: "다른 객체",
  mainArrow: object.mainArrow,
};

object.mainArrow(); // window
object2.mainArrow(); // window
