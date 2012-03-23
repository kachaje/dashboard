/*var salimasites = {
    "Salima D.H.":[-13.76177778, 34.42183333, "#99f", "square"]
};*/

var salimasites = {};

var salima = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(353.31699,0);
    ctx.lineTo(353.31699,500.00046);
    ctx.lineTo(0,500.00046);
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
    ctx.translate(-24.595266,-19.722295);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(242.88811,451.97524);
    ctx.bezierCurveTo(214.11629000000002,416.43007,181.49452000000002,374.31072,170.39535,358.37669);
    ctx.bezierCurveTo(155.1046,336.42521,143.34257000000002,329.23516,121.85103000000001,328.70196);
    ctx.bezierCurveTo(106.25083000000001,328.31509,98.501253,325.97493,104.62971000000002,323.50206);
    ctx.bezierCurveTo(110.75823000000001,321.02912,115.77243000000001,313.22382,115.77243000000001,306.15688);
    ctx.bezierCurveTo(115.77243000000001,299.08988,125.80082000000002,289.49503,138.05780000000001,284.83494);
    ctx.bezierCurveTo(160.61886,276.25726000000003,167.76542,254.81776000000002,151.42898000000002,244.72129);
    ctx.bezierCurveTo(146.52623000000003,241.69119,142.45344000000003,232.42893,142.37838000000002,224.13841000000002);
    ctx.bezierCurveTo(142.10881000000003,194.34742000000003,129.48823000000002,184.97378000000003,104.79581000000002,196.22439000000003);
    ctx.bezierCurveTo(85.32569300000002,205.09559000000002,78.03000300000002,203.59927000000002,53.94996300000002,185.79607000000004);
    ctx.bezierCurveTo(28.20763,166.76399,26.05742,161.34252,28.46197,121.53112);
    ctx.lineTo(31.08803,78.051788);
    ctx.lineTo(96.897783,50.447016000000005);
    ctx.lineTo(162.70754,22.842246000000006);
    ctx.lineTo(177.12509,41.314986000000005);
    ctx.bezierCurveTo(185.05476,51.474976000000005,202.47519,78.33239800000001,215.83714,100.99816000000001);
    ctx.bezierCurveTo(236.96364,136.83486000000002,243.98652,142.20860000000002,269.69455,142.20860000000002);
    ctx.bezierCurveTo(292.77133,142.20860000000002,307.54381,150.65169000000003,337.02491,180.69077000000001);
    ctx.lineTo(374.79229999999995,219.17294);
    ctx.lineTo(357.10416999999995,293.23023);
    ctx.bezierCurveTo(344.99332999999996,343.93637,333.6655999999999,371.31532,321.17848999999995,380.0616);
    ctx.bezierCurveTo(304.7186899999999,391.59045,303.50152999999995,398.86836,308.69231999999994,454.7193);
    ctx.bezierCurveTo(312.5863999999999,496.618,311.33653999999996,516.60279,304.8222099999999,516.60279);
    ctx.bezierCurveTo(299.5302699999999,516.60279,271.65998999999994,487.52041,242.88810999999993,451.97524000000004);
    ctx.lineTo(242.88810999999993,451.97524000000004);
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
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["salima"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["salima"][0]))) * scale;
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