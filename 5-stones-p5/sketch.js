// let global = {
//     physics: matrProps,
//     scale: 1//change with input on the fly
    
// }

//
//try with circles, sqaures and triagnels first
//

// let stoneProps = {
//     size: random,
//     rad: noise(x, y, z)
// }

let stones = { //can I say "new stone" with this?
    stone1: function(){
        translate(mouseX, mouseY);
        fill(0);
        push();
        beginShape();
        let r = 50;
        let steps = 10;
        let a = 0;
        for(var i=0; i<=steps; i++){
            let x = r*cos(a);
            let y = r*sin(a);
            vertex(x, y);
            a+=PI/steps*2;
        }
        endShape();
        pop();
    },
    stone2: function(global,stoneProps){
        ellipse(width/2, height/2, 50)
    },
    stone3: function(){
        translate()
    }
}

//let go = new stones.stone1();

function mouseClicked(){
    addStones();
};

function addStones(){

};

function initStones(){
    //choose a stone from stones obj
    var s = round(random(1,3));
    let go = Object.values(stones)
    go.forEach(e => console.log(e));
    //or what if it was an array of object definitions then an index could be chosen at random?
}

function setup(){
    //add some stone to the screen
    //turn on the gravity
    createCanvas(windowWidth, windowHeight);
    initStones();
}

function draw(){
    background(255);
    stones.stone1();
}