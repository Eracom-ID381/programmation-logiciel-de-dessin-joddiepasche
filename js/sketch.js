function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
}

function draw() {
    if (mouseIsPressed) {
        fill(255);
        rect(mouseX, mouseY, 10, 10);
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}