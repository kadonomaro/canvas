window.onload = function () {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let centerX = 400;
    let centerY = 400;
    let varRadius, teta, x, y;

    let settings = {
        radius: 200,
        period: 15,
        amp: 10,
        points: 300,
        stroke: true,
        fill: true,
        hsl: false
    }

    function DrawCircle(radius, color, offset) {
        ctx.fillStyle = color;
        ctx.beginPath();
        for (let i = 0; i <= settings.points; i++) {
            teta = i * 2 * Math.PI / settings.points;
            varRadius = radius + settings.amp * Math.sin(teta * settings.period + offset);
            x = centerX + varRadius * Math.cos(teta);
            y = centerY + varRadius * Math.sin(teta);

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
    }
        
        ctx.closePath();
        let stroke, fill;

        if (settings.stroke) {
            stroke = ctx.stroke();
        } else {
            stroke = null;
        }

        if (settings.fill) {
            fill = ctx.fill();
        } else {
            fill = null;
        }
    }



    let time = 0;
    let hsl = 10;

    function Draw() {
        time++;
        ctx.clearRect(0, 0, 800, 800);
        for (let i = 0; i <= 20; i++) {
            let color;
            let colorHSL = 'hsl('+ i * hsl +', 50%, 50%)'
            if (settings.hsl) {
                color = colorHSL;
            } else {
                color = (i % 2) ? 'black' : 'white';
            }
            
            DrawCircle(settings.radius - i * 10, color, i * time / 100);
        }    
    }

    function Render() {
        Draw();
        window.requestAnimationFrame(Render);
    }
    Render();


    let sliderRadius = document.querySelector('.settings__radius');
    let sliderPeriod = document.querySelector('.settings__period');
    let sliderAmp = document.querySelector('.settings__amplitude');
    let sliderPoints = document.querySelector('.settings__points');
    let sliderHSL = document.querySelector('.settings__hsl-slider');
    let checkStroke = document.querySelector('.settings__stroke');
    let checkFill = document.querySelector('.settings__fill');
    let checkHSL = document.querySelector('.settings__hsl');

    let countRadius = document.querySelector('.settings__radius-count');
    let countPeriod = document.querySelector('.settings__period-count');
    let countAmp = document.querySelector('.settings__amplitude-count');
    let countPoints = document.querySelector('.settings__points-count');
    let countHSL = document.querySelector('.settings__hsl-count');


    sliderRadius.addEventListener('input', function () {
        countRadius.value = sliderRadius.value;
        settings.radius = sliderRadius.value;
    });

    sliderPeriod.addEventListener('input', function () {
        countPeriod.value = sliderPeriod.value;
        settings.period = sliderPeriod.value;
    });

    sliderAmp.addEventListener('input', function () {
        countAmp.value = sliderAmp.value;
        settings.amp = sliderAmp.value;
    });

    sliderPoints.addEventListener('input', function () {
        countPoints.value = sliderPoints.value;
        settings.points = sliderPoints.value;
    });

    sliderHSL.addEventListener('input', function () {
        countHSL.value = sliderHSL.value;
        hsl = sliderHSL.value;
    });

    checkStroke.addEventListener('click', function () {
        settings.stroke = !settings.stroke;
        console.log(settings.stroke);
    });
    checkFill.addEventListener('click', function () {
        settings.fill = !settings.fill;
        console.log(settings.fill);
    });
    checkHSL.addEventListener('click', function () {
        settings.hsl = !settings.hsl;
        console.log(settings.hsl);
    });
    
}