var bodyParser = require(bodyParser);
var mongoose = require("mongoose");
var express = require("express");
var app = express();

mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("SERVER IS RUNNING");
});
