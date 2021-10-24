var angle = 0;
var prevAngle = 0;
var slider;
var colorShift = 0.4;
var h = 1;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB);
    slider = createSlider(0, PI, PI / 4, 0.01);
}

function draw() {
    angle = slider.value();
    stroke(255);
    translate(200, height);

    if(prevAngle !== angle) {
        prevAngle = angle;
        background(51, 0, 14);
        branch(100);
    }
    //angle += 0.01;
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if(len > 4) {
        push();
        rotate(angle);
        stroke(h = (h + colorShift) % 360, 100, 100);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        stroke(h = (h + colorShift) % 360, 100, 100);
        branch(len * 0.67);
        pop();
    }
}