const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.static("build"));
app.listen(process.env.PORT, function () {
  console.info(`website running on Port: ${process.env.PORT}`);
});
