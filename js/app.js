window.onload = function () {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let NUM = 100;
    let radius = 200;
    let centerX = 400;
    let centerY = 400;

    ctx.beginPath();
    for (let i = 0; i <= NUM; i++) {
        var teta = i * 2 * Math.PI / NUM;
        var x = centerX +  radius * Math.cos(teta);
        var y = centerY + radius * Math.sin(teta);
        // ctx.fillRect(x, y, 2, 2);  

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.stroke();





}