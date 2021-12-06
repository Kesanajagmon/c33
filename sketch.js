var ch,chimg;
var snow1;
var snow2;
var snow33;
var snow4 ;
var snow5;




function preload()
{
snow = loadImage("snow1.jpg");

backimg = loadImage("snow2.jpg");
snow3 = loadImage("snow3.jpg");
snowweb = loadImage("snow4.webp");
oob = loadImage("snow5.webp");
chimg = loadImage("chimg2.jpg");
}

function setup() {

  createCanvas(1200,600);
ch = createSprite(100,510,100,100);
ch.addImage("ch",chimg);
ch.scale = 0.3;

//snow1 = createSprite(1000,510);
//snow1.addImage("snow",snow);
//snow1.scale = 0.5

//snow2 = createSprite(300,510);
//snow2.addImage("sno", snow3);

snow33 = createSprite(1000,460);
snow33.addImage("snowe", snow3);
snow33.scale = 0.399






  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backimg); 
  backimg.scale = 1.5;
  drawSprites();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ch,{x:0,y:0},{x:85,y:-85});
  }
}


