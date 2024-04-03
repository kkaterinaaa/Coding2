class WhiteCircle {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    //this.vel = p5.Vector.random2D();
    //this.vel.mult(random(3));

    
  }
  
  update() {
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(1);
    this.vel.add(this.acc);
    this.vel.limit(6);
    this.pos.add(this.vel);
    if (this.pos.x >= mouseX -2 && this.pos.x <= mouseX +2 && this.pos.y >= mouseY -2 && this.pos.y <= mouseY +2){
      this.acc.x = 0;
      this.acc.y = 0;
      this.vel.x = 0;
      this.vel.y = 0;
    } 
  }
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill(255);
    ellipse(this.pos.x,this.pos.y,32);
  }
}
