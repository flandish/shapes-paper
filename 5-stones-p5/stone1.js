function Stone1(x,y){
    verts = [];

    //needed for verts
    let r = 50;
    let steps = 10;
    let a = 0;
    for(var i=0; i<=steps; i++){
        let x = r*cos(a);
        let y = r*sin(a);
        vertex(x, y);
        a+=PI/steps*2;
        verts.push({x:x, y:y});
    }

    this.body = Bodies.fromVertices(x,y,verts);
    World.add(world, this.body);

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        beginShape();
        // let r = 50;
        // let steps = 10;
        // let a = 0;
        for(var i=0; i<=steps; i++){
            let x = r*cos(a);
            let y = r*sin(a);
            vertex(x, y);
            a+=PI/steps*2;
            verts.push({x:x, y:y});
        }
        endShape();
        pop();
    }

    this.modify = function(){
        //change size

    }
}