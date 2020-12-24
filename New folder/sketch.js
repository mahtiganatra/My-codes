let img;

function preload()
{
img = loadImage('christmas-trees-type-classic.jpg');
}

function setup() {
    img.resize(0,500);

  createCanvas(img.width, img.height);
  img.loadPixels();
}

function draw() {
  //creating functions for the fog
for(let i =0;i<10;i++){
  let x = random(0,width);
  let y = random(0,height);
  let r = random(15,mouseX/10);
  
  let c = img.get(x,y);

  noStroke();
  
    fog(x,y,r);
}
}

function fog(x,y,r)
{
    
    let c = img.get(x,y);
    fill(c[0],c[1],c[2],128);  

    ellipse(x,y,r);


  for(let i = 0;i<360;i +=random(15,45))
    {
      let rx = r/2 *sin(radians(i)) + random(-3,3);
      let ry = r/2 * cos(radians(i)) + random(-3,3);
      rect(x+rx, y +ry, r*0.25);
    }
}