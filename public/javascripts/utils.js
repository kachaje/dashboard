var shrinkinlevel = 0.0;
var shrinktolevel = 0.0;
var zoomoutlevel = 0.0;
var zoomtolevel = 0.0;
var fadeinlevel = 0.0;
var fadeoutlevel = 0.0;
var current_district = null;
       
var response = null;
   
var alpha = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var count = 0;
var qryDistrict = null;
var updateLink = (typeof(updateLink) == "undefined" ? "/district/query_district/?district=" : updateLink);
   
var coords = {
    "north":[185, 452],
    "chitipa":[430, 500],
    "karonga":[400, 500],
    "rumphi":[500, 360],
    "mzimba":[237, 500],
    "nkhatabay":[230, 500],
    "centre":[300, 418],
    "kasungu":[450, 540],
    "nkhotakota":[215, 500],
    "salima":[350, 500],
    "mchinji":[450, 505],
    "dowa":[490, 360],
    "ntchisi":[402, 500],
    "lilongwe":[500, 525],
    "dedza":[493, 315],
    "ntcheu":[305, 540],
    "south":[225, 500],
    "balaka":[385, 500],
    "mangochi":[395, 500],
    "zomba":[500, 305],
    "blantyre":[295, 500],
    "phalombe":[355, 500],
    "mwanza":[485, 500],
    "machinga":[500, 455],
    "mulanje":[450, 500],
    "nsanje":[235, 500],
    "chikhwawa":[458, 500],
    "thyolo":[370, 500],
    "chiradzulu":[210, 500],
    "mw":[375,930]
}
    
var gpscoords = {
    "chitipa":[-9.75, 33.25],
    "karonga":[-10.00, 33.75],
    "rumphi":[-10.75, 33.83],
    "mzimba":[-11.50, 33.50],
    "nkhatabay":[-11.50, 34.00],
    "likoma":[-12.08, 34.67],
    "kasungu":[-13.00, 33.42],
    "nkhotakota":[-13.00, 34.08],
    "salima":[-13.75, 34.50],
    "mchinji":[-13.75, 33.08],
    "dowa":[-13.58, 34.00],
    "ntchisi":[-13.33, 34.00],
    "lilongwe":[-13.80, 33.58],
    "dedza":[-14.17, 34.33],
    "ntcheu":[-14.75, 34.75],
    "balaka":[-15.00, 35.00],
    "mangochi":[-14.50, 35.25],
    "zomba":[-15.17, 35.50],
    "blantyre":[-15.50, 35.00],
    "phalombe":[-15.67, 35.67],
    "mwanza":[-15.58, 34.58],
    "machinga":[-14.92, 35.67],
    "mulanje":[-16.00, 35.58],
    "nsanje":[-16.75, 35.17],
    "chikhwawa":[-16.17, 34.75],
    "thyolo":[-16.08, 35.25],
    "chiradzulu":[-15.70, 35.17],
    "neno":[-16.17, 35.17],
    "mw":[-9.00, 32.55]
}
                 
var taskFlow = [
["country", "malawi", "center"],
["", "malawi", "corner"],
["region", "north", "center"],
["district", "chitipa", "center"],
["district", "karonga", "center"],
["district", "rumphi", "center"],
["district", "mzimba", "center"],
["district", "nkhatabay", "center"],
["logo", "baobab", "center"],
["country", "malawi","center"],
["", "malawi", "corner"],
["region", "centre", "center"],
["district", "kasungu", "center"],
["district", "nkhotakota","center"],
["district", "salima", "center"],
["district", "mchinji", "center"],
["district", "dowa", "center"],
["district", "ntchisi", "center"],
["district", "lilongwe", "center"],
["district", "dedza", "center"],
["district", "ntcheu", "center"],
["logo", "baobab", "center"],
["country", "malawi", "center"],
["", "malawi", "corner"],
["region", "south", "center"],
["district", "balaka", "center"],
["district", "mangochi", "center"],
["district", "zomba", "center"],
["district", "blantyre", "center"],
["district", "phalombe", "center"],
["district", "mwanza", "center"],
["district", "machinga", "center"],
["district", "mulanje", "center"],
["district", "nsanje", "center"],
["district", "chikhwawa", "center"],
["district", "thyolo", "center"],
["district", "chiradzulu", "center"],
["logo", "baobab", "center"],
["country", "malawi", "center"],
["", "malawi", "corner"]
];

