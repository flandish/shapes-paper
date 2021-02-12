//Insipred byt the manmade stone structures in the surrounding area
// — dry stone walls and cairns

//Each rock is proceduraly drawn and dropped in to a physics engine
//Interesting problem solving on telling a computer how to draw a rock


// let global = {
//     physics: matrProps,
//     scale: 1//change with input on the fly
    
// }

// let stoneProps = {
//     //size: random,
//     x: random(0,width),
//     y: random(0,height)
// }

var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var shaper = [];
var stones = [];

var ground;

// let stones = {//can I say "new stone" with this?
//     stone1: function(){
//         fill(0);
//         push();
//         translate(random(0,windowWidth), random(0,windowHeight));
//         beginShape();
//         let r = 50;
//         let steps = 10;
//         let a = 0;
//         for(var i=0; i<=steps; i++){
//             let x = r*cos(a);
//             let y = r*sin(a);
//             vertex(x, y);
//             a+=PI/steps*2;
//             //shape1.push({x:x, y:y});
//         }
//         endShape();
//         pop();
//     },
//     stone2: function(){
//         ellipse(random(0,windowWidth), random(0,windowWidth), 100)
//     },
//     stone3: function(){
//         rect(random(0,windowWidth),random(0,windowHeight), 100,100);
//     }
// }

function setup(){
    createCanvas(windowWidth, windowHeight);
    

    // strokeWeight(4);
    // push()
    // //translate(shape1.position.x, shape1.position.y);
    // beginShape();
    // let r = 50;
    // let steps = 10;
    // let a = 0;
    // for(var i=0; i<=steps; i++){
    //     let x = r*cos(a);
    //     let y = r*sin(a);
    //     vertex(x, y);
    //     a+=PI/steps*2;
    //     shaper.push({x:x, y:y});
    // }
    // endShape();
    // pop()



    engine = Engine.create();
    world = engine.world;
    //shape1 = Bodies.fromVertices(100,100,[{x:10, y:10},{x:100, y:100},{x:50, y:10},{x:50, y:10}]);
    // shape1 = Bodies.fromVertices(500,100,shaper);
    ground = Bodies.rectangle(0, windowHeight-20, windowWidth, 20, {isStatic: true})

    Engine.run(engine);
    // World.add(world, shape1);
    World.add(world,ground);
    
    stone1 = new Stone1(50,50);

}

function addStones(){
    new stones[Object.keys(stones)[round(random(0,2))]]
};

function mouseDragged(){
    stones.push(new Stone1(mouseX, mouseY));
};

function initStones(){

};

function draw(){
    background(255);
    stone1.show();
    stones.forEach(e => e.show())
}