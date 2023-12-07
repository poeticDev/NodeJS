const express = require('express');

const router = express.Router();

// get 방식은 정확히 이 경로인지를 체크한다.
router.get("/", (req, res, next) => { 
    res.send("<h1>Hello from Express!</h1>");
  });

module.exports = router;