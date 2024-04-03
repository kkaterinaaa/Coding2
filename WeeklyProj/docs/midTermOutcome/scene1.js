let darkCrowDest = [[149,160],[500,39],[500,435]];
let darkCrowExi = [1,1,0];
let blackRaven1 = [];
let darkCrowNum = 2;

function drawBranch(){
    push();
    stroke(255,255,255);
    strokeWeight(1);
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
    pop();
}