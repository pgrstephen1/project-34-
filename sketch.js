
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backGroundImage;
var monsterImage1, monsterImage2;
var superHeroImage1, superHeroImage2;

var hero;
var monster;
var ground;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9, obstacle10;
var rope;

function preload(){
backGroundImage = loadImage("GamingBackground.png");
//monsterImage1 = loadImage("Monster-01.png");
//monsterImage2 = loadImage("Monster-02.png");
//superHeroImage1 = loadImage("Superhero-01.png");
//superHeroImage2 = loadImage("Superhero-02.png");
}

function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,550,800,5);
  hero = new Hero(275,350,150,25);
  rope = new Chain(hero.body, {x:275, y:290});
  monster = new Monster(650,150,70,70);

  obstacle1 = new Obstacle(475,515,30,30);
  obstacle2 = new Obstacle(475,500,30,30);
  obstacle3 = new Obstacle(475,475,30,30);
  obstacle4 = new Obstacle(475,450,30,30);
  obstacle5 = new Obstacle(475,425,30,30);
  obstacle6 = new Obstacle(505,515,30,30);
  obstacle7 = new Obstacle(505,500,30,30);
  obstacle8 = new Obstacle(505,475,30,30);
  obstacle9 = new Obstacle(505,450,30,30);
  obstacle10 = new Obstacle(505,425,30,30);

}

function draw() {
  background("backGroundImage");  


  ground.display();
  hero.display();
  rope.display();
  monster.display();

  obstacle1.display();
  obstacle2.display();
  obstacle3.display();
  obstacle4.display();
  obstacle5.display();
  obstacle6.display();
  obstacle7.display();
  obstacle8.display();
  obstacle9.display(); 
  obstacle10.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}

