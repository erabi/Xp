var radiusC1 = 50; //inner ellipse radius
var radiusC2 = 100;//outer ellipse radius


function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);

}

function draw() {

  background(100,200,50); //background colour changing with mouse mouvements
  fuzzyCircle(mouseX, mouseY);

}

function fuzzyCircle(x,y){

    ellipseMode(RADIUS);

    var colour1 = color(255,20,147); //pink colour of the inner ellipse
    var colour2 = color(100,200,50); // = background colour

    for (var i = radiusC2; i >= radiusC1; i--){
      var colourDegree = map(i,radiusC2,radiusC1,0,1);//value i converted from a value in the range of radiusC1 to radiusC2 into a value that ranges from 0 to 1 to be used as lerpColor() degree.
      var gradColour = lerpColor(colour2,colour1,colourDegree);//gradual evolution of the ellipse's colour
      noStroke();
      fill(gradColour);
      ellipse(x,y,i,i);
    }

}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight, false);
}
