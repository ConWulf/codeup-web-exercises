(function () {
    "use strict"


const blue = document.getElementById("blue");
const ctx = blue.getContext("2d");
const width = blue.width;
const height = blue.height;

function star() {
    ctx.beginPath();
    ctx.moveTo((width/2) - 10, (height/2) - 12);
    ctx.lineTo((width/2) - 25, (height/2));
    ctx.lineTo((width/2) - 65, (height/2));
    ctx.lineTo((width/2) - 25, (height/2) + 10);
    ctx.lineTo((width/2) - 50, (height/2) + 25);
    ctx.lineTo((width/2) - 5, (height/2) + 15);
    ctx.lineTo((width/2) + 40, (height/2) + 25);
    ctx.lineTo((width/2) + 20, (height/2) + 10);
    ctx.lineTo((width/2) + 40, (height/2));
    ctx.lineTo((width/2) + 5 , (height/2));
    ctx.lineTo((width/2) - 10, (height/2) - 12);
    ctx.lineWidth = 1;
    ctx.fillStyle = "#fff"
    ctx.fill()
    ctx.stroke();
}

star();

})();