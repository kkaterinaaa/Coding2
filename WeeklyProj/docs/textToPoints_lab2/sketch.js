let x = [];
let y = [];
// let nextX;
// let nextY;
let a;
let r;
let angle = []; 
// Set the font size and the word to be displayed
let fontSize = 360
let word = "O"

// Preload function is used to handle asynchronous loading 
// of external files in a way that ensures that the sketch 
// does not start running until the files have been loaded
function preload() {
  // Load the font from a file
  font = loadFont('Raleway-Black.ttf')
}

function setup() {
  createCanvas(500, 500)  
  noStroke()
  
  // Convert the text to point data stored in array
  points = font.textToPoints(word, 0, 0, fontSize, {
    // Controls the number of points to draw, default is 0.1
    sampleFactor: 0.5 
  })
  
  console.log(points);
  
  // Grab the bounding box of the text
  let bounds = font.textBounds(word, 0, 0, fontSize);

  // Center text around the origin based on the bounding box.
  for (let pt of points) {
    pt.x = pt.x - bounds.x - bounds.w/2
    pt.y = pt.y - bounds.y - bounds.h/2
  }
  
  for(let i = 0 ; i < points.length ; i++){
    angle[i] = 0;
  }
}

function draw() {
  // Set the background color
  background(0);
  // Display the text at the bottom of the canvas
  text(word, 0, height, fontSize);
  
  // Translate the origin to the center of the canvas
  translate(width/2, height/2)
  
  // // For each point...
  //  points.forEach(function (pt) {
  //   // Draw something at x, y coord
  //   ellipse(pt.x, pt.y, 5)
  // })
  
  // points.forEach(function(pt){
  // a = map(mouseX, 0, abs(width/2), 0, 100)
  // r = noise(points.index + frameCount) *50
  // angle = noise(frameCount);
  // x = pt.x + r * cos (angle)
  // y = pt.y + r * sin (angle)
  // ellipse(x, y, 3)
  // })
  
  for (let i = 0; i < points.length - 1; i ++){
      a = map(mouseX, 0, abs(width/2), 0, 100);
      r = noise(i * 100 + a * 0.01) *30;
      angle[i] += noise(i * 100 + a * 0.05) * 0.05;
      x[i] = points[i].x + r * cos (angle[i]);
      y[i] = points[i].y + r * sin (angle[i]);
      nextX = points[i+1].x + r * cos (angle[i+1]);
      nextY = points[i+1].y + r * sin (angle[i+1]);
      stroke(255);
      strokeWeight(0.5);
      noFill();
      ellipse(x[i], y[i], 3);
      let lineLength = dist(x[i],y[i],nextX,nextY);
      if (lineLength < 50) {
      line(x[i], y[i], nextX, nextY);
      }
  }

}