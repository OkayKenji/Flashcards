function preload() {
  table = loadTable('Chapter5Vocab.csv', 'csv', 'header');
}
let index = 0;
let bit = 0;
let max = -1;
let wordPairs;
function setup() {
  createCanvas(700, 200);
  let rows = table.rows;
   wordPairs = [];
  for (let words of rows) {
    wordPairs.push([words.arr[0],words.arr[1]]);
  }
  max = wordPairs.length;
  console.log(wordPairs);
  button = createButton('previous');
  button.position(0, 0);
  button.mousePressed(prev);
  button1 = createButton('flip');
  button1.position(100, 0);
  button1.mousePressed(flip);
  button2 = createButton('next');
  button2.position(200, 0);
  button2.mousePressed(next);
  rectMode(CENTER);
}

function draw() {
  background(0);
  noLoop();
  textSize(32);
  fill(255);
  
}

function printer() {
  background(0);
  text(wordPairs[index][bit], 20, height/2);
}

function prev() {
  index--;
  rangeCheck();
  printer();
}
function next() {
  index++;
  rangeCheck();
  printer();
}
function flip() {
  if (bit == 0) 
    bit = 1;
  else
    bit = 0;
  printer();
}
function rangeCheck() {
  if (index >= max) {
    index = 0;
  } else if (index < 0) {
    index = max - 1;
  }
}