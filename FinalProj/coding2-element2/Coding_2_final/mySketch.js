//This project is inspired by Reona396 https://openprocessing.org/sketch/1619397 and based on handsfree.js


let capture;//store the video capture object
let handsfree;//Variable for the Handsfree library instance, used for hand tracking
let isLoadedBothHands = false;//Flag to check if there is 2 hands detected
let currentStrokeColor; // line color


function setup() {
  
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.hide(); // Hide the video element, and just show the canvas

  // Initializes the Handsfree library for hand tracking
  handsfree = new Handsfree({ hands: true });
  handsfree.start();
  
  colorMode(HSB,360,100,100);
  let h = random(360);
  let s = 100;
  let b = 100;
  currentStrokeColor = color(h,s,b);
}

function draw() {
  background(255);

  //Mirroring to maks the left and right of the video on the canvas consistent with the left and right of the user in reality 
  push();
  translate(width, 0); 
  scale(-1, 1); 
  image(capture, 0, 0, width, height); 
  pop();

  //Checks if the handsfree model has detected hand data
  const handsData = handsfree.data?.hands;
  if (handsData?.multiHandLandmarks && handsData.multiHandLandmarks.length === 2) {
    //Pick a random color for lines every time 2 hands are detected
    let h = random(360);
    let s = 100;
    let b = 100;
    if (!isLoadedBothHands) {
      currentStrokeColor = color(h,s,b);
    }
    isLoadedBothHands = true;// Sets the flag to true when 2 hands are detected
    drawFingerTips(handsData.multiHandLandmarks[0], handsData.multiHandLandmarks[1]);// Calls the function to draw lines between hands
  } else {
    isLoadedBothHands = false;// Sets the flag to false if less than 2 hands are detected
  }
  
}

// // Draw straight lines between 2 hands detected
// function drawFingerTips(hand0, hand1) {
//   stroke(currentStrokeColor);
//   strokeWeight(2);

//   // Select keypoints
//   const selectedPoints = [1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 16, 17, 18, 20];

//   // Draw straight lines between 2 hands detected
//   for (let i = 0; i < selectedPoints.length; i++) {
//     const index = selectedPoints[i];
//     const x0 = width - hand0[index].x * width;
//     const y0 = hand0[index].y * height;
//     const x1 = width - hand1[index].x * width;
//     const y1 = hand1[index].y * height;
//     line(x0, y0, x1, y1);
//   }
// }

// Draw bezier curves between 2 hands detected
function drawFingerTips(hand0, hand1) {
  stroke(currentStrokeColor);
  strokeWeight(2);

  //Select keypoints
  const selectedPoints = [1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 16, 17, 18, 20];

  //Draw bezier curves between selected keypoints 
  for (let i = 0; i < selectedPoints.length; i++) {
    const index = selectedPoints[i];
    const x0 = width - hand0[index].x * width;
    const y0 = hand0[index].y * height;
    const x1 = width - hand1[index].x * width;
    const y1 = hand1[index].y * height;

    //Use Perlin noise to generate control points for the bezier curve
    const time = frameCount * 0.01;
    const ctrlX1 = (x0 + x1) / 2 + map(noise(time + i), 0, 1, -20, 20);
    const ctrlY1 = (y0 + y1) / 2 + map(noise(time + i + 5), 0, 1, -20, 20);
    const ctrlX2 = (x0 + x1) / 2 + map(noise(time + i + 10), 0, 1, -20, 20);
    const ctrlY2 = (y0 + y1) / 2 + map(noise(time + i + 15), 0, 1, -20, 20);

    noFill();
    bezier(x0, y0, ctrlX1, ctrlY1, ctrlX2, ctrlY2, x1, y1);
  }
}


