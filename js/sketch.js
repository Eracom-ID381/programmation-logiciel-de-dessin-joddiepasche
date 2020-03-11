let tone = 0;
let mode = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB, 255);
}

function draw() {
    fill(255);
    textSize(18);
    text(mode, 20, 20);
    if (mode === 0) {
        if (mouseIsPressed) {
            stroke(tone, 255, 255);
            strokeWeight(1)
            line(width / 2, mouseY, mouseX, mouseY);
        }
    } else if (mode === 1) {
        if (mouseIsPressed) {
            stroke(tone, 255, 255);
            strokeWeight(1)
            line(mouseX, mouseY, width / 2, height / 2);
        }
    } else if (mode === 2) {
        if (mouseIsPressed) {
            stroke(tone, 255, 255);
            strokeWeight(1)
            line(mouseX, height / 2, width / 2, mouseY);
        }
    } else if (mode === 3) {
        if (mouseIsPressed) {
            stroke(tone, 255, 255);
            strokeWeight(1)
            line(mouseX, mouseY, mouseX, height);
        }
    }
}

function mousePressed() {
    tone = random(0, 255);
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