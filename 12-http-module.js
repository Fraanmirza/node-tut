const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page.");
  }
  if (req.url === "/about") {
    res.end("This is our little history");
  }
  res.end(
    ` <h1>oops </h1>
    <p> we cant seems to find the page you want </p>
    <a href='/'> home page</a>
    `
  );
});

server.listen(5000);
