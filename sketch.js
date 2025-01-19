// let circles = []

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   setupAudio(true);
// }

// function draw() {
//   updateAudio();
//   let intensity = map(amp, 0, 10, 200, 255);
//   background(intensity, 50, 50);
//   noFill();
//   stroke(255);

//   // text(" Amp ", width * 0.5, height / 4);
//   // circle(width / 2, height / 4, amp);
//   // text(" Amp ease", width * 0.2, height / 4);
//   // circle(width * 0.2, height / 4, ampEase);

//   // beginShape();

//   // for (let i = 0; i < waveform.length; i++) {
//   //   let freq = (waveform[i] * height) / 4;
//   //   let x = map(i, 0, waveform.length, 0, width);
//   //   curveVertex(x, height * 0.5 + freq);
//   // }

//   // endShape();

//   // for (let i = 0; i < fftAvg.length; i++) {
//   //   let freq = fftAvg[i];
//   //   let x = map(i, 0, fftAvg.length, 0, width);
//   //   let w = width / fftAvg.length;
//   //   rect(x, height * 0.8, w, -freq);
//   // }

//   if (amp > 2) {
//     let randomX = random(width);
//     let randomY = random(height);
//     noStroke();
//     circles.push({ x: randomX, y: randomY, size: amp });
//   }

//   for (let c of circles) {
//     fill(255, 255, 255, 150);
//     noStroke();
//     circle(c.x, c.y, c.size);
//   }
// }

let circles = [];
let drawCircles = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  setupAudio(true);
}

function draw() {
  updateAudio();
  let intensity = map(amp, 0, 10, 200, 255);
  switchBgColor(intensity);
  noFill();
  stroke(255);

  if (drawCircles && amp > 2) {
    let randomX = random(width);
    let randomY = random(height);
    noStroke();
    circles.push({ x: randomX, y: randomY, size: amp });
  }
  if (amp > 2 && circles.length > 0 && !drawCircles) {
    circles.shift(); 
  }

  for (let c of circles) {
    fill(255, 255, 255, 150);
    noStroke();
    circle(c.x, c.y, c.size);
  }
}
function switchBgColor(intensity) {
  drawCircles ? background(intensity, 50, 50) : background(50, 50, intensity);
}
function keyPressed() {
  if (keyCode === ENTER) drawCircles = !drawCircles;
}
