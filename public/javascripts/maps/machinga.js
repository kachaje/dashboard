/*var machingasites = {
    "Machinga D.H.":[-15.06222222, 35.24611389, "#cf0", "square"]
};*/

var machingasites = {};

var machinga = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(500.00055,0);
    ctx.lineTo(500.00055,450.95099);
    ctx.lineTo(0,450.95099);
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
    ctx.translate(-10.714012,-8.6009678);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(27.605055,455.09128);
    ctx.bezierCurveTo(9.2310859,450.5541,9.2537059,452.15537,26.795666,397.77138);
    ctx.bezierCurveTo(47.833595,332.54906,51.497925,322.87905,71.677546,279.3294);
    ctx.bezierCurveTo(85.402903,249.70877,90.084683,222.85767,90.084683,173.76033);
    ctx.bezierCurveTo(90.084683,137.5458,92.781043,107.91569000000001,96.076543,107.91569000000001);
    ctx.bezierCurveTo(99.372043,107.91569000000001,112.65046000000001,118.05394000000001,125.58412,130.44516000000002);
    ctx.bezierCurveTo(141.1295,145.3386,161.96177,154.42436,187.04793999999998,157.25192);
    ctx.bezierCurveTo(223.07775999999998,161.31301000000002,226.5724,159.68767000000003,256.17831,125.09981000000002);
    ctx.bezierCurveTo(273.32858,105.06358000000002,288.54060000000004,80.78595000000001,289.98279,71.14949400000002);
    ctx.bezierCurveTo(294.10035000000005,43.63668700000002,331.02117000000004,23.508287000000017,388.73523,17.31186700000002);
    ctx.lineTo(441.77609,11.617227000000021);
    ctx.lineTo(464.14171,44.531187000000024);
    ctx.bezierCurveTo(483.72103,73.34478400000003,486.50732999999997,86.24490000000003,486.50732999999997,148.08111000000002);
    ctx.bezierCurveTo(486.50732999999997,199.28922000000003,490.05269999999996,222.26244000000003,499.39768,231.60735000000003);
    ctx.bezierCurveTo(514.40978,246.61952000000002,512.1845099999999,253.52874000000003,466.37537,334.13513);
    ctx.bezierCurveTo(439.49555999999995,381.43321000000003,429.32086999999996,392.3058,411.93859,392.3058);
    ctx.bezierCurveTo(400.18073,392.3058,377.84968,402.00095999999996,362.31401,413.85051);
    ctx.bezierCurveTo(345.01926,427.04188,322.68815,435.41387,304.7183,435.44331);
    ctx.bezierCurveTo(288.57631,435.46741,260.63495,439.58294,242.62644,444.58378);
    ctx.bezierCurveTo(219.27962,451.06705,196.52316000000002,450.9026,163.32536,444.01069);
    ctx.bezierCurveTo(134.0539,437.93389,111.0136,437.29722000000004,101.27138,442.29589);
    ctx.bezierCurveTo(79.338715,453.54943,45.302344999999995,459.4613,27.605054999999993,455.09116);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    if(typeof(sites) != "undefined"){
        var pos = 1;
        for(var site in sites){
            var position = sites[site];
            var scale = ctx.canvas.width * 100 / 50;
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["machinga"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["machinga"][0]))) * scale;
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