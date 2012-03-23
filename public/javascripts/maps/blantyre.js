/*var blantyresites = {
    "QECH":[-15.80208333, 35.32072222, "#cf0", "square"],
    "Limbe":[-15.81680556, 35.352, "#9cf", "circle"],                
    "Macro":[-15.80208333, 35.32072222, "#99f", "circle"],               
    "Mlambe Mission Hospital":[-15.64477778, 35.31725, "#99f", "circle"]
};*/

var blantyresites = {};

var blantyre = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(292.92099,0);
    ctx.lineTo(292.92099,500.00009);
    ctx.lineTo(0,500.00009);
    ctx.closePath();
    ctx.clip();
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.translate(-62.110923,-33.790693);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.miterLimit = 4;
    ctx.beginPath();
    ctx.moveTo(185.30918,519.06881);
    ctx.bezierCurveTo(173.79158999999999,505.61717999999996,171.32754,489.10816,175.53506,453.58213);
    ctx.bezierCurveTo(181.14199,406.24027,181.05521,406.06011,149.61706999999998,399.77253);
    ctx.bezierCurveTo(132.26803999999998,396.30272,108.24824999999998,393.46379,96.23981899999998,393.46379);
    ctx.bezierCurveTo(78.17666899999998,393.46379,73.30160899999998,386.55553000000003,68.00936999999999,353.45955000000004);
    ctx.bezierCurveTo(63.00407099999999,322.15812000000005,65.14629399999998,310.87128,77.85653899999998,301.57732000000004);
    ctx.bezierCurveTo(90.04941899999999,292.66171,92.55332899999999,281.43615000000005,87.89637899999998,256.56730000000005);
    ctx.bezierCurveTo(82.36915899999998,227.05097000000004,85.76802899999998,219.59916000000004,119.04090999999998,188.28420000000006);
    ctx.bezierCurveTo(139.5828,168.95107000000004,165.88376999999997,133.97376000000006,177.48753,110.55682000000006);
    ctx.bezierCurveTo(213.24623,38.394067000000064,223.58286999999999,28.660550000000057,249.64586,42.60906700000005);
    ctx.bezierCurveTo(262.01795,49.23038700000005,290.94722,76.48099700000006,313.93309999999997,103.16602000000006);
    ctx.bezierCurveTo(350.63694999999996,145.77659000000006,354.89025,155.46087000000006,348.86449999999996,182.70175000000006);
    ctx.bezierCurveTo(340.88172999999995,218.79003000000006,341.05141999999995,298.9977200000001,349.26372999999995,371.37409);
    ctx.bezierCurveTo(354.41402999999997,416.76504,352.42353999999995,424.75563,330.50679999999994,446.67237);
    ctx.bezierCurveTo(317.02156999999994,460.15768,295.31191999999993,471.1911,282.26324999999997,471.1911);
    ctx.bezierCurveTo(267.46076999999997,471.1911,247.66414999999998,483.57611,229.62384999999998,504.12283);
    ctx.bezierCurveTo(201.87600999999998,535.72589,200.08799,536.3289500000001,185.30938999999998,519.06881);
    ctx.lineTo(185.30938999999998,519.06881);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    if(typeof(sites) != "undefined"){
        var pos = 1;
        for(var site in sites){
            var position = sites[site];
            var scale = ctx.canvas.width * 100 / 40;
            
            var x = (Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["blantyre"][1]))) * scale);
            var y = (Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["blantyre"][0]))) * scale);
            var radius = 25;
            
            ctx.fillStyle = position[2];
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 1;
            ctx.miterLimit = 4;
            ctx.beginPath();
            
            var offsetX = 0;
            var offsetY = 0;
            switch(position[3]){
                case "circle":
                    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
                    offsetX = radius + 5;
                    offsetY = -radius / 2;
                    break;
                case "square":
                    ctx.moveTo(x,y);
                    ctx.lineTo(x+(radius*2),y);
                    ctx.lineTo(x+(radius*2),y+(radius*2));
                    ctx.lineTo(x,y+(radius*2));
                    ctx.lineTo(x,y);    
                    offsetX = (radius * 2) + 5;
                    offsetY = radius;
                    break;
            }            
            
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            ctx.textBaseline = 'top';
            ctx.font         = 'normal 20px sans-serif';
            ctx.strokeText(alpha[pos], x + offsetX, y + offsetY);
            
            pos++;
        }
    }
    
    ctx.restore();
    ctx.restore();
    ctx.restore();
};