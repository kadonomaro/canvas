window.onload = function () {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let NUM = 300;
    let radius = 200;
    let centerX = 400;
    let centerY = 400;
    let varRadius, teta, x, y;

    let settings = {
        radius: 100,
        period: 15,
        amp: 3

    }

    function DrawCircle(radius, color, offset) {
        ctx.fillStyle = color;
        ctx.beginPath();
        for (let i = 0; i <= NUM; i++) {
            varRadius = radius + settings.amp * Math.sin(teta*settings.period + offset);
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
        for (let i = 0; i < 20; i++) {
            let color = (i % 2) ? 'black' : 'white';
            DrawCircle(200 - i * 10, color, i * time/100);
        }
        
    }
    function Render() {
        Draw();
        window.requestAnimationFrame(Render);
    }
    Render();


}