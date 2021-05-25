var fixedRect,movingRect;
function setup() {
  createCanvas(400,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);


}

// M - F < 6/2 + 4/2
// F - M < 2/4 + 6/2

function draw() {
  background("teal");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="yellow";
fixedRect.shapeColor="orange";

}
  drawSprites();
}
