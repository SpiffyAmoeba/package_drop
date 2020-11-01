var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bounce,box1,box2,box3,box4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:2, isStatic:false	});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 30 , {isStatic:true} );
 	World.add(world, ground);

	 box1=createSprite(400,654,200,20)
	 box1.isStatic=true
	 box2=createSprite(300,600,20,200)
	 box3=createSprite(500,600,20,200)
	 box4=createSprite(400,600,200,20)

	Engine.run(engine);
  
}


function draw() {
 
	rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if(packageSprite.y > box4.y){
	  packageBody.isStatic=true
  }
 box4.visible=false
drawSprites();
}




