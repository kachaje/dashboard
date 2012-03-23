/*var chikhwawasites = {
    "Chikhwawa D.H.":[-16.02344444, 34.85275, "#99f", "square"]
};*/

var chikhwawasites = {};

var chikhwawa = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(456.56299,0);
    ctx.lineTo(456.56299,499.99963);
    ctx.lineTo(0,499.99963);
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
    ctx.translate(-6.7185021,-36.648083);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(343.95295,525.54641);
    ctx.bezierCurveTo(343.95295,520.73224,333.38559,505.25656000000004,320.46993,491.15594000000004);
    ctx.bezierCurveTo(307.55427,477.05533,296.98690999999997,462.94006,296.98690999999997,459.78873000000004);
    ctx.bezierCurveTo(296.98690999999997,456.63735,284.90991999999994,447.89772000000005,270.14919,440.36738);
    ctx.bezierCurveTo(255.38841999999997,432.83698000000004,243.31142999999997,423.96416000000005,243.31142999999997,420.6499);
    ctx.bezierCurveTo(243.31142999999997,417.3357,233.41051999999996,408.50495,221.30933999999996,401.02603);
    ctx.bezierCurveTo(208.48812999999996,393.10206,195.73909999999995,377.56034,190.75604999999996,363.78003);
    ctx.bezierCurveTo(180.69460999999995,335.95556,153.99713999999994,312.8881,131.85560999999996,312.8881);
    ctx.bezierCurveTo(100.71645999999996,312.8881,87.80121999999996,273.14365,99.12942999999996,212.17899);
    ctx.bezierCurveTo(102.82870999999996,192.27075,100.23721999999995,184.4881,82.37316999999996,161.85820999999999);
    ctx.bezierCurveTo(70.75039,147.13464,49.36989,127.98818,34.861,119.31054);
    ctx.bezierCurveTo(4.6428599,101.23735,1.6462399,86.373487,22.35695,57.287936);
    ctx.bezierCurveTo(39.22743,33.595586,46.49886,33.300446,98.71195,54.188976000000004);
    ctx.bezierCurveTo(131.5112,67.310726,158.35892,71.656446,233.42705,75.994646);
    ctx.bezierCurveTo(310.31535,80.438017,327.0711,83.22291700000001,326.57749,91.47672700000001);
    ctx.bezierCurveTo(326.24638,97.01200700000001,323.94631000000004,114.37268,321.46613,130.056);
    ctx.bezierCurveTo(317.83495000000005,153.01737,318.93221,158.57111,327.10008000000005,158.57111);
    ctx.bezierCurveTo(332.67899000000006,158.57111,337.24352000000005,161.45628,337.24352000000005,164.98258);
    ctx.bezierCurveTo(337.24352000000005,178.72973000000002,412.95495000000005,287.07894,442.8208900000001,316.0724);
    ctx.bezierCurveTo(462.2275000000001,334.91207,463.8246700000001,339.24159000000003,457.8777800000001,356.88767);
    ctx.bezierCurveTo(454.2188900000001,367.74472000000003,448.1654900000001,389.24352,444.4258200000001,404.66285);
    ctx.bezierCurveTo(440.6861000000001,420.08218,427.1171800000001,445.27664,414.2726800000001,460.65051);
    ctx.bezierCurveTo(401.4281700000001,476.02437,390.9190000000001,492.62711,390.9190000000001,497.54539);
    ctx.bezierCurveTo(390.9190000000001,506.76079,360.0780900000001,534.29942,349.7575800000001,534.29942);
    ctx.bezierCurveTo(346.5650600000001,534.29942,343.9529500000001,530.36057,343.9529500000001,525.54641);
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
            var scale = ctx.canvas.width * 100 / 35;
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["chikhwawa"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["chikhwawa"][0]))) * scale;
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