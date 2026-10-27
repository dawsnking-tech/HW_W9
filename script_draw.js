function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  background(200, 220, 255);
}
  

function draw() {

//hair1
  fill(80, 50, 20);
  ellipse(200, 110, 150, 120);
// Neck
  fill(255, 220, 180);
  rect(185, 220, 30, 75);
 //head
  fill(250, 220, 180);
  ellipse(200, 150, 130, 160);
//eyes
  fill(255);
  ellipse(170, 140, 25, 15);
  ellipse(230, 140, 25, 15);
//eye.ret
  fill(120,40,66);
  ellipse(170, 140, 8, 8);
  ellipse(230, 140, 8, 8);
  
//nose?
  triangle(200, 145, 190, 175, 210, 175);

//mouth
 fill(210,120,90,200)
  arc(200, 190, 40, 20, 0, 180, PI);
 
// Body
  fill(50, 100, 255);
  rect(130, 250, 140, 150);

// sArms
  fill(255, 220, 180);
  rect(95, 250, 35, 100);
  rect(270, 250, 35, 100);

//hair2
  fill(80, 50, 20,)
  rect(140,60,120,50,50)

//Eyebrows
  stroke(80, 50, 20);
  strokeWeight(8);

//Left eyebrow
  point(158, 122);
  point(164, 119);
  point(170, 118);
  point(176, 119);
  point(182, 122);

//Right eyebrow
  point(218, 122);
  point(224, 119);
  point(230, 118);
  point(236, 119);
  point(242, 122);


  noStroke();

//Shirtstuff
  stroke(25, 55, 180);
  strokeWeight(2);
  line(190, 270, 190, 300);
  line(210, 270, 210, 300);
  line(160, 325, 190, 305);
  line(240, 325, 210, 305);
  noStroke(); 
}