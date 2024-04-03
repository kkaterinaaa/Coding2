let scene = 0;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    whiteRaven = new raven(300,300);
  }
  
  function draw() {
    background(10);
    // triangle(290,320,355,320,345,345);
    // triangle(310,320,245,320,255,345);
    whiteRaven.show();
    whiteRaven.fly();
    whiteRaven.isFly = 1;
    
    if(mouseIsPressed || whiteRaven.isBark == 1){
      whiteRaven.bark();
    }
    
    whiteRaven.stare(mouseX,mouseY);
    
    if(keyIsPressed || whiteRaven.isMove != 0){
      whiteRaven.move();
    }
    
  }