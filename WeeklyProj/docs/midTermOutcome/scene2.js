let blackRaven2 = [];
let lastAddedTime = 0;
let addInterval = 1000;

function applyForce(n){
    let a = createVector(whiteRaven.position.x - n.position.x, whiteRaven.position.y - n.position.y);
    a.setMag(0.3);
    n.velocity.add(a);
    n.velocity.limit(10);
}

function addSurroundingItem(){
    let edge = floor(random(4));
    let x, y;

    switch (edge) {
        case 0: //up edge
            x = random(width);
            y = 0;
        break;

        case 1: // right edge
            x = width;
            y = random(height);
        break;

        case 2: //down edge
            x = random(width);
            y = height;
        break;

        case 3: // left edge
            x = 0;
            y = random(height);
        break;
  }
  blackRaven2.push(new bRaven(x, y));
  blackRaven2[blackRaven2.length - 1].velocity.x = random (-5,5);
  blackRaven2[blackRaven2.length - 1].velocity.y = random (-5,5);
}