
var c = document.getElementById("canvas").getContext("2d");

//c.beginPath();
//c.moveTo(100,100);
//c.lineTo(500,500);
//c.lineTo(100,500);
//c.closePath();
//c.stroke();

var i = 0;

function lines() {
    if (i <= 400) {
        c.strokeStyle = "black";
        c.beginPath();
        c.moveTo(100, 100+i);
        c.lineTo(500, 100+i);
        c.stroke();
        c.beginPath();
        c.moveTo(100+i, 100);
        c.lineTo(100+i, 500);
        c.stroke();
        i = i + 15;
        setTimeout(lines,10);
    } else {
        i = 0;
        c.strokeStyle = "white";
        c.beginPath();
        c.moveTo(100, 100+i);
        c.lineTo(500, 100+i);
        c.stroke();
        c.beginPath();
        c.moveTo(100+i, 100);
        c.lineTo(100+i, 500);
        c.stroke();
        i = i + 15;
        setTimeout(lines,10);
    };
};

lines();
