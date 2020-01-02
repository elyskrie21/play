var gameSources = ["https://www.crazygames.com/gameframe/run-3?v1", "https://www.crazygames.com/gameframe/swords-souls"]
var gameSrc = "";

localStorage.setItem("gameSrc", gameSrc);

$("button").on("click", function (e) {
    console.log(this.id); 
    var id = this.id; 
    var src = gameSources[id]; 
    gameSrc = src;
});

$(document).ready(function () {
    let gameSrc = localStorage.getItem("gameSrc"); 
    $("iframe").attr("src", gameSrc);
});
