var balloon;
var database, position;
var backgroundImg;

function preload(){
    database = firebase.database();
   // backgroundImg = loadImage("pro-C35 images/Hot Air Ballon-01.png");
   // balloon = loadImage("pro-C35 images/Hot Air Ballon-02.png","pro-C35 images/Hot Air Ballon-03.png","pro-C35 images/Hot Air Ballon-04.png");

}

function setup() {
  createCanvas(1000,640);
  balloon = createSprite(500,300, 50, 50);
  balloon.shapeColor="blue";

}

function draw() {
  background("red"); 
  strokeWeight(2);
  stroke("lightgreen");
  fill("blue");
  textSize(20);
  text("Use the arrow keys to move the Hot Air Balloon", 30, 30);

  if(keyDown(LEFT_ARROW)){
  balloon.x=balloon.x -10;
  }

  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x +10;
                                                              
  }

  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y -10;
  } 

  else if(keyDown(DOWN_ARROW)){ writePosition(0, 10);
    balloon.y=balloon.y +10;
  }
  if (keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon.addAnimation("balloon", balloon);   
  balloon.scale = -0.01;
  }
  var balloonPosition = database.ref("balloon/height");
  balloonPosition.on("value", readPosition, showError);
  
  drawSprites();
}


function updateHeight(x, y){
  database.ref('balloon/Height').set({
    'x': balloon.x + x,
    'y': balloon.y + y
  })
  }




function readHeight(data){
position = data.val();
balloon.x = position.x;
balloon.y = position.y;
}



function showError(){
  console.log("Error in writting to the database");
}