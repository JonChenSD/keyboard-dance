let socket;
let butterfly
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
let time = 0;
let stateNumber = 0;
let states = ['baseball', 'stoneHenge','butterfly']
let currentState = {
  backgroundimage: 'assets/baseballcircle.png',
  // sticker: baseball,

}
const keyboardtexts = document.getElementById('keyboardletters')
const resetbtn = document.getElementById('reset')
const next = document.getElementById('next')
const back = document.getElementById('back')
resetbtn.onclick = function(){drawnKeyCodes = []};
function preload() {
  butterfly = loadImage('assets/butterfly2.gif');
  img1 = loadImage('assets/fingerprint/fingerprint1.png');
  baseballback = loadImage('assets/baseball.png');
  baseball = loadImage('assets/baseballcircle.png')
  baseballtitle = loadImage('assets/baseballtitle.png')
  one = loadImage('assets/1.png')
  stone = loadImage('assets/stone.png')
  akeyboarddance1 = loadImage('assets/a keyboard dance 1.png')
  // img2 = loadImage('assets/fingerprint/fingerprint2.png');
}


next.addEventListener("mouseup", nextFnc);
back.addEventListener("mouseup", backFnc)
function nextFnc(){
  console.log('click')
  if (stateNumber < states.length){
    stateNumber = stateNumber + 1
    console.log(stateNumber)
    setScene()
  } else{

  }
}
function backFnc(){
  console.log('click')
  if (stateNumber > 0){
    stateNumber = stateNumber - 1
    console.log(stateNumber)
    setScene()
  } else{

  }
}

function setScene(){
  let canvas = document.getElementById('defaultCanvas0')
  let canvasContainer = document.getElementById('canvasContainer')
  if(stateNumber == 0) {
    canvasContainer.style.width = "1100px"
    canvasContainer.style.height = "600px"
    resizeCanvas(1100,600)
    canvasContainer.style.backgroundImage = "url(assets/baseball.png)"
    canvas.style.transform= 'rotateX(0deg)'
    canvas.style.position='absolute'
    canvas.style.top = '0px'
    // canvasContainer.style.perspectiveOrigin = "10px 50%"
    canvasContainer.style.perspective = "0px"
  }
  else if(stateNumber == 1){
    canvasContainer.style.width = "600px"
    canvasContainer.style.height = "559px"
    resizeCanvas(800, 559)
    console.log(canvas)
    // canvas.style.transform = "rotate(7deg)";
    canvas.style.transform= 'rotateX(45deg)'
    // canvasContainer.style.perspectiveOrigin = "10px 50%"
    canvasContainer.style.perspective = "400px"
    canvasContainer.style.backgroundImage = "url(assets/stonehenge.png)"
    canvas.style.position='absolute'
    canvas.style.top = '0px'
    // drawnKeyCodes = []
  }
  else if(stateNumber == 2){
    console.log('statenumber 2')
    canvasContainer.style.width = "600px"
    canvasContainer.style.height = "900px"
    canvasContainer.style.backgroundImage = "url(assets/garden.png)"
    canvasContainer.style.perspective = "100px"
    canvas.style.transform = 'rotateX(347deg) rotateY(42deg)'
    // canvasContainer.style.perspectiveOrigin = "10px 50%"
    canvasContainer.style.perspective = "400px"
    canvas.style.position='absolute'
    canvas.style.top = '194px'
  }
  changeKeyboardDim()
}
function setup() {
  pixelDensity(6.0);
  textAlign(CENTER, CENTER);
  var myCanvas = createCanvas(1100,600);
  myCanvas.parent("canvasContainer");
  

}

