var wall,wallImage, thickness;
var speed, weight;
var bullet,bulletImage;
var damageBox;
var road, roadImage;
var gunSound;

function preload(){

bulletImage = loadImage ("bullet.png");
roadImage = loadImage ("road.png");
wallImage = loadImage ("wall.png");
gunSound = loadSound ("gunSound.mp3")

}

function setup() {
  createCanvas(1243,400);
  speed = random(65,100);
  weight = random(400,1500);

  thickness = random(22,63)

  road = createSprite(340, 200);
  road.addImage(roadImage);
  road.scale = 0.4

  wall = createSprite(1150, 200, thickness, height/2);
  wall.debug = false;

  bullet = createSprite(50, 200);
  bullet.velocityX = speed;
  bullet.addImage(bulletImage);
  bullet.scale = 1
  bullet.debug = false
  bullet.setCollider("rectangle",0, 0, 1,1);

  damageBox = createSprite(700, 50, 50, 50);

}   

function draw() {
  background("lightgreen");    

  if(wall.x-bullet .x < (bullet. width+wall.width)/2)
  {
  bullet . velocityX=0;

  var deformation=0.5 * weight * speed* speed/22509;
  if (deformation>180)
  { 
  damageBox . shapeColor=color(255, 0,0);

  stroke ("black");
  fill ("red");
  textSize(25);
  text("material is not good!",550,350);

  }
  if(deformation <180 && deformation>100)
  {
  damageBox . shapeColor=color (230, 230,0) ;

  stroke ("black");
  fill ("yellow");
  textSize(25);
  text("material is average!",550,350); 


  }
  if (deformation<100)
  {
    damageBox . shapeColor=color(0, 255,0) ;

    stroke ("black");
    fill ("green");
    textSize(25);
    text("material is very good",550,350); 

  }
}
  drawSprites();
  stroke ("black");
  fill ("blue");
  textSize(20);
  text("Damage = ",570,55);

}
