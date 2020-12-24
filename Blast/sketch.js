


 //order vs random!
 //how to interpolate beetween a free composition (random) and a circle shape (order)
  


var sketch = function(p) {

  var actRandomSeed = 0;
  var count = 5000;

  setup = function() {
    createCanvas(500,500);
    //setting ellipse/symbol as the cursor
    cursor(CROSS);
    noStroke();
    fill(random(255),random(255),random(255));
  };

  draw = function() {
    background(0);

    var faderX = mouseX / width;

    randomSeed(actRandomSeed);
    var angle = p.radians(360 / count);
    for (var i = 0; i < count; i++) {
      // positions
      var randomX = random(0,width);
      var randomY = random(0,height);
      var circleX = width / 2 + cos(angle * i) * 80;
      var circleY = height / 2 + sin(angle * i) * 80;

      //to calsucalte the numbers between two specified numbers
      var x = lerp(randomX,circleX,faderX);
      var y = lerp(randomY,circleY,faderX);

      
      //create the ellipse that form the shape
      fill(random(255),random(255),random(255));
      ellipse(x,y,4,4);
    }
  };


};

var myp5 = new p5(sketch);
