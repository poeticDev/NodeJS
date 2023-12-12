const path = require("path"); // node 코어모듈

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  //res.sendFile("/views/shop.html"); //운영체제의 시점에서 절대경로
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  //__dirname : 자신이 사용된 파일의 경로
});

module.exports = router;
