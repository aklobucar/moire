/******************
Code by Vamoss
Original code link:
https://www.openprocessing.org/sketch/1056203

Author links:
http://vamoss.com.br
http://twitter.com/vamoss
http://github.com/vamoss
******************/

function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
}

function draw() {
	background(255);
	for(var a = 0; a < TWO_PI; a += TWO_PI/2){
		for(var i = 0; i < 20; i++){
			strokeWeight(noise(i / 10 - frameCount / 50) * 20);
			circle(
				width/2 + cos(a) * (mouseX - width/2),
				height/2 + sin(a) * (mouseY - height/2), 
				i * 30
			);
		}
	}
}