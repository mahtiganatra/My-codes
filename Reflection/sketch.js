function setup() {
  createCanvas(500, 500);
  background(0);
}
function draw(){
  //stating the details of the shapes to be created and making functions
  fill(0, 255);
  noStroke(); 
  makeShapes();
}
function makeShapes(){
  fill(random(255),random(255),random(255));
  //making the ellipses such that they move along with the cursor of the mouse//positioning the second ellipse in the reverse manner as the first to create them in the opposite directions
  ellipse(mouseX,mouseY,50,50);
  ellipse(mouseY,mouseX,50,50);
}