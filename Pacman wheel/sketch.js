var segmentCount = 10;
var radius = 200;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  colorMode(HSB, 360, width, height);
  background(0, 0, height);

  //adding segments, smoothening the shape
  var angleStep = 180 / segmentCount;

  //adding the triangles in the circle and making the vertex of each triangle the same as the ellipse
  beginShape(TRIANGLE_FAN);
  vertex(width / 2, height / 2);

  //stating the angle of the ellipse, not 360 in order to create the pacman shape and placing the vertex
  for (var angle = 0; angle <= 300; angle += angleStep) {
    var vx = width / 2 + cos(radians(angle)) * radius;
    var vy = height / 2 + sin(radians(angle)) * radius;
    vertex(vx, vy);
    fill(angle, mouseX, mouseY);
  }

  endShape();

}
