var a = 0;
var r = 300;
var segs = 100;

for(var k=0; k<5; k++){

    var round = new Path();
    
    for(var i=0; i <=segs; i++){
        var x = r * Math.cos(a);
        var y = r * Math.sin(a);
        round.add(new Segment(x,y));
        a += Math.PI*2/segs;
    }
}

var children = project.activeLayer.children;

for (var i=0; i<=children.length-1; i++){

    for(j=0; j<=children[i].segments.length-1; j++){
        noise.seed(Math.random())
        children[i].segments[j].point.x = r * Math.cos(a);
        children[i].segments[j].point.y = r * Math.sin(a);
        a += Math.PI*2/segs;
        r += noise.perlin2(x,y) * segs/5;
    }

    children[i].scale(i/5);
    children[i].selected = false;
    children[i].closed = true;
    children[i].smooth();
    children[i].position = view.center;
    children[i].strokeColor = 'black';
}

//----cool nest and scale-----

// noise.seed(Math.random())

// for(var i=0; i <=segs; i++){
//     var x = r * Math.cos(a);
//     var y = r * Math.sin(a);
//     round.add(new Segment(x,y));
//     a += Math.PI*2/segs;
//     r += noise.perlin2(x,y) * segs/5;
// }


// for(var i=0; i<=200; i++){
//     var roundClone = round.clone();
//     roundClone.scale(0.3 + (i/100));
//     //roundClone.selected = 'true';
//     roundClone.position = new Point(560,1250);
//     roundClone.strokeColor = 'black';
//     roundClone.smooth();
//     roundClone.close = true;
// }

//console.log(project.activeLayer.children[1].segments[1].point.x);


// for(var i = 0; i<project.activeLayer.children.length; i++){
//     project.activeLayer.children[i].segments[i].point.x
// }

















// this make one big spiral, not multiple "round" objects.
    // this explains the lines that intersect it. (closing the shape)

//console.log(round);
//round.strokeColor = '#5f9ea0';
//round.fillColor = 'black';
//round.strokeWidth = 3;


//for number of points
// change them with perlin
// maybe use 
//noise.seed(Math.random())
// var x = 0;
// var y = 0;
// var value = 0;
// for(var i=0; i <= circle.segments.length-1; i++){
//     // console.log("x: " + circle.segments[i].point.x);
//     //console.log(circle.segments[i].point)

//     x += 0.005;
//     y += 0.005;

//     //console.log(noise.perlin2(x,y));
    
//     // value = noise.perlin2(x,y);
//     // console.log(value);

//     // = noise.perlin2(x,y);
//     //circle.segments[i].point.y = y * 100;
//     //circle.segments[i].point.x
//     //console.log(noise.perlin2(x,y))

//     // x += 2;
//     // y += 2;
// }

//quick git check