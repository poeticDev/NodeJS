const path = require("path"); // node 코어모듈

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));  
  res.render('shop'); //render : 기본 템플릿 엔진를 사용해서 페이지를 render.
  // pug를 기본 엔진, views폴더를 기본으로 설정했기 때문에 shop만 적어줘도 해당 폴더의 .pug 파일을 찾아감
});

module.exports = router;