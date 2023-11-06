// part 2: press a key to make a sprite
// when 20 sprites have been created, go to part 3

let counter = 0;

function setup() {
    new Canvas("fullscreen");
    world.gravity.y = 10;
    params = getURLParams();
}

function draw() {
    clear();

    text("Keep pressing keys...",30,30);
    
    if (counter >= 20) 
        location.replace("part3.html?milliseconds=" + encodeURIComponent(millis()));
    //location.assign("part3.html");
    //location.href = "part3.html";
}

function keyReleased() {
    new Sprite(width/2,-15,30,30);
    counter++;
}