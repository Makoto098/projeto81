canvas = document.getElementById("meuCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.linewidth - 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.linewidth - 5;
ctx.arc(300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.linewidth = 1;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.linewidth = 1;
ctx.arc(400, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.linewidth - 5;
ctx.arc(350, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.linewidth - 5;
ctx.arc(250, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
