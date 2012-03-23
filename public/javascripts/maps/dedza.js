/*var dedzasites = {
    "Dedza D.H.":[-14.34359444, 34.33354167, "#99f", "square"]
};*/

var dedzasites = {};

var dedza = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(491.39606,0);
    ctx.lineTo(491.39606,312.69958);
    ctx.lineTo(0,312.69958);
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
    ctx.translate(-13.177553,-77.440959);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(34.505908,375.63576);
    ctx.bezierCurveTo(23.915784,368.85367,15.251141999999998,358.55556,15.251141999999998,352.75108);
    ctx.bezierCurveTo(15.251141999999998,338.23869,63.415999,299.98852,87.425572,295.43373);
    ctx.bezierCurveTo(116.87164,289.84759,128.14489,282.35353000000003,134.4923,264.14534000000003);
    ctx.bezierCurveTo(138.55498,252.49119000000005,146.63635,245.68948000000003,162.16563,240.85413000000003);
    ctx.bezierCurveTo(178.93732,235.63192000000004,189.39979,226.01767000000004,206.61319,200.01022000000003);
    ctx.bezierCurveTo(243.38163,144.45727000000002,272.17253,104.84219000000003,285.2702,91.78140900000004);
    ctx.lineTo(297.57176,79.51454800000003);
    ctx.lineTo(329.70426,121.90782000000004);
    ctx.bezierCurveTo(347.37712999999997,145.22409000000005,368.50190999999995,173.32440000000005,376.64813,184.35297000000003);
    ctx.bezierCurveTo(388.78155999999996,200.77944000000002,394.30292,203.81576,407.18622,201.14655000000002);
    ctx.bezierCurveTo(420.15871,198.45885,425.77569,201.64156000000003,439.25957999999997,219.31982000000002);
    ctx.bezierCurveTo(448.25025,231.10718000000003,463.16808999999995,244.66176000000002,472.41031999999996,249.44114000000002);
    ctx.bezierCurveTo(482.03534999999994,254.41842000000003,489.21441999999996,263.00224000000003,489.21441999999996,269.53339);
    ctx.bezierCurveTo(489.21441999999996,275.80481,493.57410999999996,283.37575,498.90273999999994,286.3578);
    ctx.bezierCurveTo(506.92205999999993,290.84565,502.69215999999994,296.23338,474.34818999999993,317.63327);
    ctx.bezierCurveTo(446.94051999999994,338.32624999999996,435.5543599999999,343.36755999999997,417.3058499999999,342.88906);
    ctx.bezierCurveTo(404.76616999999993,342.56019999999995,390.4647899999999,338.93699999999995,385.5250899999999,334.83741);
    ctx.bezierCurveTo(364.89676999999995,317.71743,211.96303999999992,334.85951,185.8104299999999,357.22074999999995);
    ctx.bezierCurveTo(178.1458499999999,363.77469999999994,167.7231799999999,364.89771999999994,143.10585999999992,361.82194999999996);
    ctx.bezierCurveTo(114.59711999999992,358.26001999999994,107.30815999999993,359.64748,84.59232299999992,372.95984);
    ctx.bezierCurveTo(70.32086399999991,381.32347999999996,57.54539399999992,388.12154,56.202400999999924,388.06663);
    ctx.bezierCurveTo(54.859460999999925,388.01183,45.09600699999992,382.41783999999996,34.50590799999992,375.63575999999995);
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
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["dedza"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["dedza"][0]))) * scale;
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