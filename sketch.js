var ship,shipImg1,edges;
var sea,seaImg;

function preload()
{
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png, ship-2.png, ship-3.png, ship-4.png");
}

function setup(){
  createCanvas(400,400);

  //creating ship 
  ship = createSprite(50,150,20,50);
  ship.addAnimation("moving", seaImg1);
  edge = createEdgeSprites();

  //scaling the ship
  ship.scale = 0.5;
  ship.x = 50;

  //adding sea
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImg); 
  sea.velocityX = -2;
}

function draw() {
  background("blue");
  drawSpites();
  if(keyDown("space")){
    ship.velocityY = -10;
  }

  ship.velocityY = ship.velocityY + 0.5;

  console.log(ship.x);

  trex.collide(sea);

  if (sea.x < 0)
  {
   sea.x = sea.width/2;
  }
}