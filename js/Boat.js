class Boat {
    constructor(x, y, width, height, boatPos) {

        var options ={
            restitutin: 0.8,
            friction: 1.0,
            density: 1.0,

        }
     
     
    
      this.Body = Bodies.rectangle(x, y, width, height, options);
      
      this.width = width;
      this.height = height;

      this.boatPosition = boatPos;
      this.image = loadImage('./assets/boat.png');
      
      World.add(world, this.body);
    }
    display(){
         var pos = this.body.position

         push();
         translate(pos.x, pos.y);

         imageMode(CENTER);
         image(this.image, 0, this.boatPosition, this.width, this.height);
         pop();

    }
}  