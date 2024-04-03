class Drop{
    constructor(x, y){
      this.pos = createVector(x, y)
      this.vel = createVector(0, random(-5, -8)) // 向上移动的速度
      this.length = random(40, 80)
      this.strength = random(200, 255)
      this.weight = random(1, 4); // 设置线条粗细范围
    }
    show(){
      stroke(255, this.strength);
      strokeWeight(this.weight); // 设置线条粗细
      line(this.pos.x+mouseX/10, this.pos.y+mouseX/10, this.pos.x+mouseX/10, this.pos.y-this.length+mouseX/10)
    }
    
    update(){
      this.pos.add(this.vel)
      if (this.pos.y < -150){ // 修改条件，使其在超出画布上方一定距离时移除
        drops.shift()
      }
    }
    
  }