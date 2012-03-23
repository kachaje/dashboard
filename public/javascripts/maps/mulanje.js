/*var mulanjesites = {
    "Mulanje D.H.":[-16.02555556, 35.5075, "#99f", "square"]
};*/

var mulanjesites = {};

var mulanje = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(447.97601,0);
    ctx.lineTo(447.97601,499.99994);
    ctx.lineTo(0,499.99994);
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
    ctx.translate(-31.011994,-28.076495);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.miterLimit = 4;
    ctx.beginPath();
    ctx.moveTo(41.11934,474.75685);
    ctx.bezierCurveTo(40.79803,447.66236,38.69257,356.06538,36.44049,271.20792);
    ctx.bezierCurveTo(31.72148,93.401154,34.41292,87.271874,124.52556,70.608384);
    ctx.bezierCurveTo(155.47541999999999,64.885204,187.65226,51.112434,196.02965,40.002224);
    ctx.bezierCurveTo(208.91038,22.919655,210.03261,30.881285,203.30063,91.586094);
    ctx.bezierCurveTo(192.90005000000002,185.37186,201.55907000000002,215.20087999999998,249.88474000000002,252.06062);
    ctx.bezierCurveTo(291.69272,283.9491,337.27931,283.315,337.27931,250.84493);
    ctx.bezierCurveTo(337.27931,230.77411,353.39561000000003,229.71768,387.30402000000004,247.56571);
    ctx.bezierCurveTo(419.66545,264.59944,429.61068000000006,279.89867,429.83154,312.98798999999997);
    ctx.bezierCurveTo(429.95730000000003,331.83126,435.91790000000003,338.58426,450.29369,336.17046999999997);
    ctx.bezierCurveTo(464.84449,333.72722999999996,471.60917,341.71441999999996,474.22540000000004,364.42693999999995);
    ctx.bezierCurveTo(477.39004000000006,391.90050999999994,471.25613000000004,399.03777999999994,427.86052000000007,418.37598999999994);
    ctx.bezierCurveTo(287.50768000000005,480.9207799999999,245.61077000000006,489.0131999999999,151.81664000000006,471.69451999999995);
    ctx.bezierCurveTo(117.77516000000006,465.40887999999995,106.72102000000007,469.01743999999997,83.14664000000006,494.11120999999997);
    ctx.bezierCurveTo(67.69309000000007,510.56073999999995,52.046500000000066,524.0195,48.376370000000065,524.0195);
    ctx.bezierCurveTo(44.706310000000066,524.0195,41.44065000000006,501.85125999999997,41.119340000000065,474.75685);
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
            var scale = ctx.canvas.width * 100 / 30;
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["mulanje"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["mulanje"][0]))) * scale;
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