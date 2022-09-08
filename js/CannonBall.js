class CannonBall {
    constructor(x, y) {
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
            isStatic: true
        };
        this.r = 40;
        //corpo circular para as bolas de canhão
        this.body = Bodies.circle(x, y, this.r, options);
        //carregue a imagem para o corpo 
        this.image = loadImage("./assets/cannonball.png");

        World.add(world, this.body);
    }

    shoot() {
        var velocity = p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {x:velocity.x, y:velocity.y});
    }

    display() {
      var angle = this.body.angle;
      var pos = this.body.position;  
      //ellipse(pos.x, pos.y, this.r, this.r)
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r)
      pop();
    }
}