var nationalsites = {
    "balaka":{}, 
    "blantyre":{}, 
    "chikhwawa":{}, 
    "chiradzulu":{}, 
    "chitipa":{}, 
    "dedza":{}, 
    "dowa":{}, 
    "karonga":{}, 
    "kasungu":{}, 
    "likoma":{}, 
    "lilongwe":{}, 
    "machinga":{}, 
    "mangochi":{}, 
    "mchinji":{}, 
    "mulanje":{}, 
    "mwanza":{}, 
    "mzimba":{}, 
    "nkhatabay":{}, 
    "nkhotakota":{}, 
    "nsanje":{}, 
    "ntcheu":{}, 
    "ntchisi":{}, 
    "phalombe":{}, 
    "rumphi":{}, 
    "salima":{}, 
    "thyolo":{}, 
    "zomba":{}
};

var districts = ["balaka", "blantyre", "chikhwawa", "chiradzulu", "chitipa", 
"dedza", "dowa", "karonga", "kasungu", "likoma", "lilongwe", "machinga", 
"mangochi", "mchinji", "mulanje", "mwanza", "mzimba", "nkhatabay", 
"nkhotakota", "nsanje", "ntcheu", "ntchisi", "phalombe", "rumphi", 
"salima", "thyolo", "zomba"];

var regions = ["north", "centre", "south"];

var districtsArray = {};
var regionsArray = {};
      
     
var malawi = new Image();
malawi.src = "/images/malawi/mw.svg";
malawi.alt = "malawi";
malawi.id = "malawi";
malawi.height = window.innerHeight - 80;
   
var logo = new Image();
logo.src = "/images/baobab.png";
logo.alt = "baobab logo";
logo.id = "logo";
        
function updateDistrict(index){
    nationalsites[qryDistrict] = JSON.parse(response);
    
    if(index >= districts.length){
        index = 0;
    }
    setTimeout("queryDistrict('" + index + "')", 500);
}
          
function queryDistrict(index){
    qryDistrict = districts[index];
            
    index++;
            
    ajaxRequest(updateLink + qryDistrict, "updateDistrict(" + index + ")");
}
          
function __$(id){
    return document.getElementById(id);
}
                   
function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function checkCtrl(obj){
    var o = obj;

    if(obj == null)
        return null;

    var t = o.offsetTop;
    var l = o.offsetLeft + 1;
    var w = o.offsetWidth;
    var h = o.offsetHeight;

    while(o.offsetParent != document.body){
        o = o.offsetParent;
        t += o.offsetTop;
        l += o.offsetLeft;
    }
    return Array(w, h, t, l);
}

// Supporting function to allow a humanized Concept Name display
String.prototype.toProperCase = function()
{
    return this.toLowerCase().replace(/^(.)|\s(.)/g,
        function($1) {
            return $1.toUpperCase();
        });
}

function fadein(control, index, obj){
    if(!__$(control)){
        return;
    }
    
    control = __$(control);
    
    control.style.opacity = (control.style.opacity ? (control.style.opacity * 1.1) : 0.1);
    
    movetocenter(control.id);
        
    if(control.style.opacity < 1.1){
        setTimeout("fadein('" + control.id + "', " + index + (typeof(obj) != 
            "undefined" ? ", " + obj : "") + ")", 100);
    } else { 
        if(current_district == null){
            setTimeout("zoomout('" + control.id + "', " + parseInt(index) + 
                (typeof(obj) != "undefined" ? ", " + obj : "") + ")", 500);
        } else {
            if(sizeof(eval(current_district + "sites")) == 0){
                setTimeout("zoomout('" + control.id + "', " + parseInt(index) + 
                    (typeof(obj) != "undefined" ? ", " + obj : "") + ")", 500); 
            } else {
                swapSites(0, control.id, index, obj);
            }
        }
    }        
}

