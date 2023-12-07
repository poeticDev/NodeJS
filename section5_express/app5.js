const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false})); //form으로 들어온 요청을 분석해줌. extended - 비표준 대상의 분석 가능 여부

app.use("/", (req, res, next) => {
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button>Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); // redirect(): express에서 추가된 경로 설정 함수
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
