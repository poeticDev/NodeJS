const http = require("http"); // 1. node 전용 모듈

const express = require("express"); // 2. 서드파티 패키지

// 3. 내가 만들어 불러온 모듈을 구분해서 쓰면 식별하기 좋다.

const app = express(); // express 어플리케이션을 생성한다. 

const server = http.createServer(app); // 앱은 그 자체로 핸들러이기도 하다.

server.listen(3000);