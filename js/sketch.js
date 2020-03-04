function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
    if (mouseIsPressed) {
        stroke(255);
        line(mouseX, mouseY, pmouseX, pmouseY);
        print(pmouseX + ' -> ' + mouseX);
    }
}

function mousePressed() {
    background(random(0, 255));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}