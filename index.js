const express = require("express");
const app = express();

const PORT = 3301;

app.get("/", function (req, res) {
  // res.sendfile();
  res.sendFile(__dirname + "/src/views/index.html");
});

app.get("/sobre", function (req, res) {
  // res.sendfile();
  res.sendFile(__dirname + "/src/views/about.html");
});

app.use(function (req, res) {
  res.status(404).sendFile(__dirname + "/src/views/404.html");
});

app.listen(PORT, () => {
  console.log("running...");
});
