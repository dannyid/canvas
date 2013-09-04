
var c = document.getElementById("canvas").getContext("2d");
var i = 0;
var color = "black";

function lines() {
    if (i <= 600) {
        c.strokeStyle = color ;
        c.lineWidth = 4;
        
        c.beginPath();
        c.moveTo(i, 0);
        c.lineTo(i, 600);
        c.stroke();

        c.beginPath();
        c.moveTo(0, i);
        c.lineTo(600, i);
        c.stroke();

        i = i + 8;
    } else {
        i = 0;
        color = (color === "black") ? "white" : "black";
    }
};

setInterval(lines, 10);