function draw() {
  clear();

  // if(mode = "finger"){
  //   // translate(width / 2, height / 2);
  //   // // image(img2, 100, 100,80,80);
  //   // rotate(PI / 180 * Math.random()* 360);
  //   // imageMode(CENTER);
  //   // image(img1, crosshairX, crosshairY, 40, 40);
  //   drawFinger();
  // noFill();
  // }else{
  //   glyphDraw(glyph)
  //   stroke("#3A3E59")
  // }
  push()
  rectMode(CENTER)
  translate(width / 2, height / 2);
  // fill(255,255,255)
  // rect(0,12,1150,680)
  pop()
  imageMode(CENTER)
  translate(width / 2, height / 2);
  // image(baseballback,0,0,1100,600)
  image(baseballtitle,-12,320,120,35)
  image(akeyboarddance1,470,327,200,55)
  image(one,-540,327,44,48)
  
  
  drawKeys()
  fill('rgba(0,0,0,0)')


  drawLine()
 
  noFill();
  // beginShape();
  // curveVertex(84, 91);
  // curveVertex(84, 91);
  // curveVertex(68, 19);
  // curveVertex(21, 17);
  // curveVertex(32, 91);
  // curveVertex(32, 91);
  // endShape();

  ellipseMode(CENTER);
  if(time >= 1){
  
    changed = true
    // console.log('changed to true',changed)
  } else {
    changed = false
    time += .01
    
  } 
  //  if else (  ) {
  //   animationChange = false;
  // }
  if(drawnKeyCodes )
   if(indexCodesX.length >= 4){
    let indexforCurveX = []
    let indexforCurveY = []
    for(let i = indexCodesX.length-4; i < indexCodesX.length;i++){
      indexforCurveX.push(indexCodesX[i]);
      indexforCurveY.push(indexCodesY[i]);
    }
    let x = curvePoint(indexforCurveX[0], indexforCurveX[1], indexforCurveX[2], indexforCurveX[3], time);
    let y = curvePoint(indexforCurveY[0], indexforCurveY[1], indexforCurveY[2], indexforCurveY[3], time);
    if(stateNumber == 0){
      push()
    
      translate(x, y);
      rotate(radians(1080* time));
      image(baseball,0, 0, 20, 20);
      pop()
    }
    if(stateNumber == 1){
      translate(indexforCurveX[2], indexforCurveY[2]);
      rotate(radians(45 * indexCodesX.length));
      image(stone,0, 0, 30, 55);
    }
    if(stateNumber == 2){
      push()
    
      translate(x, y);
      if(time >= 1){
        console.log('pause')
        butterfly.pause()
      }else{
        butterfly.play()
      }
      image(butterfly,0,0,50,50)
      
      // image(baseball,0, 0, 20, 20);
      pop()
    }
   
    
   }
   keyboardtexts.innerText = drawnKeyCodes.join('')
    // let x = curvePoint(84, 68, 21, 32, time);
    // let y = curvePoint(91, 19, 17, 91, time);
    // ellipse(x, y, 5, 5);
    // x = curvePoint(84, 84, 68, 21, time);
    // y = curvePoint(91, 91, 19, 17, time);
    // ellipse(x, y, 5, 5);
    // x = curvePoint(68, 21, 32, 32, time);
    // y = curvePoint(19, 17, 91, 91, time);
    // ellipse(x, y, 5, 5);
    
}
  

  

   
function changeKeyboardDim(){
  if(stateNumber == 0) {
    baseballkeys = ['Z','D','T','9',']']
    keywidth = 40;
    keyheight = 40;
    keygapw = 40;
    keygaph = 110;
    startX = -90
    startY = 40
    
  }
  else if(stateNumber == 1){
    baseballkeys = ['V','H','R','8']
    keywidth = 40;
    keyheight = 40;
    keygapw = 5;
    keygaph = 80;
    startX = 75;
    startY = 30;
  }
  else if(stateNumber == 2){
    baseballkeys = ['W','4','C','H','I','/']
    keywidth = 50;
    keyheight = 40;
    keygapw = 5;
    keygaph = 80;
    startX = -30;
    startY = 30;
  }
}

let row1key = ['1','2','3','4','5','6','7','8','9','0','-','=']
let row2key = ['Q','W','E','R','T','Y','U','I','O','P','[',']']
let row3key = ['A','S','D','F','G','H','J','K','L',';',"'"]
let row4key = ['Z','X','C','V','B','N','M',',','.','/']
let baseballkeys = ['Z','D','T','9',']']
let keywidth = 40;
let keyheight = 40;
let keygapw = 40;
let keygaph = 110;
let drawnKeyCodes = [];
let changed = true;
let lastchangedvalue = [0,0];
let lastchangedvalueoutside = [0,0];
let indexCodesX = [];
let indexCodesY = [];
let keyColor = 'rgba(245,245,245, 1)';
let keyBackColor = 'rgba(40,40,40, 1)';
let fontSize = 13;
let dotRadius = 17;
let lastKey = [0,0];
let startX = -90
let startY = 40

