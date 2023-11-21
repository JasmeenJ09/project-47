var coinsImg
var demonImg
var hauntedHouse
var soliderImg
var bulletImg
var livesImg

var bulletGroup,demonGroup
var coins, solider, demon, bullet,lives

function preload() {
  coinsImg = loadImage("coins.png")
  demonImg = loadImage("demon.png")
  hauntedHouse = loadImage("HauntedHouse.jpg")
  soliderImg = loadImage("soldierShooter.png")
  bulletImg = loadImage("bullet.png")
  livesImg = loadImage("lives.png")
}

function setup() {
  createCanvas(800, 400);
  
  solider = createSprite(100, 350)
  solider.addImage(soliderImg)
  solider.scale=0.3

  lives1=createSprite(650,50)
  lives1.addImage(livesImg)
  lives1.scale=0.2

  lives2=createSprite(700,50)
  lives2.addImage(livesImg)
  lives2.scale=0.2

  lives3=createSprite(750,50)
  lives3.addImage(livesImg)
  lives3.scale=0.2

  bulletGroup = createGroup()

  demonGroup = createGroup()
}

function draw() {
  background(hauntedHouse);
  spawnDemon()
  drawSprites();
  if (keyDown("space")){
    shootDemon()
  }
  if (bulletGroup.isTouching(demonGroup)){
  demonGroup[0].destroy()
  bulletGroup.destroyEach()
  }
}

function spawnDemon() {
  if (frameCount % 100 === 0) {
    demon = createSprite(800, 330)
    demon.addImage(demonImg)
    demon.scale = 0.75
    demon.velocityX = -5
    demon.lifetime=400
    demonGroup.add(demon)

  }
}

function shootDemon(){
if (frameCount % 10 === 0){
  bullet = createSprite(solider.x+65,solider.y-40)
  bullet.addImage(bulletImg)
  bullet.velocityX = 5
 bullet.scale = 0.2
 bulletGroup.add(bullet)
}
}
