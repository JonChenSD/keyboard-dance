let socket;
let address = 'http://localhost:3000'
let mode = "finger"
var angle = 0;
let crosshairX = 400;
  let crosshairY = 400;
let distance = 5;
let glyph = 89;
let printedValue = null;
let keyboardCodes = {
  row1: [81,87,69,82,84,89,85,73,79,80,219,221,220],
  row2: [65,83,68,70,71,72,74,75,76,186,222],
  row3: [90,88,67,86,66,78,77,188,190,191]
}

function preload() {
  img1 = loadImage('assets/fingerprint/fingerprint1.png');
  // img2 = loadImage('assets/fingerprint/fingerprint2.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
}
function rotate_and_draw_image(img_x, img_y, img_width, img_height, img_angle){
  imageMode(CENTER);
  translate(img_x+img_width/2, img_y+img_width/2);
  rotate(PI/180*angle);
  image(img1, 0, 0, img_width, img_height);
  translate(-(img_x+img_width/2), -(img_y+img_width/2));
  imageMode(CORNER);
}
function draw() {
  if(mode = "finger"){
    // translate(width / 2, height / 2);
    // // image(img2, 100, 100,80,80);
    // rotate(PI / 180 * Math.random()* 360);
    // imageMode(CENTER);
    // image(img1, crosshairX, crosshairY, 40, 40);
    drawFinger();
  noFill();
  }else{
    glyphDraw(glyph)
    stroke("#3A3E59")
  }
  
  
  

  

   
}
function drawFinger(){
  if(keyboardCodes.row1.includes(printedValue)){
    image(img1, 800 * keyboardCodes.row1.indexOf(printedValue)/12 + Math.random() * 20, windowHeight/2 + Math.random() * 20, 40, 40)
    printedValue = null;
  } else if(keyboardCodes.row2.includes(printedValue)){
    image(img1, 20+800 * keyboardCodes.row2.indexOf(printedValue)/11 + Math.random() * 20, windowHeight/2 + Math.random() * 20 + 60, 40, 40)
    printedValue = null;
  } else if(keyboardCodes.row3.includes(printedValue)){
    image(img1, 40+800 * keyboardCodes.row3.indexOf(printedValue)/10 + Math.random() * 20, windowHeight/2 + Math.random() * 20 + 120, 40, 40)
    printedValue = null;
  } else if(printedValue == 32){
    image(img1, 400 + Math.random() * 20,windowHeight/2 + Math.random() * 20 + 180, 40, 40)
    printedValue = null;
  }
}

function glyphDraw(type){
  if(glyph === 89){
     line(crosshairX-5, crosshairY, crosshairX+5, crosshairY);
  line(crosshairX, crosshairY-5, crosshairX, crosshairY+5);
  } 
   else if(glyph === 85){
    line(crosshairX-2.5, crosshairY-2.5, crosshairX+2.5, crosshairY+2.5);
  line(crosshairX-2.5, crosshairY+2.5, crosshairX+2.5, crosshairY-2.5);
  }
  else if(glyph === 73){
   line(crosshairX-5, crosshairY, crosshairX+5, crosshairY);
  }
  //arcs
  else if(glyph === 72){
    arc(crosshairX, crosshairY, 10, 10, HALF_PI, PI);
  }
  else if(glyph === 74){
    arc(crosshairX, crosshairY, 10, 10, 0, PI);
  }
  else if(glyph === 75){
    arc(crosshairX, crosshairY, 10, 10, 0, 2 * PI);
  }
  else if(glyph === 76){
    circle(crosshairX, crosshairY, 2.5);
  }
   else if(glyph === 78){
    triangle(crosshairX-2.5, crosshairY-2.5, crosshairX+2.5, crosshairY-2.5, crosshairX, crosshairY+2.5);
  }
};

function keyPressed() {
  printedValue = keyCode
  print(printedValue)
  if (keyCode === 65) {
    crosshairX = crosshairX - distance;
    console.log('a pressed');
  } else if (keyCode === 68) {
    crosshairX = crosshairX + distance;
  }
    else if (keyCode === 87) {
    crosshairY = crosshairY - distance;
  } else if (keyCode === 83) {
    crosshairY = crosshairY + distance;
  }
  else if (keyCode === 89) {
    glyph = 89;
  }
  else if (keyCode === 85) {
    glyph = 85;
  }
  else if (keyCode === 73) {
    glyph = 73;
  }
  else if (keyCode === 79) {
    glyph = 79;
  }
  else if (keyCode === 72) {
    glyph = 72;
  }
  else if (keyCode === 74) {
    glyph = 74;
  }
  else if (keyCode === 76) {
    glyph = 76;
  }
  else if (keyCode === 78) {
    glyph = 78;
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
