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
  sel = createSelect();
  sel.position(150, 0);
  let i = 0;
  for (let words of rows) {
    wordPairs.push([words.arr[0],words.arr[1]]);
    sel.option(`${i}: ${words.arr[0]} | ${words.arr[1]}`);
    i++;
  }
  sel.changed(mySelectEvent);
  max = wordPairs.length;
  console.log(wordPairs);
  button = createButton('previous');
  button.position(0, 0);
  button.mousePressed(prev);
  button1 = createButton('flip');
  button1.position(70, 0);
  button1.mousePressed(flip);
  button2 = createButton('next');
  button2.position(105, 0);
  button2.mousePressed(next);
  
  rectMode(CENTER);
}

function draw() {
  background(0);
  noLoop();
  textSize(32);
  fill(255);
  printer();
}

function printer() {
  background(0);
  text(`${index}: ${wordPairs[index][bit]}`, 20, height/2);
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

function mySelectEvent() {
  let item = sel.value().substring(0,sel.value().indexOf(':'));
 //   charAt(0);
  index = parseInt(item);
  rangeCheck();
  printer();
}