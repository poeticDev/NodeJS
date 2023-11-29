const http = require("http");
//require : 특정 경로의 파일을 불러오는 키워드. 자동으로 js 확장자가 붙음.
// 경로를 생략하면 글로벌 모듈을 수색

function rqListener(req, res) {
  // creatServer 콜백 함수 설정
  console.log(req);
}

const server = http.createServer(rqListener); //서버를 생성. 모든 요청을 콜백함수로 보냄.

server.listen(3000);
//스크립트를 바로 종료하지 않고 계속 실행되면서 듣도록 함
//첫번째 인수 : 듣고자 하는 포트, 실무에서는 대개 입력하지 않으며 기본적으로 80 포트 사용