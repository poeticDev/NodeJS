const http = require("http");

const server = http.createServer((req, res) => {
  console.log(
    "req.url: " + req.url,
    "req.method: " + req.method,
    "req.headers:",
    req.headers
  );

  res.

  res.setHeader("Content-type", "text/html"); // 브라우저에게 html을 응답한다는 것을 알림
  // html 코드 작성
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  
  res.end(); // 서버의 응답이 끝났음을 알림.
});

server.listen(3000);
