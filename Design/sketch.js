

 //* A chain of linked pendulums. Each increasing in speed and decreasing in length as compared to the one its connected to.
// every pendulum, while moving forward makes a pattern behind due to difference in speed and length

var shape;
var joints = 3;
var lineLength = 150;
var speedRelation = 4;
var center;
var pendulumPath;
var angle = 0;
var maxAngle = 360;
var speed;

var showPendulum = true;
var showPendulumPath = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(300)
  colorMode(HSB, 360, 100, 100, 100);
  noFill();
  strokeWeight(8);

  center = createVector(width / 2, height / 2);

  startDrawing();
}

function startDrawing() {
  pendulumPath = [];
  // new empty array for each joint
  for (var i = 0; i < joints; i++) {
    pendulumPath.push([]);
  }

  angle = 0;
  //using pow to increase the size of the ellipse
  speed = (9 / pow(1.75, joints - 1) / pow(2, speedRelation - 1));
}

function draw() {
  background(0, 0, 100);

  angle += speed;

  // each frame, create new positions for each joint
  if (angle <= maxAngle + speed) {
    // start at the center position
    var pos = center.copy();

    for (var i = 0; i < joints; i++) {
      var a = angle * pow(speedRelation, i);
      if (i % 2 == 1) a = -a;
      var nextPos = p5.Vector.fromAngle(radians(a));
      nextPos.setMag((joints - i) / joints * lineLength);
      nextPos.add(pos);

      if (showPendulum) {
        noStroke();
        fill(0, 10);
        ellipse(pos.x, pos.y, 3, 3);
        noFill();
        stroke(0, 10);
        line(pos.x, pos.y, nextPos.x, nextPos.y);
      }

      //leaving behind a trail after every point of motion in the pendulum 
      pendulumPath[i].push(nextPos);
      pos = nextPos;
    }
  }

  // drawing the path for each joint
  if (showPendulumPath) {
    strokeWeight(2);
    for (var i = 0; i < pendulumPath.length; i++) {
      var path = pendulumPath[i];

      
      //creating the design with only the borders and no fill
      beginShape();
      var hue = map(i, 0, joints, 120, 360);
      stroke(hue, 80, 60, 50);
      for (var j = 0; j < path.length; j++) {
        vertex(path[j].x, path[j].y);
      }
      endShape();
    }
  }
}


