var hSize = 0;
var vSize = 0;
var randR = random(255); //colour variable
var randV = random(255); //colour variable
var randB = random(255); //colour variable

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
}

function draw() {

  background(100,200,50); //background colour changing with mouse mouvements
  noStroke(); //no border to shapes
  fill(randR, randV, randB); //ellipse with random colour
  ellipse(mouseX, mouseY, hSize, vSize);
  if(mouseIsPressed){ //ellipse grows in size as long as mouse is pressed
    hSize += 5;
    vSize += 5;
  }else{
    hSize = 0;
    vSize = 0;
  }

}

function mousePressed(){ //issues random colour whenever mouse is pressed
  randR = random(255);
  randV = random(255);
  randB = random(255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight, false);
}
