class Box{
    constructor(x, y, width, height) {
        var options = {
          restitution:0.8,
            friction:1.0
        }
        this.body = Bodies.rectangle(x, y, width/2, height/2, options);
        this.width = width;
        this.height = height;
        this.visibility = 255
        this.image = loadImage("rectIMG.png")
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width/2,this.height/2)
        pop();
        }else{
          World.remove(world,this.body)
          score++
          push();
          this.visiblity = this.visiblity-5;
          tint(255,this.visiblity)
          image(this.image,this.body.position.x,this.body.position.y,50,50)
          pop();
        }
      }
}