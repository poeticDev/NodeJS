const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
//handlebar는 익스프레스 내장되지 않았으므로, 설치 후에도 임포트 해와야 함

const app = express();

app.engine("hbs", expressHbs.engine());
//비내장 템플릿을 사용할 때는 엔진으로 등록해줘야 함.
app.set("view engine", "hbs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//app.use("/admin", adminRoutes);
app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
  //res.status(404).sendFile(path.join(__dirname, "views", "404page.html"));
});

app.listen(3000);
