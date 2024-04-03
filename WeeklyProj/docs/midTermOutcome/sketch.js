let scene = 0;
let sound;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    whiteRaven = new wRaven(300,300);

    for (i = 0; i < darkCrowNum; i ++) {
        blackRaven1[i] = new bRaven1(darkCrowDest[i][0],darkCrowDest[i][1]);
        blackRaven1[i].m = i;
    }

    for (let i = 0; i < numVehicles; i++) { // 创建缠绕鼠标的向量图对象
        //vehicles.push(new Vehicle(random(0, width*1.5), random(height * 1.5, height * 3))); // 初始的y坐标设定
        let n = new Vehicle(random(width*(-0.5), width*1.5), random(height,height*1.5));
        n.velocity.x = 20/((300 - n.position.x)+20);
        n.velocity.y = -20/(abs(300 - n.position.x)+5);
        vehicles.push(n); // 初始的y坐标设定
    }
    
  }
  
  function draw() {
    background(10);
    switch(scene){
        case 0:
            frameRate(8);
            switch (stage) {
                case 1:
            
                    animationPlaying1 = true;
                    play1();
                    break;
                case 2:
                    animationPlaying2 = true;
                    play2();	
                    break;
                case 3:
                    animationPlaying3 = true;
                    play3();
                    break;
            
                case 4:
                        animationPlaying4 = true;
                        play4();
                        break;
                case 5:
                    animationPlaying5 = true;
                    play5();
                    break;
            
                case 6:
                    animationPlaying6 = true;
                    play6();
                    break;
                } 
        

            break;
        
        case 1:
            frameRate(60);
            drawBranch();

            whiteRaven.show();
            whiteRaven.fly();
            whiteRaven.isFly = 1;
            whiteRaven.stare(mouseX,mouseY);
            if(mouseIsPressed || whiteRaven.isBark != 0){
                whiteRaven.bark();
            }

            for(let i = 0 ; i < blackRaven1.length;i++){
                blackRaven1[i].show();
                blackRaven1[i].stare(whiteRaven.position.x,whiteRaven.position.y);
                if(random(0,150) <= 1 || blackRaven1[i].isBark == 1){
                    blackRaven1[i].bark();
                }

                let d = dist(whiteRaven.position.x,whiteRaven.position.y,blackRaven1[i].position.x,blackRaven1[i].position.y);
                if(d <= 100 && blackRaven1[i].move == 0){
                    blackRaven1[i].checkPos();
                    blackRaven1[i].move = 1;
                }
                if(blackRaven1[i].move == 1){
                    blackRaven1[i].position.add(blackRaven1[i].velocity);
                    blackRaven1[i].isFly = 1;
                    if (blackRaven1[i].position.x <= blackRaven1[i].dest.x +5 && blackRaven1[i].position.x >= blackRaven1[i].dest.x -5 && blackRaven1[i].position.y >= blackRaven1[i].dest.y -5 && blackRaven1[i].position.y <= blackRaven1[i].dest.y +5) {
                        blackRaven1[i].move = 0;
                        blackRaven1[i].velocity.mult(0);
                        blackRaven1[i].position = blackRaven1[i].dest.copy(); 
                        blackRaven1[i].isFly = 0;
                      }
                }

            }
            break;

        case 2:
            whiteRaven.show();
            whiteRaven.fly();
            whiteRaven.isFly = 1;
            whiteRaven.stare(mouseX,mouseY);
            if(mouseIsPressed || whiteRaven.isBark != 0){
                whiteRaven.bark();
            }

            for(let i = 0 ; i < blackRaven2.length ; i++){
                blackRaven2[i].isFly = 1;
                blackRaven2[i].show();
                blackRaven2[i].position.add(blackRaven2[i].velocity);
                blackRaven2[i].stare(whiteRaven.position.x,whiteRaven.position.y);
                if(random(0,150) <= 1 || blackRaven2[i].isBark == 1){
                    blackRaven2[i].bark();
                }
                applyForce(blackRaven2[i]);

            }

            if (millis() - lastAddedTime > addInterval && blackRaven2.length <= 10) {
                addSurroundingItem();
                lastAddedTime = millis();
            }
            break;

        case 3:
            whiteRaven.position.x = 300;
            whiteRaven.position.y = 300;
            whiteRaven.show();

        p = createVector(random(width), 200);
        for (let i = 0; i < numDrop; i++){ // 
          drops.push(new Drop(random(width), height)) // 从底部开始生成
        }
        
        for (let d of drops){
          d.show();
          d.update();
        }

        for (let i = 0; i < vehicles.length; i++) {
            let mouse = createVector(300, 300);
            if(vehicles[i].position.y>=300 && vehicles[i].isSeek == 0){
            vehicles[i].around();
            }else{
              vehicles[i].isSeek = 1;
            }
        
            if(vehicles[i].isSeek == 1 && exploded == 0){
              vehicles[i].seek(mouse);
            }
            vehicles[i].update();
            vehicles[i].show();
            
          }

          if(mouseIsPressed){
            for(let i = 0; i<vehicles.length;i++){
                vehicles[i].explode();
                }
                exploded = 1;
                whiteRaven.isFly = 1;
          }
            break;
    }
    
  }

  function keyPressed(){
    if(keyCode == 32){
        scene ++;
    }
  }