function swapSites(pos, control, index, obj){
    if(!__$(control)){
        return;
    }
    
    control = __$(control);
    
    if(__$("sitesummary")){
        __$("sitesummary").style.display = "none"; 
        __$("sitepointer").style.display = "none"; 
    }
    
    if(pos < sizeof(nationalsites[current_district])){        
        var site = null;
        
        var t = 0;
        var dist = eval(current_district + "sites");
        for(var s in dist){
            if(t == pos){
                site = s.replace(/\'/g, "")
                break;
            } 
            t++;
        }
        
        var variables = ["Connectivity", "Batteries", "System"];
        var connectivity = ["Up", "Down"];
        var batteries = ["Charging", "Discharging", "Not Charging"];
        var system = ["Up", "Down"];
        
        var conn = (nationalsites[current_district][site] ? nationalsites[current_district][site][4] : "Offline");      // randomFromTo(0,1);
        var batt = (nationalsites[current_district][site] ? nationalsites[current_district][site][6] : "Offline");      // randomFromTo(0,2);
        var sys = (nationalsites[current_district][site] ? nationalsites[current_district][site][5] : "Offline");      // randomFromTo(0,1);
        
        for(var k = 0; k < variables.length; k++){
            var token = null;
            switch(variables[k]){
                case "Connectivity":
                    switch(conn){
                        case "Up":
                            token = "<b style='color: green'>Up</b>";
                            break;
                        case "Down":
                            token = "<b style='color: red'>Down</b>";
                            break;
                        default:
                            token = "<b style='color: blue'>" + conn.toProperCase() + "</b>";
                            break;
                    }
                    break;
                case "Batteries":
                    switch(batt){
                        case "Charging":
                            token = "<b style='color: green'>Charging</b>";
                            break;
                        case "Discharging":
                            token = "<b style='color: #FFBF00'>Discharging</b>";
                            break;
                        case "Not Charging":
                            token = "<b style='color: red'>Not Charging</b>";
                            break;
                        default:
                            token = "<b style='color: blue'>" + batt.toProperCase() + "</b>";
                            break;
                    }
                    break;
                case "System":
                    switch(sys){
                        case "Up":
                            token = "<b style='color: green'>Up</b>";
                            break;
                        case "Down":
                            token = "<b style='color: red'>Down</b>";
                            break;
                        default:
                            token = "<b style='color: blue'>" + sys.toProperCase() + "</b>";
                            break;
                    }
                    break;
            }
            __$(variables[k].replace(/\'/g, "")).innerHTML = token;
        }
        
        __$("sitesummary").style.display = "block"; 
        __$("sitepointer").style.display = "block"; 
        
        var coordinates = checkCtrl(__$(site));
        var summarycoordinates = checkCtrl(__$("summary"));
        
        if(coordinates[3] > window.innerWidth/2){
            __$("sitesummary").style.left = (summarycoordinates[3] - __$("sitesummary").offsetWidth) + "px";            
        } else {
            __$("sitesummary").style.left = (summarycoordinates[3] + summarycoordinates[0]) + "px";
        }
        
        if((coordinates[2] - __$("siteslist").scrollTop) > __$("siteslist").offsetHeight){
            __$("siteslist").scrollTop += coordinates[1];
        } else {
            __$("siteslist").scrollTop = 0;
        }
                
        __$("sitesummary").style.top = (coordinates[2] - __$("siteslist").scrollTop - 5) + "px";
        __$("sitepointer").style.top = (coordinates[2] - __$("siteslist").scrollTop - 5) + "px";
        __$("sitepointer").style.left = (coordinates[3] - 51) + "px";
        __$("sitepointer").style.width = (coordinates[0] + 51) + "px";
        __$("sitepointer").style.height = (coordinates[1]) + "px";
        
        pos++;
        setTimeout("swapSites(" + pos + ", '" + control.id + "', " + parseInt(index) + 
            (typeof(obj) != "undefined" ? ", " + obj : "") + ")", 2500);
    } else {
        setTimeout("zoomout('" + control.id + "', " + parseInt(index) + 
            (typeof(obj) != "undefined" ? ", " + obj : "") + ")", 500) ;
    }
}

function fadeout(control, index){
    if(!__$(control)){
        return;
    }
    
    control = __$(control);
    
    control.style.opacity = (control.style.opacity ? (control.style.opacity * 0.9) : 0.9);
      
    if(control.style.opacity > 0.1){
        setTimeout("fadeout('" + control.id + "', " + index + ")", 100);
    } else {        
        setTimeout("nextTask(" + (parseInt(index) + 1) + ")", 500) ;     
    }        
}

function shrinkto(control, fx, fy, index){
    if(!__$(control)){
        return;
    }
    
    control = __$(control);
    
    var pos = checkCtrl(control);
    
    control.style.position = "absolute";
    
    shrinktolevel += 0.2;
    
    if(shrinktolevel < 1 && control.offsetWidth > (window.innerWidth/2)){
        control.style.height = (pos[1] * 0.98) + "px";
        
        control.style.left = fx + "px";
        control.style.top = fy + "px";
        
        setTimeout("shrinkto('" + control.id + "', " + fx + ", " + fy + ", " + index + ")", 0);
    } else {        
        shrinktolevel = 0.0; 
        var vote = randomFromTo(0,2);
               
        switch(vote){
            case 0:
                index = 1;
                break;
            case 1:
                index = 10;
                break;
            case 2:
                index = 23;
                break;
        }
                
        setTimeout("nextTask(" + (parseInt(index) + 1) + ")", 500) ;   
    }        
}

function zoomto(control, fx, fy, index){
    if(!__$(control)){
        return;
    }
    
    control = __$(control);
    
    var pos = checkCtrl(control);
    
    control.style.position = "absolute";
    
    zoomtolevel += 0.1;
    
    if(zoomtolevel < 1 && control.offsetWidth > (window.innerWidth/2)){
        control.style.height = (pos[1] * 1.05) + "px";
        
        control.style.left = fx + "px";
        control.style.top = fy + "px";
        
        setTimeout("zoomto('" + control.id + "', " + fx + ", " + fy + ", " + index + ")", 0);
    } else {        
        zoomtolevel = 0.0; 
        setTimeout("nextTask(" + (parseInt(index) + 1) + ")", 500) ;
    }        
}

function shrinkin(control, index){
    if(!__$(control)){
        return;
    }
    
    control = __$(control);
    
    var pos = checkCtrl(control);
    var centerX = pos[3] + (pos[0]/2);
    var centerY = pos[2] + (pos[1]/2);
    
    control.style.position = "absolute";
    
    shrinkinlevel += 0.01;
    
    if(shrinkinlevel < 1){
        control.style.height = (pos[1] * 0.9) + "px";
        
        pos = checkCtrl(control);
        
        var newX = pos[3] + (pos[0]/2);
        var newY = pos[2] + (pos[1]/2);
    
        control.style.left = (pos[3] + (centerX - newX)) + "px";
        control.style.top = (pos[2] + (centerY - newY)) + "px";
        
        setTimeout("shrinkin('" + control.id + "', " + index + ")", 0);
    } else {        
        shrinkinlevel = 0.0; 
        setTimeout("nextTask(" + (parseInt(index) + 1) + ")", 500) ;
    }        
}


function zoomout(control, index, obj){
    if(!__$(control)){
        return;
    }
    
    control = __$(control);
    
    var pos = checkCtrl(control);
    var centerX = pos[3] + (pos[0]/2);
    var centerY = pos[2] + (pos[1]/2);
    
    control.style.position = "absolute";
    
    zoomoutlevel += 0.01;
    
    if(zoomoutlevel <= 1 && (control.offsetHeight < (window.innerHeight - 80)) && 
        (control.offsetWidth < (window.innerWidth - 80))){
        control.style.height = (pos[1] * 1.1) + "px";        
       
        pos = checkCtrl(control);
        
        var newX = pos[3] + (pos[0]/2);
        var newY = pos[2] + (pos[1]/2);
    
        control.style.left = (pos[3] + (centerX - newX)) + "px";
        control.style.top = (pos[2] + (centerY - newY)) + "px";
          
        movetocenter(control.id);
        
        setTimeout("zoomout('" + control.id + "', " + index + (typeof(obj) != 
            "undefined" ? ", " + obj : "") + ")", 0);
    } else {        
        zoomoutlevel = 0.0;
        setTimeout("nextTask(" + (parseInt(index) + 1) + ")", 2000) ;
    }        
}

function movetocenter(control){
    if(!__$(control)){
        return;
    }
    
    var thecontrol = __$(control);
    
    var centerX = window.innerWidth/2;
    var centerY = window.innerHeight/2;
    
    thecontrol.style.position = "absolute";
    
    thecontrol.style.left = (centerX - (thecontrol.offsetWidth/2)) + "px"; 
    thecontrol.style.top = (centerY - (thecontrol.offsetHeight/2)) + "px";     
}

function changeColor(control, category, color) {
    if(!__$(control)){
        return;
    }
    
    var thecontrol = __$(control);
    
    var path = thecontrol
    .getSVGDocument()
    .getElementById(category);
    path.style.setProperty("fill",color, "");
}

function sizeof(arr){
    if(typeof(arr) == "object"){
        var count = 0;
        
        for(var index in arr){
            count++;
        }
        
        return count;
    }
    return 0;
}

function selectedDistrictColor(){
    var selected = {};
    
    for(var i = 0; i < districts.length; i++){
        if(sizeof(nationalsites[districts[i]]) > 0){
            for(var site in nationalsites[districts[i]]){
                switch(nationalsites[districts[i]][site][2].toLowerCase()){
                    case "red":
                        selected[districts[i]] = "red";
                        break;
                    case "#ccf":
                        if(selected[districts[i]] != "red"){
                            selected[districts[i]] = "#ccf";
                        }
                        break;
                    case "#ffbf00":
                        if(selected[districts[i]] != "red" && selected[site] != "#ccf"){
                            selected[districts[i]] = "#ffbf00";
                        }
                        break;
                    case "green":
                        if(selected[districts[i]] != "red" && selected[districts[i]] != "#ccf" && 
                            selected[districts[i]] != "#ffbf00"){
                            selected[districts[i]] = "green";
                        }
                        break;
                }
            }
        } else {
            selected[districts[i]] = "white";
        }
    }
    
    return selected;
}

function nextTask(index){
    var token = (taskFlow[parseInt(index)] ? taskFlow[parseInt(index)] : null);
    
    if(token == null) {
        index = 0;
         
        token = (taskFlow[parseInt(index)] ? taskFlow[parseInt(index)] : null);        
    }
       
    if(!__$("banner")){        
        var banner = document.createElement("div");
        banner.style.position = "absolute";
        banner.id = "banner";
        banner.style.fontSize = "56px";
        banner.style.textAlign = "left";
        
        document.body.appendChild(banner);
    } else {
        __$("banner").innerHTML = "";
    }
         
    if(!__$("summary")){        
        var summary = document.createElement("div");
        summary.style.position = "absolute";
        summary.id = "summary";
        
        document.body.appendChild(summary);
    } else {
        __$("summary").innerHTML = "";
    }
           
    if(!__$("sitesummary")){        
        var sitesummary = document.createElement("div");
        sitesummary.style.position = "absolute";
        sitesummary.id = "sitesummary";
        
        document.body.appendChild(sitesummary);
        
        var variables = ["Connectivity", "Batteries", "System"];
        
        var table = document.createElement("div");
        table.className = "tbl";
            
        sitesummary.appendChild(table);
        
        for(var k = 0; k < variables.length; k++){            
            var row = document.createElement("div");
            row.className = "row";
            
            table.appendChild(row);
            
            var label = document.createElement("div");
            label.className = "cell";
            label.innerHTML = "<b>" + variables[k] + ":</b>  "; 
            
            row.appendChild(label);
            
            var field = document.createElement("div");
            field.id = variables[k].replace(/\'/g, "");
            field.className = "cell";
            field.style.fontStyle = "italic";
            
            row.appendChild(field);            
        }
    } else {        
        var variables = ["Connectivity", "Batteries", "System"];
        
        for(var k = 0; k < variables.length; k++){            
            __$(variables[k]).innerHTML = "";
        }
    }
                   
    if(!__$("sitepointer")){
        var sitepointer = document.createElement("div");
        sitepointer.style.position = "absolute";
        sitepointer.id = "sitepointer";
        
        document.body.appendChild(sitepointer);
    } else {
        __$("sitepointer").innerHTML = "";
    }
    
    for(var o in __$("slide").children){
        if(__$("slide").children[o].id != "malawi"){
            __$("slide").removeChild(__$("slide").children[o]);
        }
    }
    var control = null;
    
    var selected = selectedDistrictColor();
           
    var highlights = {};
            
    current_district = null;
            
    switch(token[0]){
        case "country":
            __$("slide").innerHTML = "";
            
            for(var d = 0; d < districts.length; d++){
                switch(districts[d]){
                    case "balaka":
                        mwsites["balaka"] = balakasites;
                        break;
                    case "blantyre":
                        mwsites["blantyre"] = blantyresites;
                        break;
                    case "chikhwawa":
                        mwsites["chikhwawa"] = chikhwawasites;
                        break;
                    case "chiradzulu":
                        mwsites["chiradzulu"] = chiradzulusites;
                        break;
                    case "chitipa":
                        mwsites["chitipa"] = chitipasites;
                        break;
                    case "dedza":
                        mwsites["dedza"] = dedzasites;
                        break;
                    case "dowa":
                        mwsites["dowa"] = dowasites;
                        break;
                    case "karonga":
                        mwsites["karonga"] = karongasites;
                        break;
                    case "kasungu":
                        mwsites["kasungu"] = kasungusites;
                        break;
                    case "likoma":
                        mwsites["likoma"] = likomasites;
                        break;
                    case "lilongwe":
                        mwsites["lilongwe"] = lilongwesites;
                        break;
                    case "machinga":
                        mwsites["machinga"] = machingasites;
                        break;
                    case "mangochi":
                        mwsites["mangochi"] = mangochisites;
                        break;
                    case "mchinji":
                        mwsites["mchinji"] = mchinjisites;
                        break;
                    case "mulanje":
                        mwsites["mulanje"] = mulanjesites;
                        break;
                    case "mwanza":
                        mwsites["mwanza"] = mwanzasites;
                        break;
                    case "mzimba":
                        mwsites["mzimba"] = mzimbasites;
                        break;
                    case "nkhatabay":
                        mwsites["nkhatabay"] = nkhatabaysites;
                        break;
                    case "nkhotakota":
                        mwsites["nkhotakota"] = nkhotakotasites;
                        break;
                    case "nsanje":
                        mwsites["balaka"] = balakasites;
                        break;
                    case "ntcheu":
                        mwsites["nsanje"] = nsanjesites;
                        break;
                    case "ntchisi":
                        mwsites["ntchisi"] = ntchisisites;
                        break;
                    case "phalombe":
                        mwsites["phalombe"] = phalombesites;
                        break;
                    case "rumphi":
                        mwsites["rumphi"] = rumphisites;
                        break;
                    case "salima":
                        mwsites["salima"] = salimasites;
                        break;
                    case "thyolo":
                        mwsites["thyolo"] = thyolosites;
                        break;
                    case "zomba":
                        mwsites["zomba"] = zombasites;
                        break;
                }
            }
            
            document.body.style.backgroundColor = "black";
            __$("banner").style.color = "white";
            __$("banner").style.backgroundColor = "black";
            __$("summary").style.backgroundColor = "#7bb77b";
                
            var malawi = document.createElement("canvas");
            malawi.width = coords["mw"][0];
            malawi.height = coords["mw"][1];
            malawi.id = "malawi";
            
            __$("slide").appendChild(malawi);
            
            var ctx = malawi.getContext('2d');
            
            mw(ctx, null, selected, mwsites);
            
            control = __$("malawi");
            
            __$("summary").style.display = "none";
            
            break;
        case "logo":
            __$("slide").innerHTML = "";
            __$("slide").appendChild(logo);
            control = __$(logo.id);
            
            __$("summary").style.display = "none";
            
            break;
        case "region":
            var rimg = document.createElement("canvas");
            rimg.width = coords[token[1]][0];
            rimg.height = coords[token[1]][1];
            rimg.id = token[1];
            
            __$("slide").appendChild(rimg);
            
            var ctx = rimg.getContext('2d');
            var mwctx = __$("malawi").getContext('2d');
            
            eval(token[1] + "(ctx, '#ccf')");
            
            control = __$(token[1]); 
            
            if(token[1] == "north"){
                __$("banner").innerHTML = "Northern Region";
                highlights = {
                    "chitipa":"red",
                    "karonga":"red",
                    "mzimba":"red",
                    "nkhatabay":"red",
                    "rumphi":"red"
                };
            } else if(token[1] == "centre"){
                __$("banner").innerHTML = "Central Region";
                highlights = {
                    "lilongwe":"red",
                    "kasungu":"red",
                    "mchinji":"red",
                    "dowa":"red",
                    "ntchisi":"red",
                    "salima":"red",
                    "nkhotakota":"red",
                    "ntcheu":"red",
                    "dedza":"red"
                }
            } else if(token[1] == "south"){
                highlights = {
                    "balaka":"red",
                    "blantyre":"red",
                    "mangochi":"red",
                    "zomba":"red",
                    "machinga":"red",
                    "chikhwawa":"red",
                    "mwanza":"red",
                    "mulanje":"red",
                    "phalombe":"red",
                    "nsanje":"red",
                    "thyolo":"red",
                    "chiradzulu":"red"
                }
                __$("banner").innerHTML = "Southern Region";
            }
            
            __$("malawi").height = __$("malawi").height;
            mw(mwctx, highlights, selected, mwsites);
            
            break;
        case "district":
            switch(token[1]){
                case "balaka":
                    balakasites = nationalsites["balaka"];
                    break;
                case "blantyre":
                    blantyresites = nationalsites["blantyre"];
                    break;
                case "chikhwawa":
                    chikhwawasites = nationalsites["chikhwawa"];
                    break;
                case "chiradzulu":
                    chiradzulusites = nationalsites["chiradzulu"];
                    break;
                case "chitipa":
                    chitipasites = nationalsites["chitipa"];
                    break;
                case "dedza":
                    dedzasites = nationalsites["dedza"];
                    break;
                case "dowa":
                    dowasites = nationalsites["dowa"];
                    break;
                case "karonga":
                    karongasites = nationalsites["karonga"];
                    break;
                case "kasungu":
                    kasungusites = nationalsites["kasungu"];
                    break;
                case "likoma":
                    likomasites = nationalsites["likoma"];
                    break;
                case "lilongwe":
                    lilongwesites = nationalsites["lilongwe"];
                    break;
                case "machinga":
                    machingasites = nationalsites["machinga"];
                    break;
                case "mangochi":
                    mangochisites = nationalsites["mangochi"];
                    break;
                case "mchinji":
                    mchinjisites = nationalsites["mchinji"];
                    break;
                case "mulanje":
                    mulanjesites = nationalsites["mulanje"];
                    break;
                case "mwanza":
                    mwanzasites = nationalsites["mwanza"];
                    break;
                case "mzimba":
                    mzimbasites = nationalsites["mzimba"];
                    break;
                case "nkhatabay":
                    nkhatabaysites = nationalsites["nkhatabay"];
                    break;
                case "nkhotakota":
                    nkhotakotasites = nationalsites["nkhotakota"];
                    break;
                case "nsanje":
                    balakasites = nationalsites["balaka"];
                    break;
                case "ntcheu":
                    nsanjesites = nationalsites["nsanje"];
                    break;
                case "ntchisi":
                    ntchisisites = nationalsites["ntchisi"];
                    break;
                case "phalombe":
                    phalombesites = nationalsites["phalombe"];
                    break;
                case "rumphi":
                    rumphisites = nationalsites["rumphi"];
                    break;
                case "salima":
                    salimasites = nationalsites["salima"];
                    break;
                case "thyolo":
                    thyolosites = nationalsites["thyolo"];
                    break;
                case "zomba":
                    zombasites = nationalsites["zomba"];
                    break;
            }
            
            var dimg = document.createElement("canvas");
            dimg.width = coords[token[1]][0];
            dimg.height = coords[token[1]][1];
            dimg.id = token[1];
            
            __$("slide").appendChild(dimg);
            
            var ctx = dimg.getContext('2d');
            var mwctx = __$("malawi").getContext('2d');
            
            highlights[token[1]] = "red";
            
            eval(token[1] + "(ctx, '" + (typeof(selected[token[1]]) != "undefined" ? 
                selected[token[1]] : "#ffffff") + "', " + token[1] + "sites)");
           
            control = __$(token[1]);  
                        
            __$("banner").innerHTML = token[1].toProperCase(); 
            
            __$("malawi").height = __$("malawi").height;
            mw(mwctx, highlights, selected, mwsites);
            
            __$("summary").style.display = "block";                
            
            var sites = eval(token[1] + "sites");
            
            var sitestring = "<ol id='siteslist'>";
            
            var j = 0;
            for(var site in sites){
                sitestring += "<li id='" + site.replace(/\'/g, "") + "'>" + site + "</li>";
                j++;
            }
            
            if(sitestring == "<ol id='siteslist'>"){
                sitestring = "<ul><li>No Sites Yet</li></ul>";
            } else {
                sitestring += "</ol>";
            }                       
            
            __$("summary").innerHTML = sitestring;
            
            current_district = token[1];
            
            break;
        default:
            control = __$("malawi");
            
            __$("summary").style.display = "none";
            
            break;
    }
    
    if(__$("malawi")){    
        if(count == 0){
            __$("banner").style.top = "20px";
            __$("banner").style.left = (window.innerWidth - 370) + "px";
        
            __$("malawi").style.top = (window.innerHeight - __$("malawi").offsetHeight - 30) + "px";
            __$("malawi").style.left = "30px";
        
            __$("summary").style.left = (window.innerWidth - 370) + "px";
            __$("summary").style.top = "100px";
        
            count = randomFromTo(0,3);
        } else if(count == 1){
            __$("banner").style.top = (window.innerHeight - 140) + "px";
            __$("banner").style.left = (window.innerWidth - 370) + "px";
                
            __$("malawi").style.top = (30) + "px";
            __$("malawi").style.left = "30px";
                
            __$("summary").style.left = (window.innerWidth - 370) + "px";
            __$("summary").style.top = "30px";
        
            count = randomFromTo(0,3);
        } else if(count == 2){
            __$("banner").style.top = (window.innerHeight - 140) + "px";
            __$("banner").style.left = (50) + "px";
        
            __$("malawi").style.top = "30px";
            __$("malawi").style.left = (window.innerWidth - __$("malawi").offsetWidth - 30) + "px";
        
            __$("summary").style.left = (50) + "px";
            __$("summary").style.top = "30px";
        
            count = randomFromTo(0,3);
        } else if(count == 3){
            __$("banner").style.top = (20) + "px";
            __$("banner").style.left = (50) + "px";
        
            __$("malawi").style.top = (window.innerHeight - __$("malawi").offsetHeight - 30) + "px";            
            __$("malawi").style.left = (window.innerWidth - __$("malawi").offsetWidth - 30) + "px";
        
            __$("summary").style.left = "30px";
            __$("summary").style.top = "100px";
        
            count = randomFromTo(0,3);
        }
    }
    
    if(control != null){
        
        control.style.height = (window.innerHeight / 2) + "px";             
    
        switch(token[2]){
            case "center":
                movetocenter(control.id);
                if(token[0] == "region" || token[0] == "district"){
                    fadein(control.id, index, true);
                } else {
                    fadein(control.id, index);
                }
                break;
            case "corner":
                shrinkto(control.id, 30, 30, index);
                break;
        }
    } 
}

function follow(control, size){
    
    if(__$(control).tagName.toUpperCase() == "EMBED"){
        var inner = __$(control).getSVGDocument();
            
        inner.height = "100%"; //size;        
    }
       
}
            
function draw(map, context, elem, color){
    elem.width = coords[map][0];
    elem.height = coords[map][1];
                
    // draw("chiradzulu", "ctx", "#9f9");
    eval(map + "(" + context + ", '" + color + "')");
}
        
function ajaxRequest(aUrl, method) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        handleResult(httpRequest, method);
    };
    try { 
        httpRequest.open('GET', aUrl, true);
        httpRequest.setRequestHeader("Cache-Control", "no-cache")
        httpRequest.send(null);
    } catch(e){
    }
}

function handleResult(aXMLHttpRequest, method) {    
    if (aXMLHttpRequest){
        if (aXMLHttpRequest.readyState == 4 && (aXMLHttpRequest.status == 200 || aXMLHttpRequest.status == 304)) {
            var result = aXMLHttpRequest.responseText;
        
            response = result;
            
            eval(method);
        }
    }
}

queryDistrict(0);
nextTask(0);