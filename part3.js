// part 3: press a key to make a sprite
// when 10 seconds have passed, go to part 4

let params;

function setup() {
    new Canvas("fullscreen");
    world.gravity.y = 10;
    params = getURLParams();
}

function draw() {
    clear();

    text(params.time, width/2, height/2);
    
    if (millis() > 10000) 
        location.replace("part4.html")
    //location.assign("part4.html");
    //location.href = "part4.html";
}

function keyReleased() {
    new Sprite(width/2,-15,30,30);
}