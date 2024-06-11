const http = require("http");
const fs = require("fs");
const _ = require("lodash");

// Create an HTTP server
const server = http.createServer((req, res) => {
  //lodash
  const num = _.random(1, 10);
  console.log(num);

  const greet = _.once(() => {
    console.log("hello");
  });

  greet();
  greet();

  // Log the request URL and method
  //   console.log(req.url, req.method);

  // Set the header content type to HTML
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
      break;
  }

  //send a html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data);
    }
  });

  // Write the HTML content
  //   res.write('<head><link rel="stylesheet" href="#">Link</head>');
  //   res.write("<h1>Hello dude</h1>");
  //   res.write("<p>Hello dude</p>");
  // End the response
  //   res.end();
});

// Start the server and listen on port 3000
server.listen(3000, "localhost", () => {
  console.log("server is listening on port 3000");
});
