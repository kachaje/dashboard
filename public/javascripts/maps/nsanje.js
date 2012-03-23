/*var nsanjesites = {
    "Nsanje D.H.":[-16.91769444, 35.25988889, "#99f", "square"]
};*/

var nsanjesites = {};

var nsanje = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(232.806,0);
    ctx.lineTo(232.806,499.99948);
    ctx.lineTo(0,499.99948);
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
    ctx.translate(-90.311283,-10.933865);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(224.63782,502.6856);
    ctx.bezierCurveTo(216.99971,500.68958000000003,210.75036,494.39895,210.75036,488.70648);
    ctx.bezierCurveTo(210.75036,483.01396,205.20071000000002,473.75069,198.41779,468.12132);
    ctx.bezierCurveTo(187.66974,459.20124000000004,190.65909,455.03934000000004,221.68468,435.72855000000004);
    ctx.lineTo(257.28417,413.57089);
    ctx.lineTo(252.78119,367.61901);
    ctx.bezierCurveTo(250.30450000000002,342.3455,244.90028,317.37985000000003,240.77171,312.13984);
    ctx.bezierCurveTo(236.64313,306.89982,214.89471,301.54326,192.4418,300.23629);
    ctx.bezierCurveTo(158.02157,298.23277,150.07544000000001,294.7483,141.78163,278.02085);
    ctx.bezierCurveTo(136.37146,267.10926,123.78598000000001,256.24971,113.8139,253.88845);
    ctx.bezierCurveTo(87.45167000000001,247.64626,85.913443,218.70252,111.06802,202.22061000000002);
    ctx.bezierCurveTo(122.24703000000001,194.89586000000003,131.39348,184.59314000000003,131.39348,179.32569);
    ctx.bezierCurveTo(131.39348,174.05823,142.00433,155.7209,154.97321000000002,138.57600000000002);
    ctx.bezierCurveTo(167.94205000000002,121.43115000000002,186.16267000000002,84.86153300000002,195.46349000000004,57.310203000000016);
    ctx.bezierCurveTo(210.60037000000003,12.470773000000015,213.74538000000004,8.345082900000016,225.44962000000004,17.97398300000002);
    ctx.bezierCurveTo(232.64121000000003,23.89042300000002,248.77816000000004,33.87584300000002,261.30943,40.163753000000014);
    ctx.bezierCurveTo(296.14956,57.64583300000001,295.10972000000004,69.08643300000001,255.31221000000002,106.14756000000001);
    ctx.bezierCurveTo(206.34770000000003,151.74547,207.29155000000003,167.33203,262.08718000000005,218.02781000000002);
    ctx.bezierCurveTo(315.05533,267.03282,325.1956200000001,299.64057,307.36179000000004,363.61642);
    ctx.bezierCurveTo(298.66425000000004,394.81749,297.84972000000005,410.06708000000003,304.18273000000005,423.13413);
    ctx.bezierCurveTo(308.86575000000005,432.79674,314.41690000000006,455.87953000000005,316.51857000000007,474.42917);
    ctx.lineTo(320.33979000000005,508.15587);
    ctx.lineTo(279.43250000000006,507.23535);
    ctx.bezierCurveTo(256.93354000000005,506.72929,232.27592000000007,504.68167,224.63782000000006,502.68559999999997);
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
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["nsanje"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["nsanje"][0]))) * scale;
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