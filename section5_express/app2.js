const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  // 새로운 미들웨어 추가
  console.log("In the middleware!");
  next(); // 요청을 아래에 있는 다른 미들웨어로 이동, 없으면 여기서 미들웨어는 멈춤
});

app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>"); // 익스프레스의 기본 응답 헤더는 text/html. 물론 res.setHeader()로 지정해도 된다.
});

const server = http.createServer(app);

server.listen(3000);
