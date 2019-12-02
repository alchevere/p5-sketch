var diameter = 25; //declaring and initializing our variable

//The setup function only happens once
function setup() {
	createCanvas(600, 600); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(50,200,150); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the Triang and text 's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))

//draws four Rectangle that follows my mouse and wiggle a little bit
rect(mouseX + random(-3, 2), mouseY, diameter, diameter);
rect(mouseX + random(-2, 3), mouseY + diameter, diameter, diameter);
rect(mouseX + random(-6, 4), mouseY + (diameter * 2), diameter, diameter);// uses operations

	if (mouseIsPressed) {
    fill(random(255), random(150, 100), random(125)); //generate a shift of colors inside the image.
  } else {
    fill(240);
  }
textSize(20);
textFont("Georgia");
textStyle(ITALIC);
textAlign(CENTER);
text("Aleudys Jose Diaz",470,40); //this will add my full name on the top right corner
triangle(30, 75, 58, 20, 86, 75); // will create triangle shape using lines
triangle(60, 150, 116, 40, 175, 150);
triangle(120, 300, 232, 80, 360, 300);
textSize(22);
textFont("Georgia");
textStyle(ITALIC);
textAlign(CENTER);
text("Thank you for showing me P5",440,570);// this will add a text message located in the bottom right corner
}
