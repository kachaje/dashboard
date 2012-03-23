/*var dowasites = {
    "Dowa D.H.":[-13.65508333, 33.93688889, "#99f", "square"]
};*/

var dowasites = {};

var dowa = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(487.36642,0);
    ctx.lineTo(487.36642,356.92621);
    ctx.lineTo(0,356.92621);
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
    ctx.translate(-17.59894,-84.809541);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.miterLimit = 4;
    ctx.beginPath();
    ctx.moveTo(354.8065,427.60268);
    ctx.bezierCurveTo(335.17154,412.38665,284.18296,399.6209,243.04253,399.6209);
    ctx.bezierCurveTo(217.05232,399.6209,215.53001,398.45284,215.53001,378.51089);
    ctx.bezierCurveTo(215.53001,366.90036000000003,211.37004000000002,355.80451,206.28567,353.85343);
    ctx.bezierCurveTo(201.20129,351.9024,168.43379000000002,356.67827,133.46906,364.46655);
    ctx.lineTo(69.896766,378.62703);
    ctx.lineTo(50.791589,360.92094);
    ctx.bezierCurveTo(34.55478,345.87315,31.531601,337.18522,30.655383,303.0533);
    ctx.bezierCurveTo(30.088358,280.96448999999996,26.387389,257.10757,22.431069,250.03795999999997);
    ctx.bezierCurveTo(17.262249,240.80193999999997,17.944269000000002,230.70654999999996,24.854119,214.16881999999998);
    ctx.bezierCurveTo(30.143145,201.51039999999998,34.470544000000004,184.78537999999998,34.470544000000004,177.00217999999998);
    ctx.bezierCurveTo(34.470544000000004,165.71847999999997,39.056771000000005,162.81199999999998,57.10298900000001,162.65913999999998);
    ctx.bezierCurveTo(74.83389000000001,162.50891,83.50584500000001,157.23234999999997,97.145005,138.29486999999997);
    ctx.bezierCurveTo(111.08585,118.93844999999997,152.32454,86.24875999999998,162.80223999999998,86.24875999999998);
    ctx.bezierCurveTo(164.0049,86.24875999999998,167.01525999999998,101.52418999999998,169.49192,120.19415999999998);
    ctx.bezierCurveTo(172.26390999999998,141.09034999999997,181.74731,164.84138,194.16153,181.97869999999998);
    ctx.bezierCurveTo(205.25316,197.29018999999997,215.38197,216.95475,216.66998,225.67771);
    ctx.bezierCurveTo(217.95808,234.40059,227.35089000000002,247.73966,237.54297000000003,255.32007);
    ctx.bezierCurveTo(252.96854000000002,266.79285999999996,259.60712,267.87093999999996,277.15680000000003,261.75308);
    ctx.bezierCurveTo(293.6662,255.99789,300.01592000000005,256.54396,306.42842,264.2705);
    ctx.bezierCurveTo(311.51137,270.39515,320.95225,272.54743,331.32035,269.94517);
    ctx.bezierCurveTo(340.50710000000004,267.63947,351.89998,268.93637,356.63788,272.82719000000003);
    ctx.bezierCurveTo(361.37575,276.71795000000003,373.08656,280.98505,382.66181,282.30955000000006);
    ctx.bezierCurveTo(397.19806,284.3203500000001,400.42616,288.99591000000004,402.22122,310.63946000000004);
    ctx.bezierCurveTo(403.91859,331.10587000000004,410.49475,341.80284000000006,433.46872,361.46767000000006);
    ctx.bezierCurveTo(453.71746,378.79990000000004,467.03712,385.25216000000006,477.26737,382.6845200000001);
    ctx.bezierCurveTo(488.05594,379.9767800000001,493.99229,383.4369300000001,499.57344,395.68626000000006);
    ctx.bezierCurveTo(508.60612000000003,415.5108400000001,507.64488,416.0442300000001,435.91435,431.0090400000001);
    ctx.bezierCurveTo(374.23269,443.87736000000007,375.89783,443.9473200000001,354.8065,427.6026800000001);
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
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["dowa"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["dowa"][0]))) * scale;
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