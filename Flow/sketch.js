//creating variables used in the code below 
var sketch = function(m) {
  var agents = [];
  var lineSpeed = 4000;
  var strokeScale = 700;
  var strokeStrength = 10;
  var bgOpacity = 10;
  var strokeOpacity = 70;
  var strokeWidth = 0.4;
  var drawMode = 1;
    
    

  m.setup = function() {
    m.createCanvas(m.windowWidth, m.windowHeight);
//stating the line speed and creating a function to make new lines
    for (var i = 0; i < lineSpeed; i++) {
      agents[i] = new Agent();
    }
  };
//creating the line and specifying the details
  m.draw = function() {
    m.fill(300, bgOpacity);
    m.noStroke();
    m.rect(0, 0, m.width, m.height);

    // Drawing the agents
    m.stroke(0, strokeOpacity);
    for (var i = 0; i < lineSpeed; i++) {
      if (drawMode == 1) agents[i].update1(strokeScale, strokeStrength, strokeWidth);
     
    }
  };

};

var myp5 = new p5(sketch);
