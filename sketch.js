//creating sprite objects
var bullet,wall;
var speed,weight,thickness;

function setup() 
{
  //creating the canvas
  createCanvas(1600,400);

  //randomising speed, weight and thickness
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  //sprite objects and color
  bullet = createSprite(50, 200, 50, 5);

  //randomising bullet velocityX using speed variable
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(230,230,230);

}

function draw() 
{
  //adding background colr
  background(0);
 
  //detecting collision
  if(hasCollided(bullet,wall))
  {
    //halting bullet
    bullet.velocityX = 0;

    //calculating damage through a new variable
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    //determining color based on damage calculations
    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

  //drawing sprite objects on the screen
  drawSprites();
}
