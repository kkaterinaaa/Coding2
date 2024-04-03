import { createNoise4D } from 'https://cdn.skypack.dev/simplex-noise@4.0.0'
import { mountFlex } from "https://cdn.jsdelivr.net/npm/p5.flex@0.0.0/src/p5.flex.mjs"

let font, points;
let fontSize = 360;

function preload() {
  font = loadFont('Raleway-Black.ttf');
}

function setup() {
  createCanvas(600, 600);
  noLoop();  // Stops draw() from looping
  background(0);
  fill(255);
  noStroke();
  textSize(fontSize);
  textAlign(CENTER, CENTER);

  points = font.textToPoints('K', 0, 0, fontSize, {
    sampleFactor: 0.25,
    simplifyThreshold: 0
  });

  let bounds = font.textBounds('K', 0, 0, fontSize);
  translate(width / 2 - bounds.w / 2, height / 2 - bounds.h / 2);

  points.forEach(pt => {
    ellipse(pt.x, pt.y, 5, 5);
  });
}

function draw() {
  background(0);

  const t = frameCount * 0.01;  // Adjust speed as needed
  points.forEach(pt => {
    const noiseScale = 0.005;  // Adjust scale as needed
    const nx = noise(pt.x * noiseScale + 100, pt.y * noiseScale + 200, cos(t), sin(t)) * 50;  // 50 is the noiseWeight
    const ny = noise(pt.x * noiseScale + 300, pt.y * noiseScale + 400, cos(t), sin(t)) * 50;
    ellipse(pt.x + nx, pt.y + ny, 5, 5);  // Adjust ellipse size as needed
  });
}
