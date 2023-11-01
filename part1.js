// part 1 this is a title screen

let part2Button, creditsButton;

function setup() {
    createCanvas('fullscreen');

    part2Button = new Sprite(100,height/2+200, 100,30);
    part2Button.color = "white";
    part2Button.text = "Part 2";

    creditsButton = new Sprite(300,height/2+200, 100,30);
    creditsButton.color = "white";
    creditsButton.text = "Credits";
}

function draw() {
    clear();
    textSize(72);
    text("Multi-Stage Game Demo", 100,height/2);
    textSize(24);
    text("Stage 1: a title screen", 100,height/2+100);

    if (part2Button.mouse.pressed())
        location.replace("part2.html")
    
    if (creditsButton.mouse.pressed())
        location.replace("credits.html")
}
