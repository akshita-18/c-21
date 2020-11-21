var car, wall;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400); 

speed=random(55,90)
weight=random(400,1500)

thickness=random(22,83)

  bullet=createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapecolor=color(225);

wall=createSprite(1200,200,thickness, height/2)

wall.shapecolor=color(80,80,80)
}

function draw() {
  background(0);  
  drawsprites();
 
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapecolor=color(225,0,0); 
    }
    if(deformation<180 && deformation>100)
  {
    car.shapecolor=color(230,230,0);
  }

  if(deformation<100)
    {
      car.shapecolor=color(0,225,0);
    }
  }

  function hascollided(bullet,1wall)
  {
    bulletRightEdge=1bullet.x +1bullet.width;
   wallLeftEdge=1wall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
  }
 if(hascollided(bullet, wall))
 {
   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);

   if(damage>10)
   {
     wall.shapecolor = color(225,0,0);
   }


   if(damage<10)
   {
     wall.shapecolor = color(0,225,0,);
   }
 }
}