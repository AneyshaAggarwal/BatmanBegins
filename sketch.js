const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var canvas;
var maxDrops= 100;
var engine, world;
var drops = [];
var rand;

function preload()
{
    
}

function setup()
{
    engine = Engine.create();
    world = engine.world;
    canvas = createCanvas(500, 700);

    if(frameCount % 150 === 0)
    {
        for(var i=0; i<maxDrops; i++)
        {
          drops.push(new Drop(random(0, 700), random(0, 700)));
        }
    }
}

function draw()
{
   Engine.update(engine);
   background("black");
   //maxDrops.display();

   for(var i= 0; i<maxDrops; i++)
   {
        drops[i].display();
        drops[i].updateY();
   }

   drawSprites();
}
