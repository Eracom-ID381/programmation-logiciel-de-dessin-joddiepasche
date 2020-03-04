let tone = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB, 255);
}

function draw() {
    if (mouseIsPressed) {
        tone = random(0, 255);
        stroke(tone, 255, 255);
        strokeWeight(10)
        line(mouseX, mouseY, pmouseX, pmouseY);
        print(pmouseX + ' -> ' + mouseX);
    }
}

function mousePressed() {
    tone = random(0, 255);
    background(tone, 255, 255);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}