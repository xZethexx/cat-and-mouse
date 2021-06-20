var bgImg
var catImg1,cat2Img,cat
var catAnimation
var mouseImg1,mouse2Img,mouse
var mouseAnimation

function preload() {
    //load the images here
   bgImg = loadImage("images/garden.png");
   catImg1 = loadAnimation("images/cat1.png")
   mouseImg1 = loadAnimation("images/mouse1.png")
   cat2Img = loadAnimation("images/cat4.png")
   mouse2Img = loadAnimation("images/mouse4.png")

   catAnimation=loadAnimation("images/cat2.png","images/cat3.png")
   mouseAnimation= loadAnimation("images/mouse2.png","images/mouse2.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat=createSprite(800,700,20,20)
 cat.addAnimation("catChilling",catImg1)
 cat.scale=0.2

 mouse=createSprite(200,700,20,20)
 mouse.addAnimation("mouseChilling",mouseImg1)
 mouse.scale=0.2

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.addAimation("finalCat",cat2Img)
      cat.changeAnimation("finalCat")

      mouse.addAimation("finalMouse",mouse2Img)
      mouse.changeAnimation("finalmouse")
      cat.velocityX = 0 

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

   if(keyCode===LEFT_ARROW){
   mouse.addAnimation("mouseTeasing",mouseAnimation)
   mouse.changeAnimation("mouseTeasing")
   cat.addAnimation("catTeasing",catAnimation)
   cat.changeAnimation("catTeasing")
   cat.velocityX=-8
   }

}
