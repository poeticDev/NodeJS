function main() {
  console.log(this);
}

const mainBind = main.bind({ name: "묶였다네" });

//광역 범위에서 mainBind을 호출할 때
mainBind();

//객체에  mainBind를 메서드로 추가한 뒤 호출할 때
const object = {
  mainBind,
};

object.mainBind();
