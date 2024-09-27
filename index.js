const express = require("express");
const app = express();

const PORT = 3301;

app.get("/", function (req, res) {
  // res.sendfile();
  res.senf(__dirname);
});

app.listen(PORT, () => {
  console.log("running...");
});
