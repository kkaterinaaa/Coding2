class Vehicle {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.velocity = createVector(10, -1);
      this.acceleration = createVector(0, 0);
      this.r = 4;//粒子大小
      this.maxspeed = 10;
      this.maxforce = 0.5;
      this.isSeek = 0;
    }
  
    // Method to update location
    update() {
      this.velocity.add(this.acceleration);
      // Limit speed
      this.velocity.limit(this.maxspeed);
      this.position.add(this.velocity);
      // Reset accelerationelertion to 0 each cycle
      this.acceleration.mult(0);
    }
  
    applyForce(force) {
      this.acceleration.add(force);
    }
  
    // A method that calculates a steering force towards a target
    // STEER = DESIRED MINUS VELOCITY
    seek(target) {
      let desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
      // Scale to maximum speed
      desired.setMag(this.maxspeed);
      // Steering = Desired minus velocity
      let steer = p5.Vector.sub(desired, -this.velocity);
      steer.limit(this.maxforce); // Limit to maximum steering force
      this.applyForce(steer);
    }
  
    around(){
      let a = createVector(300-this.position.x,-1);
      a.limit(0.2);
      this.acceleration = a.copy();
    }
    explode(){
      let a = createVector(this.position.x-300,this.position.y-300);
      this.acceleration.mult(0);
      this.velocity  = a.copy();
      this.velocity.mult(2);
    }
  
    show() {
      if (1) { // 只有当图像可见时才显示
        //{!1} Vehicle is a triangle pointing in the direction of velocity
        let angle = this.velocity.heading();
        //黑乌鸦矢量图
        fill(255);
        noStroke();
        ellipse(this.position.x, this.position.y, this.r * 2); // 使用圆形显示向量图对象
      }
    }
  }