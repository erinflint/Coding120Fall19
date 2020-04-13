let playing = false;
let earring;
let button;

function setup() {
    // specify multiple formats for different browsers
    earring = createVideo(['../assets/earring.mov']);
    button = createButton('play');
    button.mousePressed(toggleVid); // attach button listener
}

// plays or pauses the video depending on current state
function toggleVid() {
    if (playing) {
        earring.pause();
        button.html('play');
    } else {
        earring.loop();
        button.html('pause');
    }
    playing = !playing;
}