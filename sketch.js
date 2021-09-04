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
  circle(mouseX, mouseY, d);
  prevX = mouseX;
  prevY = mouseY;
}
