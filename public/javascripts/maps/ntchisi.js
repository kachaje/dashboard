/*var ntchisisites = {
    "Ntchisi D.H.":[-13.36333333, 33.91102778, "#99f", "square"]
};*/

var ntchisisites = {};

var ntchisi = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(402.668,0);
    ctx.lineTo(402.668,500.00006);
    ctx.lineTo(0,500.00006);
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
    ctx.translate(-33.666002,-36.647876);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.miterLimit = 4;
    ctx.beginPath();
    ctx.moveTo(383.12713,516.21265);
    ctx.bezierCurveTo(372.85517000000004,503.83579000000003,351.45216000000005,497.59353000000004,327.35121000000004,499.94540000000006);
    ctx.bezierCurveTo(305.8419,502.04436000000004,282.36945000000003,496.29485000000005,275.19036000000006,487.1687800000001);
    ctx.bezierCurveTo(265.15400000000005,474.4104500000001,253.78165000000007,473.7526700000001,225.98076000000006,484.3225100000001);
    ctx.bezierCurveTo(189.23230000000007,498.2942500000001,142.46826000000004,491.66904000000005,142.46826000000004,472.4910700000001);
    ctx.bezierCurveTo(142.46826000000004,466.6896400000001,121.87263000000004,431.4225100000001,96.70015000000004,394.1197600000001);
    ctx.bezierCurveTo(62.286183,343.12202,49.340813,308.9865,44.517393,256.52012);
    ctx.lineTo(38.102633,186.74372000000002);
    ctx.lineTo(111.5154,113.91411000000002);
    ctx.bezierCurveTo(151.89239,73.85780700000002,189.77642,41.084507000000016,195.70217,41.084507000000016);
    ctx.bezierCurveTo(201.62790999999999,41.084507000000016,211.68734999999998,54.79094700000002,218.05666,71.54331700000002);
    ctx.bezierCurveTo(224.42588999999998,88.29576700000001,235.69316,105.74512000000001,243.09506,110.31973000000002);
    ctx.bezierCurveTo(250.49695,114.89434000000003,256.55305,132.56118000000004,256.55305,149.57930000000002);
    ctx.bezierCurveTo(256.55305,189.58076000000003,305.4828,192.14745000000002,340.0429,153.95898000000003);
    ctx.lineTo(364.08164999999997,127.39650000000003);
    ctx.lineTo(371.40678999999994,157.12806000000003);
    ctx.bezierCurveTo(375.52948999999995,173.86153000000004,387.5340299999999,186.17512000000002,398.86589999999995,185.29410000000004);
    ctx.bezierCurveTo(420.62163,183.60267000000005,438.30036999999993,239.75925000000004,419.64219999999995,251.29058000000003);
    ctx.bezierCurveTo(404.36145999999997,260.73467000000005,405.89520999999996,312.11706000000004,421.93672999999995,328.15860000000004);
    ctx.bezierCurveTo(439.39896999999996,345.62081,432.14835999999997,525.6101600000001,413.73765999999995,531.69109);
    ctx.bezierCurveTo(406.06920999999994,534.2239500000001,392.29443999999995,527.2586200000001,383.12712999999997,516.21265);
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
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["ntchisi"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["ntchisi"][0]))) * scale;
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