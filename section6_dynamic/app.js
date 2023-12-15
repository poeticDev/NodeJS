const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'pug');
// app.set : 이 express의 전체 설정
// view engine : 동적 템플릿을 사용함을 알림

app.set('view', 'views');
//view : view 파일들이 어디에 있는지 알려줌. views폴더가 기본값이고, 만약 다른 이름으로 해당 폴더를 만들었으면 꼭 설정해야 함.

//const adminRoutes =  require("./routes/admin");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use("/admin", adminRoutes);
app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404page.html"));
});

app.listen(3000);
