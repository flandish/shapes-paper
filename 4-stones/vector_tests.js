let middle = new Point(canvas.width/2, canvas.height/2)

//create line pointing towards 'middle'

var r = 300;
var a = 0;

var num = 30;

for (let i = 0; i <= num; i++){

    let pos = new Point(r*Math.cos(a), r*Math.sin(a));

    let liner = new Path.Line(middle, pos+middle);
    let pointy = new Path.Circle(pos + middle, 20);
    liner.strokeColor = 'white';
    pointy.strokeColor='white';

    //let pointy = new Path.Line(pos)
    //point.strokeColor = 'white';
    

    //r += 30;
    a += Math.PI*2/num;

    //pointy.selected=true;
}

