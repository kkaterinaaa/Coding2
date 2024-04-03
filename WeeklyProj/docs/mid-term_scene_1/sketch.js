let whiteCrow;
let darkCrow = [];
let darkCrowNum = 2;
let darkCrowDest = [[149,209],[500,88],[500,484]];
let darkCrowExi = [1,1,0];
let maxS;
// let darkMove = 0;

function setup() {
  createCanvas(600, 600);
  
  whiteCrow = new WhiteCircle(200,200);
  
  for (i = 0; i < darkCrowNum; i ++) {
    darkCrow[i] = new DarkCircle(darkCrowDest[i][0],darkCrowDest[i][1]);
    darkCrow[i].m = i;
  }
//console.log(darkCrow[0].pos.x);
  // darkCrow2 = new DarkCircle(500,484);
}

function draw() {
  background(100);
  //branch on the left 
  line(0,500,40,360);
  line(40,360,200,300);
  line(130,328,190,340);
  line(80,345,120,195);
  line(100,270,130,225);
  line(130,225,168,225);//foothold 1
  
  //branch on the right top
  line(600,112,525,90);
  line(570,90,360,150);
  line(458,120,390,105);
  line(520,104,480,104);//foothold 2
  
  //branch on the right bottom
  line(600,450,500,545);
  line(560,488,520,500);
  line(520,500,480,500);//foothold 3
  
  whiteCrow.update();
  whiteCrow.show();
  
  for (let i = 0; i < darkCrowNum; i ++ ){
      let d = dist(whiteCrow.pos.x,whiteCrow.pos.y,darkCrow[i].pos.x,darkCrow[i].pos.y);

    if (d <= 50 && darkCrow[i].move == 0) {
      darkCrow[i].checkPos();      
      darkCrow[i].move = 1;
    }
  
    if (darkCrow[i].move == 1) {
      darkCrow[i].update();
      if (darkCrow[i].pos.x <= darkCrow[i].dest.x +10 && darkCrow[i].pos.x >= darkCrow[i].dest.x -10 && darkCrow[i].pos.y >= darkCrow[i].dest.y -10 && darkCrow[i].pos.y <= darkCrow[i].dest.y +10) {
        darkCrow[i].move = 0;
        darkCrow[i].vel.x = 0;
        darkCrow[i].vel.y = 0;
        darkCrow[i].pos = darkCrow[i].dest.copy(); 
        // darkCrow1.vel.copy(0,0);
        // darkCrow1.acc.copy(0,0);
      }
    }
  //console.log(darkCrow1.dest);

  darkCrow[i].show();
  
  }
  
  //console.log(darkCrow);
}