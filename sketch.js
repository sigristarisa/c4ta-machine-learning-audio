let circles = [];
let drawCircles = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupAudio(true);
}

function draw() {
  updateAudio();
  // let intensity = map(amp, 0, 10, 200, 255);
  // switchBgColor(intensity);
  background(0);

  if (drawCircles && amp > 2) {
    let randomX = random(width);
    let randomY = random(height);
    noStroke();
    circles.push({ x: randomX, y: randomY, size: amp });
  }

  for (let c of circles) {
    let intensity = map(amp, 0, 10, 200, 255);
    fill(255, 255, 255, intensity);
    noStroke();
    circle(c.x + fftAvgVal, (c.y += 2), c.size);
  }
}

// function switchBgColor(intensity) {
//   drawCircles ? background(intensity, 50, 50) : background(50, 50, intensity);
// }
// function keyPressed() {
//   if (keyCode === ENTER) drawCircles = !drawCircles;
// }
