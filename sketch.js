var man
//var PLAY = 1;
//var END = 0;
//var gameState = PLAY
var gameState = "WAITING";

function preload(){ 
man=loadAnimation("1.png","2.png","3.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png")
  
  haunted=loadImage("back.png")
  ghost=loadImage("ghost.png")
  ghost1=loadImage("ghost1.png")
 gameend=loadImage("over.png")
  replay=loadImage("RESTART.png")
  gamenew=loadImage("new.png")
}

function setup(){
  
   createCanvas(800,400);
  
  haunt=createSprite(330,200,100,100)
  haunt.addImage(haunted)
  haunt.scale=0.9
  
 player=createSprite(80,330,50,50) 
  player.addAnimation("qwe", man )

  Over=createSprite(400,200,10,10)
  Over.addImage(gameend)
  Over.scale=0.5
  Over.visible=false
  
  restart=createSprite(400,300,10,10)
  restart.addImage(replay)
  restart.scale=0.5
  restart.visible=false
  
  playiMG=createSprite(400,200,10,10)
  playiMG.addImage(gamenew)
  playiMG.visible=false
  
  
  obstacleGroup=new Group() 
  
  score = 0
 // var survivalTime = 0

  
}

function draw()
{
  text("Score: "+ score, 500,50);
   // text( " survivalTime:"+ score, 500,50);
  
  background("lightblue")
  
  
  if(gameState==="WAITING")
    {
     playiMG.visible=true 
          obstacleGroup.destroyEach()
       if(mousePressedOver(playiMG))
         {
      gameState="play"
           playiMG.visible=false
         }
      
   }

    if (gameState==="play")
    {
       score = score + Math.round(getFrameRate()/60);
      // survivalTime = survivalTime+ Math.round(getFrameRate()/60);
      
                       if  (keyWentDown("space")) 
                       {

                     // player.velocityX=0
                      player.velocityY=-10
                       }  

                  player.velocityY=player.velocityY+1


                 if (obstacleGroup.isTouching(player))
                 {

                     gameState = "END";
              //     player.velocityY = 0 

                 }
      
      
    }
  
   else if (gameState === "END") 
   {
     
        player.velocityY = 0; 
      obstacleGroup.setVelocityXEach(0);
     Over.visible=true
     restart.visible=true
     
     
      if(mousePressedOver(restart)) 
      {
     Over.visible = false
            restart.visible = false;
        gameState = "play"
         obstacleGroup .destroyEach()
        score=0
      }
   }
  
  
  
  
   
  
    //player.velocityY=player.velocityY+1
  
  edges=createEdgeSprites()
  
 player.collide(edges)
 
 spawnghost()
drawSprites();

   fill("red")
  text("Score:"+score,230,30)
  
  if (gameState==="WAITING"){
  text("press play to start",400,20);
      text("press spacekey to jump",100,20);
      fill("red")
  }
} 
  
function spawnghost(){
  
    if (frameCount % 80 === 0) {
      
    obstacles=createSprite(600,350,10,20)
      
      
         var rand = Math.round(random(1,6));
    switch(rand) 
    {
      case 1 : obstacles.addImage(ghost)
        break ;
        case 2 : obstacles.addImage(ghost1)
        break ;
        
      
    
    }
   obstacleGroup.add( obstacles) 
    obstacles.scale = 0.3;      
     obstacles.velocityX=(-6) 
        
    }

     
  
  
  
  
}  
  
  
  