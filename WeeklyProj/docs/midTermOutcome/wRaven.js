let whiteRaven;

class wRaven{
    constructor(x,y){
        this.position = createVector(x,y);
        this.velocity = createVector(0,0);
        this.isMove = 0;
        this.gravity = createVector(0,0.2);

        this.beak = createVector(45,0);
        this.beakAngle = 0;

        this.isBark = 0;
        this.barkTimer = 0;

        this.wing = createVector(60,0);
        this.wingAngle = -20;
        this.wingSpeed = 3;
        
        this.blinkTimer = 0;
        
        this.isFly = 0;
       
      }
      
      show(){ 
        //wing
        if(this.isFly == 1){
            push();
            noStroke();
            fill(255,255,255);
            let wing1 = this.wing.copy();
            wing1.rotate(this.wingAngle);
            let wing2 = wing1.copy();
            wing2.setMag(50);
            wing2.rotate(25);
            let wingBase = createVector(this.position.x - 5 , this.position.y + 20);
            triangle(wingBase.x , wingBase.y , wingBase.x+wing1.x , wingBase.y+wing1.y , wingBase.x + wing2.x , wingBase.y + wing2.y);
            triangle(2*this.position.x - wingBase.x , wingBase.y , 2*this.position.x - wingBase.x-wing1.x , wingBase.y + wing1.y , 2*this.position.x - wingBase.x - wing2.x , wingBase.y + wing2.y);
            pop();

            this.wingAngle += this.wingSpeed;
            if(this.wingAngle >= 20 || this.wingAngle <= -30){
                this.wingSpeed *= -1;
            }
        }

        //body
        push();
        noStroke();
        fill(255,255,255);
        triangle(this.position.x,this.position.y,this.position.x-15,this.position.y+65,this.position.x+15,this.position.y+65);
        pop();

        //beak
        let upperBeak = this.beak.copy();
        upperBeak.rotate(-this.beakAngle);
        let lowerBeak = this.beak.copy();
        lowerBeak.rotate(this.beakAngle);
        
        let upper = upperBeak.copy();
        let lower = lowerBeak.copy();
        upper.div(3);
        upper.rotate(-90);
        lower.div(3);
        lower.rotate(90);
        
        push();
        noStroke();
        fill(255,255,255);
        triangle(this.position.x,this.position.y,this.position.x+upperBeak.x,this.position.y+upperBeak.y,this.position.x+upper.x,this.position.y+upper.y);
        triangle(this.position.x,this.position.y,this.position.x+lowerBeak.x,this.position.y+lowerBeak.y,this.position.x+lower.x,this.position.y+lower.y);
        pop();
        
        //head
        push();
        noStroke();
        fill(255,255,255);
        ellipse(this.position.x,this.position.y,30);
        strokeWeight(4);
        stroke(0,0,0);
        this.blink();
        pop();
      }
      
      blink(){
        if(random(0,100) <= 1){
          this.blinkTimer = frameCount;
        }
        if(frameCount - this.blinkTimer <=5){
          line(this.position.x-10,this.position.y,this.position.x+10,this.position.y);
        }else{
          ellipse(this.position.x,this.position.y,20);
        }
      }
      
      bark(){
        if(this.isBark == 0){
          this.isBark = 1;
          this.beakAngle += 15;
          this.barkTimer = frameCount;
          sound.play();
        }
        
        if(this.isBark == 1 && frameCount - this.barkTimer >40){
          this.beakAngle -= 15;
          this.isBark = 0;
        }
      }
      
      stare(m,n){
        let direction =  createVector(m-this.position.x,n-this.position.y);
        direction.setMag(45);
        this.beak = direction;
      }
      
      move(){
        if(this.isMove == 0 && keyCode == 39){
          this.velocity.x = 1;
          this.velocity.y = -2;
          this.isMove = 1;
          this.velocity.x *= this.isMove;
        }
        
        if(this.isMove == 0 && keyCode == 37){
          this.velocity.x = 1;
          this.velocity.y = -2;
          this.isMove = -1;
          this.velocity.x *= this.isMove;
        }
        
        if(this.isMove != 0 ){
            this.position.add(this.velocity);
            this.velocity.add(this.gravity);
            if(this.position.y>=535){
                this.velocity.y = 0;
                this.velocity.x = 0;
                this.position.y = 535;
                this.isMove = 0;
            }
        }
      }
      
      fly(){
        let a = createVector(mouseX - this.position.x,mouseY - this.position.y);
        a.mult(0.03);
        this.position.add(a);

        
      }
}