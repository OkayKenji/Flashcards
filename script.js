function preload() {
  table = loadTable('Chapter5Vocab.csv', 'csv', 'header');
}

function setup() {
  console.log(table);
  createCanvas(400, 400);
}

function draw() {
  background(220);
}