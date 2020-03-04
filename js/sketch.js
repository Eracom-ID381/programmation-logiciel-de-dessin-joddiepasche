function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    if (mouseIsPressed) {
        stroke(255);
        line(mouseX, mouseY, pmouseX, pmouseY);
        print(pmouseX + ' -> ' + mouseX);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}