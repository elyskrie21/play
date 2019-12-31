const express = require("express");
const app = express();


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
})


var port = process.env.PORT || 3000;

app.listen(port, function (req, res) {
    console.log("Listening to port " + port);
})
