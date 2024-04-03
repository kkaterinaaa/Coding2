//inspired by Jon E. Froehlich https://makeabilitylab.github.io/physcomp/communication/handpose-serial

// Declare variables to store the HandPose model, video, current hand pose data, and a flag to check model initialization
let handPoseModel;
let video;
let curHandPose = null;
let isHandPoseModelInitialized = false;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide(); // Hide the video element, and just show the canvas

  // Load the HandPose model.
  handPoseModel = ml5.handpose(video, () => {
    console.log("HandPose model ready!");
    isHandPoseModelInitialized = true;//model intitializaed
  });

  // Call onNewHandPosePrediction every time a new handPose is predicted
  handPoseModel.on("predict", onNewHandPosePrediction);

  colorMode(HSB, 360, 100, 100); //Set colormode
}

function draw() {
  image(video, 0, 0, width, height);

   // If there is a hand, draw the hand landmarks and skeleton
  if (curHandPose) {
    drawHand(curHandPose);
  }
}

//Update hand pose data
//this part is from code by Jon E. Froehlich  https://editor.p5js.org/jonfroehlich/sketches/Nn4pXTpbu
function onNewHandPosePrediction(predictions) {
  if (predictions && predictions.length > 0) {
    curHandPose = predictions[0];
  } else {
    curHandPose = null;
  }
}

//Draw ellipses on the detected keypoints
function drawHand(handPose) {
  let baseSize = 8; // base size of the keypoints
  let maxSize = 12; // max size of the keypoints
  let sizeVariation = sin(frameCount / 10) * (maxSize - baseSize) / 2 + (maxSize + baseSize) / 2;//keypoints size animation

  //This part is inspired by https://openprocessing.org/sketch/1619397 and chatGPT 
  handPose.landmarks.forEach((point, index) => {
    const [x, y, z] = point;//get x, y, z coordinates of each keypoint
    fill((frameCount * 2 + index * 15) % 360, 100, 100);//color animation
    ellipse(x, y, sizeVariation, sizeVariation);// Draw an ellipse for each keypoint
  });

  strokeWeight(2);//stroke weight for drawing skeleton lines
  
  //Draw shapes along skeleton lines with keypoints as vertices
  for (let partName in handPose.annotations) {
    let points = handPose.annotations[partName];
    stroke((frameCount * 2) % 360, 100, 100);//stroke animation
    beginShape();
    points.forEach((point) => {
      const [x, y] = point;
      vertex(x, y);
    });
    endShape();
  }
}
