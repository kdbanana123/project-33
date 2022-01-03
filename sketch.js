var backgroundImg, snowflakeGroup, snowflakeImg, penguin, penguinImg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
function preload(){
  backgroundImg = loadImage("snow2.jpg")
  snowflakeImg = loadImage("snow4.webp")
  penguinImg = loadImage("penguin.png")
}
function setup() {
  createCanvas(800,400);
  snowflakeGroup = createGroup();
  penguin = createSprite(200,300,30,30);
  penguin.addImage(penguinImg);
  penguin.scale = 0.1;
}

function draw() {
  background(backgroundImg);  
  spawnSnowflakes();
  drawSprites();
}
function spawnSnowflakes() {
  if (frameCount % 30 === 0) {
    var snowflake = createSprite(600,0,40,10);
    snowflake.x = Math.round(random(20,780));
    snowflake.addImage(snowflakeImg);
    snowflake.scale = 0.2;
    snowflake.velocityY = 4;
    snowflake.lifetime = 200;
  

    snowflakeGroup.add(snowflake);
  }
}

