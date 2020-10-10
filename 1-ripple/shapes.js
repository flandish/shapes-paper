var a = 0;
var r = 300;
var segs = 100;

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
}

//console.log(project.activeLayer.children[1].segments[1].point.x);

for(var i = 0; i<project.activeLayer.children.length; i++){
    project.activeLayer.children[i].segments[i].point.x
}