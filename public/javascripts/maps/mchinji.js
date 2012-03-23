/*var mchinjisites = {
    "Mchinji D.H.":[-13.8025, 32.88722222, "#99f", "square"]
};*/

var mchinjisites = {};

var mchinji = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(450.00031,0);
    ctx.lineTo(450.00031,504.94299);
    ctx.lineTo(0,504.94299);
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
    ctx.translate(-13.837863,-35.641341);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(413.01678,517.50019);
    ctx.bezierCurveTo(394.30348,506.17132,372.62145,487.80631,364.83465,476.68901999999997);
    ctx.bezierCurveTo(343.24179000000004,445.86091,311.54092,451.24381,269.99104,492.79371);
    ctx.bezierCurveTo(228.04213,534.74261,220.54799,537.38713,228.02332,507.60312999999996);
    ctx.bezierCurveTo(231.75687000000002,492.72734999999994,227.16047,478.96865999999994,213.11844000000002,462.98713999999995);
    ctx.bezierCurveTo(201.95177,450.27807999999993,178.96220000000002,422.77567999999997,162.03064,401.87064);
    ctx.bezierCurveTo(145.09901000000002,380.96565,119.45366000000001,356.69027,105.04105000000001,347.92539);
    ctx.bezierCurveTo(82.18131400000001,334.02356,80.60569400000001,330.52072,92.69818400000001,320.48491);
    ctx.bezierCurveTo(111.64247000000002,304.7625,110.31579,296.75719000000004,82.78383400000001,260.66094);
    ctx.bezierCurveTo(67.43228400000001,240.53400999999997,51.34627400000001,229.48847999999998,37.386364000000015,229.48847999999998);
    ctx.bezierCurveTo(5.057934400000015,229.48847999999998,11.080734000000014,218.32326999999998,56.36875400000001,194.29798);
    ctx.bezierCurveTo(78.700714,182.45093,99.24304800000002,165.60327,102.01843000000001,156.85885);
    ctx.bezierCurveTo(104.79381000000001,148.11437999999998,121.35083,125.12823999999999,138.81182,105.77860999999999);
    ctx.bezierCurveTo(156.27281000000002,86.42892299999998,176.58811000000003,63.44729299999999,183.95703,54.70828299999999);
    ctx.bezierCurveTo(194.18421,42.57961299999999,211.32240000000002,38.81916299999999,256.37176999999997,38.81916299999999);
    ctx.bezierCurveTo(312.84916999999996,38.81916299999999,315.38843999999995,39.77043299999999,315.38843999999995,60.92683299999999);
    ctx.bezierCurveTo(315.38843999999995,100.61158999999998,333.69573999999994,133.2894,385.25825999999995,185.64146999999997);
    ctx.lineTo(435.9693,237.12910999999997);
    ctx.lineTo(421.67596999999995,272.85164);
    ctx.bezierCurveTo(413.8145999999999,292.49908999999997,404.67391999999995,332.65907999999996,401.36332999999996,362.09612999999996);
    ctx.bezierCurveTo(396.28599999999994,407.24229999999994,398.12258999999995,419.17024999999995,413.09914999999995,438.31681999999995);
    ctx.bezierCurveTo(434.41158999999993,465.5633399999999,460.66033999999996,515.4236699999999,460.66033999999996,528.6608299999999);
    ctx.bezierCurveTo(460.66033999999996,542.7116299999999,450.87557999999996,540.4195399999999,413.01678,517.50019);
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
            var scale = ctx.canvas.width * 100 / 50;
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["mchinji"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["mchinji"][0]))) * scale;
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