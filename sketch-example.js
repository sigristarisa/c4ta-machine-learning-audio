function setup() {
  createCanvas(windowWidth, windowHeight);
  setupAudio(true);
}

function draw() {
  updateAudio();
  let intensity = map(amp, 0, 10, 200, 255);
  background(intensity, 50, 50);
  noFill();
  stroke(255);

  text(" Amp ", width * 0.5, height / 4);
  circle(width / 2, height / 4, amp);
  text(" Amp ease", width * 0.2, height / 4);
  circle(width * 0.2, height / 4, ampEase);

  beginShape();

  for (let i = 0; i < waveform.length; i++) {
    let freq = (waveform[i] * height) / 4;
    let x = map(i, 0, waveform.length, 0, width);
    curveVertex(x, height * 0.5 + freq);
  }

  endShape();

  for (let i = 0; i < fftAvg.length; i++) {
    let freq = fftAvg[i];
    let x = map(i, 0, fftAvg.length, 0, width);
    let w = width / fftAvg.length;
    rect(x, height * 0.8, w, -freq);
  }
}
