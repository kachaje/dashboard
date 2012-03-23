/*var phalombesites = {
    "Phalombe M.H.":[-15.82469444, 35.61872222, "#99f", "circle"]
};*/

var phalombesites = {};

var phalombe = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(358.19901,0);
    ctx.lineTo(358.19901,500.00064);
    ctx.lineTo(0,500.00064);
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
    ctx.translate(-30.186208,-42.361873);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.miterLimit = 4;
    ctx.beginPath();
    ctx.moveTo(309.55501,510.12114);
    ctx.bezierCurveTo(287.89224,441.86786,158.04616,398.77088,118.31305,446.64639);
    ctx.bezierCurveTo(102.38685,465.83628,96.360704,464.62634,65.536574,436.04999);
    ctx.bezierCurveTo(32.404514,405.33415,31.153334,398.26817,39.392164,288.40634);
    ctx.bezierCurveTo(49.517214,153.39198,55.987814,132.15675,90.324174,121.2588);
    ctx.bezierCurveTo(104.36247,116.80318,132.4908,96.515214,152.83168,76.174434);
    ctx.bezierCurveTo(183.92354,45.082584000000004,195.00287,41.55483400000001,222.38124,54.029234);
    ctx.bezierCurveTo(240.29264999999998,62.190234000000004,283.85832,65.608694,319.19386,61.625914);
    ctx.lineTo(383.44023,54.384384000000004);
    ctx.lineTo(372.75777999999997,123.12346);
    ctx.bezierCurveTo(366.88246,160.9299,357.47680999999994,269.74597,351.85634,364.93683);
    ctx.bezierCurveTo(342.17012,528.98723,329.42572,572.7280499999999,309.55501,510.12113999999997);
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
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["phalombe"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["phalombe"][0]))) * scale;
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