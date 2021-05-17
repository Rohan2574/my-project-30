class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.block1=loadImage("block.png")
      
    }
    display(){
      if(this.body.speed < 3){
        push();
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
        image(this.block1,0,0,this.width,this,height);
        pop(); 
      }
      else{
        World.remove(world,this.body)
        
        
      }
     
    }
}