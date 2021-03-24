class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'density':1,
		'friction': 5,
		'restitution':0.3
	  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	
	display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        stroke('yellow');
        strokeWeight(4);
        fill("green");
        ellipse(0,0,this.r);
        pop();
    }
}