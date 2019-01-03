window.onload = function () {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let NUM = 200;
    let radius = 200;
    let centerX = 400;
    let centerY = 400;
    let varRadius, teta, x, y;

    function DrawCircle(radius, color, offset) {
        ctx.fillStyle = color;
        ctx.beginPath();
        for (let i = 0; i <= NUM; i++) {
            varRadius = radius + 3 * Math.sin(teta*15 + offset);
            teta = i * 2 * Math.PI / NUM;
            x = centerX +  varRadius * Math.cos(teta);
            y = centerY + varRadius * Math.sin(teta);
            // ctx.fillRect(x, y, 2, 2);  

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
    }
        ctx.closePath();
        // ctx.stroke
        ctx.fill();
    }



    let time = 0;
    function Draw() {
        time++;
        ctx.clearRect(0, 0, 800, 800);
        for (let i = 0; i < 10; i++) {
            DrawCircle(200 - i * 10, 'rgba(0,0,0,' + i / 10 + ')', i);
        }
        
    }
    function Render() {
        Draw();
        window.requestAnimationFrame(Render);
    }
    Render();


}