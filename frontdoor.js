img=""
status=""
objects=[];
function preload(){
    img = loadImage('frontdoor.jpg');
  }
  function setup() {
    canvas = createCanvas(680, 423);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Status : Detecting Objects"
  }
  function modelLoaded(){
    console.log("Model is successfully loaded")
    status=true
    objectDetector.detect(img,gotResults)
  }
  function draw(){
    image(img, 0, 0, 680, 423);
    if(status != "")
{
for ( i = 0 ; i < objects.length ; i ++ ) {
document.getElementById("status").innerHTML="Status :objects detected"
fill("#fc0390")
percent= floor(objects[i].confidence*100);
text(objects[i].label+" "+ percent + "%", objects[i].x + 15, objects[i].y)
noFill();
stroke("#fc0390") 
rect(objects[i].x,objects[i].y,objects[i].width, objects[i].height);
}
} 
}
  function gotResults(error,results){
if (error) {
  console.log(error)
}
console.log(results)
objects=results
  }
