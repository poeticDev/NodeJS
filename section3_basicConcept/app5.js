const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url; // url 값을 변수에 저장
  const method = req.method; // 요청의 방법 저장

  if (url === "/") {
    // url에 따라 다른 응답을 보내도록 조건 설정
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type-"submit">Send</button></form></body>'
    );
    res.write("</html>");

    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody); //message=입력한 값
      const message = parsedBody.split('=')[1];
      fs.writeFileSync("message.txt", message);
    });
    //res.writeHead(302, {}); //302 경로재지정을 의미
    res.statusCode = 302;
    res.setHeader("Location", "/");
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
