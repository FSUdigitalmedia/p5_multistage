// part 2: click 10 times to move on to part 3
// (this page uses a canvas but not p5play)

let counter = 10;

function setup() {
    createCanvas(400,400);
    fill("orange");
}

function draw() {
    background("lightBlue");

    textSize(24);
    text("Stage 2")

    textFont("Arial", 72);
    text(counter,width/2,height/2);

    if (counter <= 0) {
        let totalTime = millis();
        window.location.replace("part3.html?time="+encodeURIComponent(totalTime));
    }
}

function mouseReleased() {
    counter--;
}