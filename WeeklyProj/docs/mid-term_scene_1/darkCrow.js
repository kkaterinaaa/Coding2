class DarkCircle {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel =createVector(0,0);
    // this.vel.mult(random(3));
    this.acc = createVector();
    this.dest = createVector(0,0);
    this.move = 0;
    this.m = -1;
    
  }
  
  checkPos() {
    // let s1 = dist(whiteCrow.pos.x,whiteCrow.pos.y,149,209); 
    // let s2 = dist(whiteCrow.pos.x,whiteCrow.pos.y,500,88);
    // let s3 = dist(whiteCrow.pos.x,whiteCrow.pos.y,500,484);
    // for (let i = 0; i <= 2 ; i++ ) {
    //   if ( darkCrowExi[i] = 0){
    //     darkCrowExi
    //   } 
    // }
    
    // for (let i = 0; i < darkCrowExi.length; i++) {
    //   if (darkCrowExi[i] == 0) {   
    //     let maxS = 0;
    //    }
    // }
    
    let n = floor(random(darkCrowExi.length));
    while(darkCrowExi[n] != 0){
       n =  floor(random(darkCrowExi.length));
    }
     let maxS = n;
      
    
    
    // console.log(maxS);
     
    
    if (maxS == 0){
      let a = createVector(149-this.pos.x,209-this.pos.y);
      this.acc = a.copy();
      this.dest.x = 149;
      this.dest.y = 209;
      darkCrowExi[this.m] = 0;
      darkCrowExi[0] = 1;
      this.m = 0;
    }
    
    if (maxS == 1){
      let a = createVector(500-this.pos.x,88-this.pos.y);
      this.acc = a.copy();
      this.dest.x = 500;
      this.dest.y = 88;
      darkCrowExi[this.m] = 0;
      darkCrowExi[1] = 1;
      this.m = 1;
    }
    
    if (maxS == 2){
      let a = createVector(500-this.pos.x,484-this.pos.y);
      this.acc = a.copy();
      this.dest.x = 500;
      this.dest.y = 484;
      darkCrowExi[this.m] = 0;
      darkCrowExi[2] = 1;
      this.m = 2;
      
    }
  }
  
  update() {

    this.acc.setMag(1);
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
  }
  
  show() {
    stroke(0);
    strokeWeight(2);
    fill(0);
    ellipse(this.pos.x,this.pos.y,32);
  }
}
