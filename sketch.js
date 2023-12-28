function setup() {
  createCanvas(720, 400);
  rectMode(CENTER);
}

function draw() {
  background(0);
  color("black")

  let constrainedX = constrain(mouseX, 0, width);
  let constrainedY = constrain(mouseY, 0, height);

  push();
  translate(constrainedX, constrainedY);
  rotate(frameCount / -100.0);
  color("yellow");  
  star(0, 0, 30, 70, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}