function preload() {
  table = loadTable('Chapter5Vocab.csv', 'csv', 'header');
}

function setup() {
  let rows = table.rows;
  for (let words in rows) {
    console.log(words.arr[0] + " " + words.arr[1]);
  }
  createCanvas(400, 400);
}

function draw() {
  background(220);
}