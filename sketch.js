let prevX;
let prevY;

function setup() {
  createCanvas(400, 400);
  prevX = mouseX;
  prevY = mouseY;
}

function draw() {
  background(32);
  fill(200);
  noStroke();
  let d = dist(prevX, prevY, mouseX, mouseY);
  let w = noise(mouseX, mouseY);
  w = map(w, 0, 1, 45, 65);
  circle(mouseX, mouseY, d);
  rectMode(CENTER);
  rect(mouseX, mouseY, w, 5);
  prevX = mouseX;
  prevY = mouseY;
}