const path = require("path"); // node 코어모듈

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: 'Shop' });
  // 응답에 여러가지 자료를 함께 보낼 수 있다. 여기서는 객체를 보낸다.
});

module.exports = router;
