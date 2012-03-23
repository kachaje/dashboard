/*var mangochisites = {
    "Mangochi D.H.":[-14.48194444, 35.26472222, "#99f", "square"]
};*/

var mangochisites = {};

var mangochi = function(ctx, color, sites) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(392.974,0);
    ctx.lineTo(392.974,500.00064);
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
    ctx.translate(-61.370248,-20.933199);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.transform(3.3413705,0,0,3.3413705,-1394.0769,-1792.3851);
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(514.88676,691.17064);
    ctx.bezierCurveTo(513.31533,690.79127,510.25597,688.56982,508.08817,686.23409);
    ctx.bezierCurveTo(503.65681,681.4594400000001,500.00416,681.40718,497.67197999999996,686.0850700000001);
    ctx.bezierCurveTo(496.21383,689.0098300000001,495.87316999999996,689.0800200000001,492.97799,687.0521500000001);
    ctx.bezierCurveTo(490.11969,685.0501300000001,489.5399,685.1144500000001,486.10742999999997,687.8144400000001);
    ctx.bezierCurveTo(483.25266999999997,690.0599900000001,480.28554999999994,690.7632700000001,473.66637,690.7632700000001);
    ctx.lineTo(464.97414,690.7632700000001);
    ctx.lineTo(453.85902,679.4524400000001);
    ctx.bezierCurveTo(445.09833,670.5374900000002,442.7439,667.2557600000001,442.7439,663.9595600000001);
    ctx.bezierCurveTo(442.7439,661.6594400000001,441.56938,658.7145900000002,440.13385999999997,657.4154600000002);
    ctx.bezierCurveTo(438.38475999999997,655.8325500000002,437.72346,653.6931000000002,438.12906,650.9295300000001);
    ctx.bezierCurveTo(438.46195,648.6614100000002,437.99372,645.4218500000001,437.08853999999997,643.7305100000001);
    ctx.bezierCurveTo(434.82255999999995,639.4964900000001,436.44223999999997,635.4261000000001,441.41657,632.85377);
    ctx.bezierCurveTo(445.07108999999997,630.9639500000001,445.60105,629.9024400000001,445.60105,624.47226);
    ctx.bezierCurveTo(445.60105,619.62887,446.30393,617.78792,448.78117,616.1431);
    ctx.bezierCurveTo(451.61681999999996,614.2603,451.77155999999997,613.61517,450.20973999999995,610.18735);
    ctx.bezierCurveTo(449.24638999999996,608.07302,448.45818999999995,605.33037,448.45818999999995,604.09256);
    ctx.bezierCurveTo(448.45818999999995,599.44304,452.75050999999996,605.34627,455.0025499999999,613.09302);
    ctx.bezierCurveTo(456.22894999999994,617.3116600000001,457.94805999999994,620.76327,458.82280999999995,620.76327);
    ctx.bezierCurveTo(463.4822899999999,620.76327,473.0511399999999,627.18686,475.53956999999997,631.98527);
    ctx.bezierCurveTo(478.80960999999996,638.29085,491.92600999999996,652.19184,494.60564999999997,652.19184);
    ctx.bezierCurveTo(497.26196999999996,652.19184,502.74389999999994,646.10849,502.74389999999994,643.16073);
    ctx.bezierCurveTo(502.74389999999994,641.83061,501.16381999999993,637.6934699999999,499.23260999999997,633.96709);
    ctx.bezierCurveTo(493.07710999999995,622.08971,489.88676,613.8873,489.88676,609.93884);
    ctx.bezierCurveTo(489.88676,607.82776,488.67039,604.0960600000001,487.18372,601.6461800000001);
    ctx.bezierCurveTo(485.69705,599.1962900000001,484.02001,594.9418400000001,483.45697,592.1918400000001);
    ctx.bezierCurveTo(482.89392000000004,589.4418400000001,481.15269,584.1717900000001,479.58756,580.4806100000001);
    ctx.bezierCurveTo(478.02243,576.78944,476.96732,573.1200200000001,477.24288,572.32636);
    ctx.bezierCurveTo(477.51845000000003,571.5327,482.03259,576.15989,487.27431,582.60902);
    ctx.bezierCurveTo(492.51604000000003,589.05814,501.44049,599.47756,507.10643,605.76327);
    ctx.bezierCurveTo(512.77238,612.04898,520.7555,622.3347,524.8466999999999,628.62041);
    ctx.bezierCurveTo(528.93791,634.90613,537.2648899999999,646.15613,543.3511,653.62041);
    ctx.bezierCurveTo(549.70264,661.4100999999999,553.60412,667.30531,552.509,667.4582);
    ctx.bezierCurveTo(551.4596300000001,667.60469,547.46676,668.13833,543.63597,668.64405);
    ctx.bezierCurveTo(535.71978,669.68912,529.8867600000001,674.38116,529.8867600000001,679.70381);
    ctx.bezierCurveTo(529.8867600000001,681.62468,527.8721500000001,685.01257,525.1758900000001,687.62589);
    ctx.bezierCurveTo(520.4018900000001,692.25304,519.9768300000001,692.39948,514.8867600000001,691.17064);
    ctx.lineTo(514.8867600000001,691.17064);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.fillStyle = (typeof(color) != "undefined" ? color : "rgba(118, 104, 79, 0.94)");
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(450.49974,563.15725);
    ctx.bezierCurveTo(450.01745,561.90043,450.16436999999996,556.89297,450.82622999999995,552.02955);
    ctx.lineTo(452.02961999999997,543.1869899999999);
    ctx.lineTo(460.41954,552.7518699999999);
    ctx.bezierCurveTo(465.034,558.0125599999999,468.47668,562.6495399999999,468.06994,563.0562799999999);
    ctx.bezierCurveTo(467.66319999999996,563.4630199999999,463.74080999999995,564.1662799999999,459.35352,564.6190899999999);
    ctx.bezierCurveTo(452.85315,565.2899899999999,451.21431,565.0193999999999,450.49974,563.1572499999999);
    ctx.lineTo(450.49974,563.1572499999999);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    
    if(typeof(sites) != "undefined"){
        var pos = 1;
        for(var site in sites){
            var position = sites[site];
            var scale = ctx.canvas.width * 100 / 2;
            
            var x = Math.abs((Math.abs(position[1]) - Math.abs(gpscoords["mangochi"][1]))) * scale;
            var y = Math.abs((Math.abs(position[0]) - Math.abs(gpscoords["mangochi"][0]))) * scale;
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