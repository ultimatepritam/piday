let blockImg;
let block1;
let block2;
let clack;
let count = 0;
let digits = 6;
const timeSteps = 100000;
let countDiv;
let countHeader;
let color_slider;
let rerunButton; 

function preload() {
  blockImg = loadImage('block.png');
  clack = loadSound('clack.wav');
  rerunButton = createButton("Rerun"); 
  //color_slider = createSlider(0, 10, 3);       
  // Set the position of slider on the canvas 
  //color_slider.position(400, 250); 
}

function rerunCanvas() {
  clear();
  setup();
}

function setup() {
  createCanvas(windowWidth,200);
  count = 0;
  //digits = color_slider.value();
  // timeSteps = digits * 10;
  block1 = new Block(100, 40, 1, 0);
  const m2 = pow(100,digits-1);
  block2 = new Block(200, 100, m2, -5/timeSteps);
  countHeader = createDiv();
  countDiv = createDiv(count);
  countHeader.style('font-size','24pt');
  countDiv.style('font-size','72pt');
}


function draw() {
  background(240);
  let clackSound = false;
  
  for(let i = 0; i<timeSteps; i++){    
    if(block1.collide(block2)){
      const v1 = block1.bounce(block2);
      const v2 = block2.bounce(block1);
      block1.v = v1;
      block2.v = v2;
      clackSound = true;
      count++;
    }
    if(block1.hitwall()){
      block1.reverse();
      count++;
      clackSound = true;
    }
    block1.update();
    block2.update();
  }
  if(clackSound){
    clack.play();
  }
  block1.show();
  block2.show();
  countHeader.html('No. of collusions: ');
  countDiv.html(nf(count,digits));
  rerunButton.mouseClicked(rerunCanvas); 
}
