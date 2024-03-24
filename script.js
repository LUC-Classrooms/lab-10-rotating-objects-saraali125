var obj1, obj2; // create variables to contain objects

function setup() {
  createCanvas(400, 300);
  // create two new objects from the "myClass" constructor
  obj1 = new myClass(width * 1/4, height/2); 
  obj2 = new myClass(width * 3/4, height/2);

  console.log("obj1 contents:");
  console.log(obj1); // look at the console to see the contents of obj1
  console.log("obj2 contents:");
  console.log(obj2);
}

function draw() {
  background(200);
  
  obj1.display(); // show the objects on screen
  obj2.display();
  
  // capture the distance of the mouse from each object
  let mouse1 = dist(mouseX, mouseY, obj1.x, obj1.y); 
  let mouse2 = dist(mouseX, mouseY, obj2.x, obj2.y); 

  if(mouse1 < 50) { // first, see if the mouse is within range
    if(mouseIsPressed){
      obj1.spin(0.05); // spin object 1 by calling its spin() method
    } else {
      obj1.reset(); // the reset function is done for you
    }
  }
  if(mouse2 < 50) {
    if(mouseIsPressed){
      obj2.spin(-0.03); // spin object 2 by calling its spin() method
    } else {
      obj2.reset();
    }
  }
}

function myClass(tempX, tempY){

  //object properties
  this.x = tempX; // assign the first arg to this.x
  this.y = tempY; // assign the second arg to this.y 
  this.diam = 100; // fixed diameter
  this.xSpeed = 1; // fixed horizontal speed
  this.ySpeed = 1; // fixed vertical speed
  this.angle = 0; // angle of rotation; intially 0
  this.scale = 1; // scale factor; initially 1 (full size)
  // pick a random color: 
  this.color = color(random(255), random(255), random(255));
  
  /*
  Create a spin method here. Look at the reset() method below and the spin() method from the Sakai example for this week.
  the function assigned to this.spin should take a number argument; that number should be _added_ to the value of this.angle. The reset() method sets this.angle back to 0, and this.scale back to 1
  */
  this.spin = function(speed){
    this.angle += speed;
  }
  
  this.reset = function(){
      this.angle = 0;
      this.scale = 1;
  }
  
  this.display = function(){
    push(); // create a new layer
    translate(this.x, this.y); // move the origin point to the object's x and y location
    rotate(this.angle); // rotate the image around the new origin point using the object's angle property
    
    fill(this.color);
    rectMode(CENTER);
    rect(0, 0, this.diam, this.diam); // draw the image with x and y positions at 0
    
    pop(); // reset the layer
  }
  
}