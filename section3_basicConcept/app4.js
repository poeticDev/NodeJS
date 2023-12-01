const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url; // url 값을 변수에 저장

  if (url === "/") {  // url에 따라 다른 응답을 보내도록 조건 설정
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type-"submit">Send</button></form></body>'
    );
    res.write("</html>");

    return res.end();
  }

  res.setHeader("Content-type", "text/html");
  
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");

  res.end();
});

server.listen(3000);
