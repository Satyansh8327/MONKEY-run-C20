
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  ground=createSprite(250,400,800,10);
  ground.velocityX=1;
  
  monkey=createSprite(100,370,0,0);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.09;

  
}


function draw() {
  background("blue")
  
  if (ground.x=600){
    ground.x=ground.width/2;
  }
  
  if (monkey.isTouching(ground)){
    monkey.velocityY=0;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground);
  
  spawnBanana();
  
  textSize(20);
  fill("red")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME :"+survivalTime,100,50)
  
drawSprites();
  
}

function spawnBanana(){
  if(frameCount%80===0){
  banana=createSprite(500,200,0,0);  
  banana.addImage(bananaImage)
  banana.scale=0.08  
  banana.velocityX=-3; 
  banana.y=Math.round(random(120,200))  
  banana.lifetime=200;  
}

}

function spawnObstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(250,400,0,0);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=1;
    obstacle.lifetime=200;
  }
}


