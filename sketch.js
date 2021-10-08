var box1;

function setup() {
  createCanvas(400,400);
box1=createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
if (keyDown("Up")) {
  box1.y=box1.y+-10
}
if (keyDown("Down")) {
    box1.y=box1.y+10 
}
if (keyDown("Left")) {
  box1.x=box1.x+-10
}
if (keyDown("Right")) {
  box1.x=box1.x+10
}

drawSprites();
}




