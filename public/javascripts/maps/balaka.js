/*var balakasites = {
    "Balaka D.H.":[-14.98513889, 34.94952778, "#99f", "square"]
};*/

var balakasites = {};

var balaka = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(384.01599,0);
    ctx.lineTo(384.01599,500.00043);
    ctx.lineTo(0,500.00043);
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
    ctx.translate(-49.134863,-25.50482);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.miterLimit = 4;
    ctx.beginPath();
    ctx.moveTo(56.128941,480.91258);
    ctx.bezierCurveTo(60.182851,458.62546,77.727792,382.03887,95.117682,310.72015);
    ctx.bezierCurveTo(112.50764000000001,239.40143,126.75123,172.78175,126.77014,162.67640999999998);
    ctx.bezierCurveTo(126.78524,152.57106,134.27147,140.12439999999998,143.39779,135.01703999999998);
    ctx.bezierCurveTo(152.52403999999999,129.90967999999998,163.79259,111.43312999999998,168.43892,93.95807999999998);
    ctx.bezierCurveTo(176.57851,63.34461999999998,179.66035,61.98798999999998,252.89,56.78221999999998);
    ctx.bezierCurveTo(294.69174999999996,53.810659999999984,336.60145,44.96360999999998,346.02261999999996,37.12211999999998);
    ctx.bezierCurveTo(378.45577999999995,10.12740999999998,429.36880999999994,57.078809999999976,429.36880999999994,113.98298999999999);
    ctx.bezierCurveTo(429.36880999999994,128.39518999999999,415.39895999999993,166.40028999999998,398.32471999999996,198.43891);
    ctx.bezierCurveTo(381.25040999999993,230.47744,363.76688999999993,277.57528,359.47243999999995,303.10075);
    ctx.bezierCurveTo(350.23499999999996,358.00573,309.74712999999997,434.08235,267.03033999999997,476.79907000000003);
    ctx.bezierCurveTo(242.45696999999996,501.37251000000003,223.23309999999998,508.76559000000003,169.23360999999997,514.40963);
    ctx.bezierCurveTo(47.139601,527.17103,47.685431,527.3326,56.128941,480.91258);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    
    if(typeof(sites) != "undefined"){
        var pos = 1;
        for(var site in sites){
            var position = sites[site];
            var scale = ctx.canvas.width * 100 / 10;
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["balaka"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["balaka"][0]))) * scale;
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
    
};