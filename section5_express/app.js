const express = require("express");

const app = express();

app.use((req, res, next) => {

  console.log("In the middleware!");
  next(); 
});

app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

// const server = http.createServer(app);
// server.listen(3000);
// 이 두 줄의 기능을 아래의 한줄로 처리 가능

app.listen(3000);
