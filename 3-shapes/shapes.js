//frank ● cloud 2020

//Build a lib of shapes.
//Do they exist as functions with params in args?
//Do i need to go down the bloody moddifier route again?



function weeStick(r,p){
    rect = new Path.Rectangle(p, new Size(randomNumber(50, 100)));
    //rect.bottomLeft = new Point(randomNumber(50,900));
    rect.selected = true;
    //console.log(rect.bottomLeft)
    rect.rotate(r);
}

function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}
for(var i = 0; i<=10; i++){
    weeStick(randomNumber(0,360), new Point(randomNumber(50,900), randomNumber(50,100)));
}