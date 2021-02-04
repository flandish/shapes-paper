//frank ● cloud 2020

var a = 0;
var r = 300;
var segs = 100;

//----

// var clipper = new Rectangle(new Point(0,0), new Point(canvas.width - 2200, canvas.height - 1000))
// var rectPath = new Path.Rectangle(clipper);
// rectPath.selected = true;

//var group = new Group(rectPath);
//group.clipped = true;

//----





//----

var round = new Path();

noise.seed(Math.random())

for(var i=0; i <=segs; i++){
    var x = r * Math.cos(a);
    var y = r * Math.sin(a);
    round.add(new Segment(x,y));
    a += Math.PI*2/segs;
    r += noise.perlin2(x,y) * segs/5;
}

for(var i=0; i<=200; i++){
    var roundClone = round.clone();
    roundClone.scale(0.2 + (i/10));
    //roundClone.selected = 'true';
    roundClone.position = new Point(800,1250);
    roundClone.strokeColor = 'black';
    roundClone.strokeWidth = 20;
    roundClone.smooth();
    roundClone.close = true;
    
    //group.addChild(roundClone);
}

//console.log(group.intersect(rectPath));


//----

var downloadAsSVG = function (fileName) {
   
    if(!fileName) {
        fileName = "paperjs_example.svg"
    }
 
    var url = "data:image/svg+xml;utf8," + encodeURIComponent(paper.project.exportSVG({asString:true}));
    
    var link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.click();
 }

 var t = new Tool();
   
 //Listen for SHIFT-P to save content as SVG file.
 t.onKeyUp = function(event) {
     if(event.character == "P") {
         downloadAsSVG("ohyeg");
     }
 }

//console.log(project.activeLayer.children[1].segments[1].point.x);

// for(var i = 0; i<project.activeLayer.children.length; i++){
//     project.activeLayer.children[i].segments[i].point.x
// }

//console.log(project.exportSVG({asString: true}));

//🎛 thoughts for using midi controller 🎛

//each param is assigned an input — makes easy to quickly play around and get ideas
//button to save settings — maybe all the variables are stored in JSON
//button to export as svg
//button to save seed number