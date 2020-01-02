const express = require("express");
const app = express();
const request = require("request");

var port = process.env.PORT || 3000;

app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded()); 

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(port, function (req, res) {
    console.log("Listening to port " + port);
})

