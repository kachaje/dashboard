/*var zombasites = {
    "Zomba C.H.":[-15.39688889, 35.31286111, "#cf0", "square"]
};*/

var zombasites = {};

var zomba = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(500.00067,0);
    ctx.lineTo(500.00067,302.397);
    ctx.lineTo(0,302.397);
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
    ctx.translate(-5.2853732,-124.02082);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(168.50974,411.15331);
    ctx.bezierCurveTo(159.39194,402.60943999999995,151.93187999999998,392.25547,151.93187999999998,388.14441999999997);
    ctx.bezierCurveTo(151.93187999999998,371.77775999999994,110.87098999999998,329.88190999999995,94.83022999999997,329.88169999999997);
    ctx.bezierCurveTo(83.16438399999997,329.88154999999995,78.25231399999997,325.51525,78.25231399999997,315.14559999999994);
    ctx.bezierCurveTo(78.25231399999997,307.0408499999999,73.35541399999997,300.4096599999999,67.37026399999996,300.4096599999999);
    ctx.bezierCurveTo(61.385113999999966,300.4096599999999,50.82628399999996,291.2918499999999,43.90616399999996,280.14778999999993);
    ctx.bezierCurveTo(36.98600399999996,269.0037899999999,25.11064399999996,252.83413999999993,17.516383999999963,244.21522999999993);
    ctx.bezierCurveTo(3.8926239999999623,228.75329999999994,3.9580239999999627,228.48190999999994,22.425463999999963,223.84690999999992);
    ctx.bezierCurveTo(32.71976399999996,221.26322999999994,52.88848399999996,208.83601999999993,67.24493399999997,196.23086999999992);
    ctx.bezierCurveTo(90.72402999999997,175.61596999999992,98.15798999999997,173.31249999999991,141.20887999999997,173.31249999999991);
    ctx.bezierCurveTo(176.74616999999995,173.31249999999991,190.71342999999996,170.37628999999993,195.45163999999997,161.90957999999992);
    ctx.bezierCurveTo(201.17539999999997,151.68170999999992,206.03356999999997,151.82792999999992,242.59695999999997,163.32852999999992);
    ctx.bezierCurveTo(279.92675999999994,175.07019999999991,285.24251,175.1773699999999,305.69593,164.60048999999992);
    ctx.bezierCurveTo(317.98022999999995,158.24806999999993,344.32637,153.05062999999993,364.24298999999996,153.05062999999993);
    ctx.bezierCurveTo(389.84973999999994,153.05062999999993,406.20403,148.52841999999993,420.08516,137.60954999999993);
    ctx.bezierCurveTo(455.07192999999995,110.08891999999993,471.67526999999995,131.35315999999992,494.88773,233.41047999999992);
    ctx.bezierCurveTo(504.36418999999995,275.07526999999993,505.019,288.5402399999999,497.98114,297.0204099999999);
    ctx.bezierCurveTo(485.96839,311.49486999999993,445.44198,310.62756999999993,418.77961999999997,295.3254799999999);
    ctx.bezierCurveTo(397.10974,282.8886799999999,397.05388,282.9064199999999,373.52103999999997,309.7089099999999);
    ctx.bezierCurveTo(360.56192999999996,324.4684699999999,344.12093999999996,338.39740999999987,336.98544999999996,340.6621499999999);
    ctx.bezierCurveTo(329.85000999999994,342.92683999999986,312.88743999999997,359.6268399999999,299.29094999999995,377.7731699999999);
    ctx.bezierCurveTo(272.88683999999995,413.01301999999987,269.3186299999999,414.96335999999985,218.24343999999996,422.07254999999986);
    ctx.bezierCurveTo(190.73395999999997,425.90162999999984,182.26450999999997,424.04211999999984,168.50973999999997,411.15330999999986);
    ctx.lineTo(168.50973999999997,411.15330999999986);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    if(typeof(sites) != "undefined"){
        var pos = 1;
        for(var site in sites){
            var position = sites[site];
            var scale = ctx.canvas.width * 100 / 50;
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["zomba"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["zomba"][0]))) * scale;
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