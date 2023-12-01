const http = require("http");

const server = http.createServer((req, res) => {
  console.log(
    "req.url: " + req.url,
    "req.method: " + req.method,
    "req.headers:", req.headers
  );
});

server.listen(3000);