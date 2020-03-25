let tone = 0;
let mode = 0;
let osc0, osc1, osc2, osc3, freq, amp;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB, 255);
    osc0 = new p5.Oscillator('triangle');
    osc1 = new p5.Oscillator('sine');
    osc2 = new p5.Oscillator('sawtooth');
    osc3 = new p5.Oscillator('square');
}

function draw() {
    fill(255);
    textSize(18);
    text(mode, 20, 20);
    freq = map(mouseX, 0, width, 100, 1000);
    amp = map(mouseY, 0, height, 0, 1);
    if (mode === 0) {
        if (mouseIsPressed) {
            osc0.freq(freq, 0.1);
            osc0.amp(amp, 0.1);
            stroke(tone, 255, 255);
            strokeWeight(1)
            line(width / 2, mouseY, mouseX, mouseY);
        }
    } else if (mode === 1) {
        if (mouseIsPressed) {
            osc1.freq(freq, 0.1);
            osc1.amp(amp, 0.1);
            stroke(tone, 255, 255);
            strokeWeight(1)
            line(mouseX, mouseY, width / 2, height / 2);
        }
    } else if (mode === 2) {
        if (mouseIsPressed) {
            osc2.freq(freq, 0.1);
            osc2.amp(amp, 0.1);
            stroke(tone, 255, 255);
            strokeWeight(1)
            line(mouseX, height / 2, width / 2, mouseY);
        }
    } else if (mode === 3) {
        if (mouseIsPressed) {
            osc3.freq(freq, 0.1);
            osc3.amp(amp, 0.1);
            stroke(tone, 255, 255);
            strokeWeight(1)
            line(mouseX, mouseY, mouseX, height);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

function keyPressed() {
    background(0, 0, 0);

    if (keyCode === LEFT_ARROW) {
        mode = 0;
    }
    if (keyCode === RIGHT_ARROW) {
        mode = 1;
    }
    if (keyCode === DOWN_ARROW) {
        mode = 2;
    }
    if (keyCode === UP_ARROW) {
        mode = 3;
    }
}

function mousePressed() { 
    tone = random(0, 255);

    if (mode === 0) {
        osc0.start();
    } else if (mode === 1) {
        osc1.start();
    } else if (mode === 2) {
        osc2.start();
    } else if (mode === 3) { 
        osc3.start();
    }
}

function mouseReleased() {
    osc0.stop();
    osc1.stop();
    osc2.stop();
    osc3.stop();    
}