// part 3: p5js with no canvas (just DOM functions to affect the HTML page), and no p5play
// after a countdown, move to the final stage: part 4

let params;
let paragraph, seconds, inputPrompt, input;

function setup() {
    params = getURLParams();
    console.log(params); // debugging

    createElement("h1","Stage 3!");
    paragraph = createP("The previous stage took this many seconds:")
    seconds = createP('');
    inputPrompt = createP("Type something below before I rush on to stage 4...");
    input = createInput('');
}

function draw() {
    clear();

    seconds.html( nfc(params.milliseconds, 2) );

    if (millis() >= 10000) 
        location.replace("part4.html?text=" + encodeURIComponent(input.value()));
    //location.assign("part4.html");
    //location.href = "part4.html";
}
