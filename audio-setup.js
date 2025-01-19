let fftRaw = [];
let fftAvg = [];
let waveform = [];
let amp = 0.0;
let ampEase = 0.0;
let peakDetect = 0;
let mic;

function setupAudio() {
  userStartAudio();

  mic = new p5.AudioIn();
  mic.start();

  fftRaw = new p5.FFT(0.75, 1024);
  peakDetect = new p5.PeakDetect(20, 20000, 0.15);
  fftRaw.setInput(mic);
}

function updateAudio() {
  fftRaw.analyze();
  amp = mic.getLevel() * 1000;
  ampEase = ease(amp, ampEase, 0.075);
  waveform = fftRaw.waveform();
  fftAvg = fftRaw.logAverages(fftRaw.getOctaveBands(24));
  peakDetect.update(fftRaw);
}

function stopAudio() {
  if (mic) {
    mic.stop();
  }
}

function ease(target, current, easing) {
  return current + (target - current) * easing;
}
