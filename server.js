const express = require("express");
const app = express();
const request = require("request");

const src = require(__dirname + "/getSrc.js");

var id;

app.set("view engine", "ejs");

app.use(express.urlencoded());

var port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, function (req, res) {
  console.log("Listening to port " + port);
});

app.post("/game", function (req, res) {
  id = req.body.button;
  console.log(id);
  res.redirect("/game");
});

app.get("/game", function (req, res) {
  console.log(id);
  res.render("game", { gameSrc: src.getSrc(id) });
});
