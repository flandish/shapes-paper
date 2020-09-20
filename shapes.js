// var circle = new Path.Circle(new Point(view.center, 0), 300);
// circle.fillColor = 'black';
// circle.flatten(2);
//circle.toPath(circle);
//console.log(circle.segments[10].point.x);

var round = new Path();
var a = 0;
var r = 400;
var segs = 100;

for(var i=0; i <=segs; i++){
    noise.seed(Math.random())
    var x = r * Math.cos(a);
    var y = r * Math.sin(a);
    round.add(new Segment(x,y))
    a += Math.PI*2/segs;
    r += noise.perlin2(x,y) * segs/5;
}

for(var i=0; i<=100; i++){
    var roundClone = round.clone();
    roundClone.scale(0.3 + (i/100));
    //roundClone.selected = 'true'
    roundClone.strokeColor = 'black';
    roundClone.position = new Point(view.center);
    roundClone.smooth();
}




// this make one big spiral, not multiple "round" objects.
    // this explains the lines that intersect it. (closing the shape)

//console.log(round);
//round.strokeColor = '#5f9ea0';
//round.fillColor = 'black';
//round.strokeWidth = 3;
round.closed = true;
//round.selected = true;
round.smooth();
round.position = new Point(view.center);

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