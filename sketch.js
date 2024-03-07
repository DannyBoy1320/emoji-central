function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  //face
   fill("gold")
  ellipse (200,200,300,300)
   
  //eyes
  fill("black")
  strokeWeight(5)
  ellipse (150,150,20,20)
  ellipse (250,150,20,20)
  
  //mouth
  fill("Black")
  strokeWeight(10)
  ellipse (200,250,100,0)
  
}
