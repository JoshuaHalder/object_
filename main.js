video="";
Status="";

function setup(){
    canvas=createCanvas(480,380);
    canvas.position(500,350);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    ml5=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status :- Object Detected";
}

function modelLoaded(){
    console.log("Model Loaded")
    Status=true;
}