peter_pan_song = "";
Harry_Potter_Theme_Song = "";
function setup(){
    canvas = createCanvas(500,470)
    canvas.position(450,155)

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
peter_pan_song = loadSound("music2.mp3")
Harry_Potter_Theme_Song = loadSound("music.mp3")
}

function draw(){
   image(video,0,0,500,470);
}