var backgroImage,backgro;
var monkey,moneyImage;
var banana,bananaGroup,bananaImage;
var obstacle,obstaclesGroup,obstacleImage;
var ground;
var score;
var tryAgain, tryAgainIMG;
var theTint =0;
var balloonPop;
var thePow;
var PowIMG;
var log;

function preload() {
 backgroImage=loadImage("IMG_0707.PNG");
  
  monkeyImage=loadAnimation("Num1.PNG", "Num2.PNG","Num3.PNG","Num4.PNG");
 //"Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"
  bananaImage=loadImage("banana.png");//"//Square2.PNG"
  balloonPop = loadAnimation("Balloon/Ballon1.PNG","Balloon/Balloon2.PNG", "Balloon/Balloon3.PNG","Balloon/Balloon4.PNG", "Balloon/Balloon5.PNG","Balloon/Balloon6.PNG")
  
  obstacleImage=loadImage("stone.png");
  log = loadImage("Log2.png");

  tryAgainIMG = loadImage("Try Again.PNG");

   theSquare =loadImage("Square2.PNG"); 
   
   theBalloon = loadAnimation("Balloon/BalloonMain.PNG");

   PowIMG = loadImage("Pow.png");
}

function setup() {
  createCanvas(800,400);
  
  backgro=createSprite(200,200,800,400);
  backgro.addImage("backgro",backgroImage);
  //backgro.velocityX=-4;
  backgro.x=backgro.width/2;
  
  monkey=createSprite(450,360,20,20);
  monkey.addAnimation("monkey",monkeyImage);
  monkey.scale=0.05;
  //monkey.velocityX =4;
  bananaGroup=createGroup();
  
  obstaclesGroup=createGroup();
  //obstacle.addImage("stone",obstacleImage);
  
  ground = createSprite(400,368,10160,10);
  //ground.velocityX=-4;
  ground.visible=false;
 
  score=0;
}

function draw() {
  
  background("black");
 
  camera.position.x = monkey.x;
  camera.position.y = 200;
 // if(ground.x<0){
  // ground.x=ground.width/2; 
 // }
  
  //if(backgro.x<150){
  //  backgro.x=backgro.width/2;
  //}
  //cam = createCamera();
  //cam.setPosition(monkey.x, 400);

  if(keyIsDown(RIGHT_ARROW))
  {
    monkey.velocityX =4;
  }
  else
  {
    monkey.velocityX =0;
  }
  



  monkey.collide(ground);
  
  if(keyDown("space")&&monkey.y>80){
   monkey.velocityY=-10; 
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  spawnBanana();
  //Here! It goes here!
  
  switch(score){
    case 10 : monkey.scale=0.06; 
    break;
    case 20 : monkey.scale=0.07;
    break;
    case 30 : monkey.scale=0.08;
    break;
    case 40 : monkey.scale=0.09;
    break;
    default : break;
  }  
  score.x = camera.position.x;
  
  if(obstaclesGroup.isTouching(monkey)){

   //monkey.scale=0.1;
   obstaclesGroup.destroyEach(); 
  }
  
  
 
  
  spawnObstacles();
 
   
   
  
  
   
  drawSprites();
  if(bananaGroup.isTouching(monkey)){

    //bananaGroup.changeAnimationEach("pop",balloonPop);
  thePow = createSprite(camera.position.x,200,50,50);
  thePow.addImage(PowIMG,50,50);
  thePow.scale = 0.4;
  thePow.velocityX = -4;
    bananaGroup.destroyEach();
    score=score+2;

  }
  console.log(tryAgain);
  push();
 tint(255,theTint);
 image(tryAgainIMG,camera.position.x -404,camera.position.y + -200,800,400);
 tryAgainIMG.depth =12;
 pop();
    
  if(camera.position.x > 5800)
  {
    theTint = theTint+1;
    fill("white");

  textSize(18);
  text("You've reached",camera.position.x -46,camera.position.y-40);
  textSize(30);
    text("THE END",camera.position.x -50,camera.position.y);
  }
  

  // tryAgain = createSprite(tryAgainIMG,camera.position.x,camera.position.y,800,400);
  //stroke("black");
  textSize(20);
  fill("white");
  text("Score : "+ score,camera.position.x,50);
}

function spawnBanana(){
  if(monkey.velocityX > 2)
  {
    if(World.frameCount%80===0){
      banana=createSprite(camera.position.x + 300,200,20,20);
      banana.addAnimation("balloon",theBalloon);
      banana.scale=0.04;  
      banana.velocityX=-6;
      banana.y=random(120,250);
      banana.lifetime=200; 
      monkey.depth=banana.depth+1;
      bananaGroup.add(banana);
     }
  }
  
}

 function spawnObstacles(){
  if(monkey.velocityX > 2)
  {
    if(World.frameCount%250===0){
      obstacle=createSprite(camera.position.x + 300,360,20,20);
      obstacle.addImage("stone",log);
      obstacle.scale=0.6;
      obstacle.velocityX=-5;
      obstacle.lifetime=200;
      obstaclesGroup.add(obstacle);
     }
  }
 
}

  

