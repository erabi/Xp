var radiusC1 = 0; //inner ellipse radius
var radiusC2 = 0;//outer ellipse radius

var hSize = 0; //variation coeff of ellipse radius
var vSize = 0;  //variation coeff of ellipse radius

var randR = random(255); //colour variable
var randV = random(255); //colour variable
var randB = random(255); //colour variable


function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
}

function draw() {

  background(100,200,50); //background colour changing with mouse mouvements
  fuzzyCircle(mouseX, mouseY);

  if(mouseIsPressed){ //ellipse grows in size as long as mouse is pressed
    hSize += 5;
    vSize += 5;
  }else{
    hSize = 0;
    vSize = 0;
    radiusC1 = 0;
    radiusC2 = 0;
  }

}

function fuzzyCircle(x,y){

    ellipseMode(RADIUS);

    var colour1 = color(randR,randV,randB); //pink colour of the inner ellipse
    var colour2 = color(100,200,50); // = background colour

    for (var i = radiusC2; i >= radiusC1; i--){
      var colourDegree = map(i,radiusC2,radiusC1,0,1);//value i converted from a value in the range of radiusC1 to radiusC2 into a value that ranges from 0 to 1 to be used as lerpColor() degree.
      var gradColour = lerpColor(colour2,colour1,colourDegree);//gradual evolution of the ellipse's colour
      noStroke();
      fill(gradColour);
      ellipse(x,y,i+hSize,i+vSize);//ellipses that grow as long as mouse is pressed
    }

}

function mousePressed(){ //issues random colour whenever mouse is pressed
  radiusC2 = 50; // setting outer ellipse's size
  randR = random(255);
  randV = random(255);
  randB = random(255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight, false);
}