function drawLine(){
  
  indexCodesY = []
  indexCodesX = []
    stroke("#ffffff")
    strokeWeight(1.5)
    fill('rgba(0,0,0,0')
    let offsetX = (keywidth * 7 + keygapw * 7 + startX);
    let offsetY = (keyheight * 2 + keygaph * 1.5 + startY);
    beginShape();
    fill('rgba(0,0,0,0')
    drawnKeyCodes.forEach((element,key,drawnKeyCodes) => {
        function drawCurveVertex(){
          for(let i = 0; i < 12;i++){
            let centeredX = keywidth/2+((keywidth + keygapw) * (i)) - offsetX
            let centeredY = keywidth/2 -offsetY
            if(element == row1key[i] ){  
            fill('rgba(0,0,0,0)');
            if(key == 0){
              curveVertex( centeredX, centeredY);
              indexCodesX.push(centeredX)
              indexCodesY.push(centeredY)

            }
              lastKey = [centeredX,centeredY];
              curveVertex( centeredX, centeredY);
              
              ellipse(centeredX, centeredY, dotRadius, dotRadius);
              indexCodesX.push(centeredX)
              indexCodesY.push(centeredY)
            }
           
        }
          for(let i = 0; i < 12;i++){
              
              if(element == (row2key[i])){
              let centeredX = keywidth/2+((keywidth + keygapw) * (i)) - offsetX + (keywidth+keygapw)/2
              let centeredY = keywidth/2+(keywidth+keygaph) - offsetY
              strokeWeight(2)
              fill('rgba(0,0,0,0)')
              if(key == 0){
                curveVertex( centeredX, centeredY);
                indexCodesX.push(centeredX)
              indexCodesY.push(centeredY)
                console.log('doublestart')
              }
              lastKey = [centeredX,centeredY];
              curveVertex(centeredX, centeredY);
              ellipse(centeredX,centeredY, dotRadius, dotRadius);
              indexCodesX.push(centeredX)
              indexCodesY.push(centeredY)
              }
              
          }
          for(let i = 0; i < 11;i++){
              
              if(element == (row3key[i])){
              let centeredX = keywidth/2+((keywidth + keygapw) * (i)) - offsetX + 2*(keywidth+keygapw)/2
              let centeredY = keywidth/2+ (keywidth+keygaph) * 2 - offsetY
              strokeWeight(2)
              fill('rgba(0,0,0,0)')
              if(key == 0){
                curveVertex( centeredX, centeredY);
                indexCodesX.push(centeredX)
              indexCodesY.push(centeredY)
                console.log('doublestart')
              }
              lastKey = [centeredX,centeredY];
              curveVertex(centeredX,centeredY);
              ellipse(centeredX,centeredY, dotRadius, dotRadius);
              indexCodesX.push(centeredX)
              indexCodesY.push(centeredY)
              }
            
          }
          for(let i = 0; i < 10;i++){
            
              if(element == (row4key[i])){
              let centeredX = keywidth/2+((keywidth + keygapw) * (i)) - offsetX + 3*(keywidth+keygapw)/2
              let centeredY = keywidth/2+ (keywidth+keygaph) * 3 - offsetY
              strokeWeight(2)
              fill('rgba(0,0,0,0)')
            if(key == 0){
                curveVertex( centeredX, centeredY);
                indexCodesX.push(centeredX)
              indexCodesY.push(centeredY)

              }
              lastKey = [centeredX,centeredY];
             
              
              
              
              curveVertex(centeredX,centeredY);
              ellipse(centeredX,centeredY, dotRadius, dotRadius);
              indexCodesX.push(centeredX)
              indexCodesY.push(centeredY)
              }
              
          }
          if(drawnKeyCodes.length - 1 == key){
             
            
         
              // animationChange = [lastKey[0],lastKey[1]];
              curveVertex(lastKey[0],lastKey[1])
              indexCodesX.push(lastKey[0])
              indexCodesY.push(lastKey[1])
              
          } 
        }
        
          drawCurveVertex()

          // if(drawnKeyCodes.length - 1 == key){
          //   console.log('reached end')
          //   drawCurveVertex()
          // } 
         
        
    });
    // console.log("lastchanged and lastkey", lastchangedvalue, lastKey)
    if(lastchangedvalue[0] != lastKey[0]){
      changed = false
      time = 0
      console.log('hi hi lasatchangedvalueoutside != lastkey changed to false', lastchangedvalue, lastKey)
    }
    if(changed = true){
      lastchangedvalue = lastKey
    }
    
    
   endShape();
   
}
function drawKeys(){
    rectMode(CORNER)
    stroke("#ffffff")
    strokeWeight(1.5)
    let offsetX = (keywidth * 7 + keygapw * 7 + startX);
    let offsetY = (keyheight * 2 + keygaph * 1.5 + startY)
    for(let i = 0; i < 12;i++){
        if(baseballkeys.includes(row1key[i])){
           
            strokeWeight(0)
            fill(keyBackColor);
            rect(((keywidth + keygapw) * (i)) - offsetX, -offsetY, keywidth,keyheight,3);
            strokeWeight(0)
            fill(keyColor);
            textSize(fontSize)
            text(row1key[i],((keywidth + keygapw) * (i) + keywidth/2) - offsetX, -offsetY + keyheight/1.9)
        }
       
    }
    for(let i = 0; i < 12;i++){
        if(baseballkeys.includes(row2key[i])){
         
        strokeWeight(0)
        fill(keyBackColor);
        rect(((keywidth + keygapw) * (i)) - offsetX + (keywidth+keygapw)/2, (keywidth+keygaph) - offsetY, keywidth,keyheight,3);
        strokeWeight(0)
        fill(keyColor);
        textSize(fontSize)
        text(row2key[i],((keywidth + keygapw) * (i) + keywidth/2) - offsetX + (keywidth+keygapw)/2, (keywidth+keygaph) - offsetY + keyheight/1.9)
        }
        
    }
    for(let i = 0; i < 11;i++){
        if(baseballkeys.includes(row3key[i])){
           
            strokeWeight(0)
            fill(keyBackColor);
            rect(((keywidth + keygapw) * (i)) - offsetX + 2*(keywidth+keygapw)/2, (keywidth+keygaph) * 2 - offsetY, keywidth,keyheight,2);
            strokeWeight(0)
            fill(keyColor);
            textSize(fontSize)
            text(row3key[i],((keywidth + keygapw) * (i) + keywidth/2) - offsetX + 2*(keywidth+keygapw)/2, (keywidth+keygaph) * 2 - offsetY + keyheight/1.9)
        }
       
    }
    for(let i = 0; i < 10;i++){
        if(baseballkeys.includes(row4key[i])){
        
        strokeWeight(0)
        fill(keyBackColor);
        rect(((keywidth + keygapw) * (i)) - offsetX + 3*(keywidth+keygapw)/2, (keywidth+keygaph) * 3 - offsetY, keywidth,keyheight,2);
        strokeWeight(0)
        fill(keyColor);
        textSize(fontSize)
        text(row4key[i],((keywidth + keygapw) * (i) + keywidth/2) - offsetX + 3*(keywidth+keygapw)/2, (keywidth+keygaph) * 3 - offsetY + keyheight/1.9)
        }
        
    }
}
function drawKeyboard(){
    rectMode(CORNER)
    stroke("#ffffff")
    strokeWeight(1.5)
    let offsetX = (keywidth * 7 + keygapw * 7 -90);
    let offsetY = (keyheight * 2 + keygaph * 1.5 + 40)
    for(let i = 0; i < 12;i++){
        
            strokeWeight(0)
            fill('rgba(255,255,255, 1)');
            textSize(10)
            text(row1key[i],((keywidth + keygapw) * (i) + keywidth/4) - offsetX, -offsetY + keyheight/1.2)
            strokeWeight(1)
            fill('rgba(255,255,255, 0)');
            rect(((keywidth + keygapw) * (i)) - offsetX, -offsetY, keywidth,keyheight,2);
        
       
    }
    for(let i = 0; i < 12;i++){

            strokeWeight(0)
        fill('rgba(255,255,255, 1)');
        textSize(10)
        text(row2key[i],((keywidth + keygapw) * (i) + keywidth/4) - offsetX + (keywidth+keygapw)/2, (keywidth+keygaph) - offsetY + keyheight/1.2)
        strokeWeight(1)
        fill('rgba(255,255,255, 0)');
        rect(((keywidth + keygapw) * (i)) - offsetX + (keywidth+keygapw)/2, (keywidth+keygaph) - offsetY, keywidth,keyheight,2);
        
        
    }
    for(let i = 0; i < 11;i++){
            strokeWeight(0)
            fill('rgba(255,255,255, 1)');
            textSize(10)
            text(row3key[i],((keywidth + keygapw) * (i) + keywidth/4) - offsetX + 2*(keywidth+keygapw)/2, (keywidth+keygaph) * 2 - offsetY + keyheight/1.2)
            strokeWeight(1)
            fill('rgba(255,255,255, 0)');
            rect(((keywidth + keygapw) * (i)) - offsetX + 2*(keywidth+keygapw)/2, (keywidth+keygaph) * 2 - offsetY, keywidth,keyheight,2);
        
       
    }
    for(let i = 0; i < 10;i++){
 
            strokeWeight(0)
        fill('rgba(255,255,255, 1)');
        textSize(10)
        text(row4key[i],((keywidth + keygapw) * (i) + keywidth/4) - offsetX + 3*(keywidth+keygapw)/2, (keywidth+keygaph) * 3 - offsetY + keyheight/1.2)
        strokeWeight(1)
        fill('rgba(255,255,255, 0)');
        rect(((keywidth + keygapw) * (i)) - offsetX + 3*(keywidth+keygapw)/2, (keywidth+keygaph) * 3 - offsetY, keywidth,keyheight,2);
        
        
    }
}
function drawFinger(){
  if(keyboardCodes.row1.includes(printedValue)){
    drawnKeyCodes.push(printedValue)    
    printedValue = null;
  } else if(keyboardCodes.row2.includes(printedValue)){
    drawnKeyCodes.push(printedValue)
    printedValue = null;
  } else if(keyboardCodes.row3.includes(printedValue)){
    drawnKeyCodes.push(printedValue)
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
  print(printedValue, drawnKeyCodes)
  if(row1key.concat(row2key,row3key,row4key).includes(keyCodeToChar[printedValue])){
    drawnKeyCodes.push(keyCodeToChar[printedValue])
  }
  if((keyCodeToChar[printedValue]) == "Backspace"){
    console.log('backspace')
    drawnKeyCodes.slice(0,-1)
  }
  drawLine()
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
  // resizeCanvas(windowWidth, windowHeight);
}

keyCodeToChar = {8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause/Break",20:"Caps Lock",27:"Esc",32:"Space",33:"Page Up",34:"Page Down",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"Windows",93:"Right Click",96:"Numpad 0",97:"Numpad 1",98:"Numpad 2",99:"Numpad 3",100:"Numpad 4",101:"Numpad 5",102:"Numpad 6",103:"Numpad 7",104:"Numpad 8",105:"Numpad 9",106:"Numpad *",107:"Numpad +",109:"Numpad -",110:"Numpad .",111:"Numpad /",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Num Lock",145:"Scroll Lock",182:"My Computer",183:"My Calculator",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};
keyCharToCode = {"Backspace":8,"Tab":9,"Enter":13,"Shift":16,"Ctrl":17,"Alt":18,"Pause/Break":19,"Caps Lock":20,"Esc":27,"Space":32,"Page Up":33,"Page Down":34,"End":35,"Home":36,"Left":37,"Up":38,"Right":39,"Down":40,"Insert":45,"Delete":46,"0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,"7":55,"8":56,"9":57,"A":65,"B":66,"C":67,"D":68,"E":69,"F":70,"G":71,"H":72,"I":73,"J":74,"K":75,"L":76,"M":77,"N":78,"O":79,"P":80,"Q":81,"R":82,"S":83,"T":84,"U":85,"V":86,"W":87,"X":88,"Y":89,"Z":90,"Windows":91,"Right Click":93,"Numpad 0":96,"Numpad 1":97,"Numpad 2":98,"Numpad 3":99,"Numpad 4":100,"Numpad 5":101,"Numpad 6":102,"Numpad 7":103,"Numpad 8":104,"Numpad 9":105,"Numpad *":106,"Numpad +":107,"Numpad -":109,"Numpad .":110,"Numpad /":111,"F1":112,"F2":113,"F3":114,"F4":115,"F5":116,"F6":117,"F7":118,"F8":119,"F9":120,"F10":121,"F11":122,"F12":123,"Num Lock":144,"Scroll Lock":145,"My Computer":182,"My Calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222};