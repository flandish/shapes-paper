//frank ● cloud 2020

//https://thecodingtrain.com/CodingChallenges/050.1-circlepackinganimated.html

//Make a circular shape
//Make an oval/oblong shape
//Make a placement grid of points
//Place big shapes
//fill gaps with smaller shapes
//Make the edges loosely drawn

//Maybe a random location is selected
//The first set of circles grow to a maximum (large)
//the next set find a spot and grow to a maxium (smaller)
//move until touching another circle

//maybe draw small circle
//scale to a maxium
//do circle packing
//if circle too small delete it
    //wee function like cirlceSizer() return Bool
//maybe every x times the circle is drawn the maximum size changes
//This would depend on how densley packed I want things to be

//maybe draw the bounds then the circles within the bounds

//NO! Not bounds because it won't allow to get to more interesting places between the circles
//THere could be an opertunity to slot in a good place, but it will see it as a rectangle

//PaperJS has bounding box and intersection functions

//Add some sort of 2D physics??

//For scaling
//Maybe it creates loads and as it's zoomed in the ones that clip the boundries are hidden
//Or mabe it tries to add more as it's sacaled

//------

let gravPoint = new Point(canvas.width/2, canvas.height/2);

let roundies = [];

//Make a blob
for (let i = 0; i <= 6; i++){

    noise.seed(Math.random())

    var segCount = 30;
    var r = 200;
    var a = 0;
    var segs = new Path();
    
    for(var j = 0; j <= segCount; j++){
        var x = r * Math.cos(a);
        var y = r * Math.sin(a);
    
        segs.add(new Segment(x,y));
    
        r += noise.perlin2(x,y) * segCount/2;
        a += Math.PI*2/segCount;

        //try the perfect circle then modify the points
        //want to get rid of that hook nose
        //Get the circle packing sorted first

    }
    segs.closed = true;
    segs.firstSegment.remove();
    segs.fillColor = new Color(0);
    segs.smooth();
    segs.scale(randomNumber(0.2,1));

    roundies.push(Object.create(segs));
}

roundies.map( e => {
    let randomPos = new Point(Math.random()*canvas.width, Math.random()*canvas.height);
    e.position = randomPos; //position has a vector associated with it
    
    pointy = new Path.Line(e.position, gravPoint);

    //console.log(e.rotation);

    e.selected = true;
    pointy.selected = true;
});




tool.onKeyDown = function (e){
    if (e.key == 'space') {

        roundies.forEach(e => {
            e.position.length -= 30;
            e.rotation += 30;
            console.log(e.point.length);
        });
        //roundies.forEach(e => (e.position.length - 10));
        //roundies.forEach(e => (e.fillColor = 'red'));
    }
}

//To-do
// [] pack circles
// [] pack circles to centre
// [] create oblong shape
// [] pack within a rectangle
// [] circles made without that weird nose

// function oblong(){ //Try this way then just try squeezing the other one for varied oblongers
//     var capSegCount = 40;
//     var middleSegCount = capSegCount/3;
//     var segLength = 10;
//     var r = 100;
//     var a = 0;
//     var segs = new Path();
//     var x = 0;
//     var y = 0;

//     var noiseMod = 30;
//     var radNoiseMod = noiseMod * capSegCount;

//     for(var i = 0; i <= capSegCount; i++){
//         x = r * Math.cos(a);
//         y = r * Math.sin(a);

//         segs.add(new Segment(x,y));

//         r += noise.perlin2(x,y) * capSegCount/noiseMod;
//         a += Math.PI/capSegCount;
//     }

//     for(var i = 0; i <= middleSegCount; i++){
//         x += noise.perlin2(x,y) * capSegCount/noiseMod
//         y -= segLength;
//         segs.add(new Segment(x,y));
//     }

//     for(var i = 0; i <= capSegCount-3; i++){
//         x = r * Math.cos(a);
//         y = r * Math.sin(a) - segLength * middleSegCount - segLength;

//         segs.add(new Segment(x,y));

//         r += noise.perlin2(x,y) * capSegCount/noiseMod;
//         a += Math.PI/capSegCount;
//     }

//     for(var i = 0; i <= middleSegCount; i++){
//         x += noise.perlin2(x,y) * capSegCount/noiseMod
//         y += segLength;
//         segs.add(new Segment(x,y));
//     }

//     segs.selected = false;
//     segs.position = new Point(randomNumber(0, canvas.width), randomNumber(0, canvas.height));
//     segs.closed = true;
//     segs.smooth();
//     segs.fillColor = new Color(0);

//     segs.scale(0.4)

// }

//oblong();

function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}