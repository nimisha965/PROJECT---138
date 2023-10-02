img = "";
status = "";
object = [] ;

function preload() {
    img = loadImage('bag.jpg') ;
    img = loadImage('chair.jpg') ;
    img = loadImage('computer.jpg') ;
    img = loadImage('printer.jpg') ;
    img = loadImage('switchboard.jpg') ;
    img = loadImage('television.jpg') ;
}
function setup() {
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detexting Objects";
}
function draw() {
    image(img , 0 , 0 , 640 , 420) ;
    if(status !="") {
        fill("#FF0000");
    text("Detecting Objects")
    }
}
function modelLoaded() {
    console.log("Model Loaded") ;
    status = true ;
    objectDetector.detect(img , gotResults);
}
function gotResults(error , results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}