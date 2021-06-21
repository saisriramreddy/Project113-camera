function preload(){
    
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(250,250);
    video = createCapture(VIDEO);
    video.hide();
   
}
function draw(){
    image(video,60,40,530,400);
    fill(255,0,0);
    stroke(255,0,0);
    circle(60,50,60);
    circle(60,430,60);
    circle(580,50,60);
    circle(580,430,60);

    fill(0,128,0);
    stroke(0,128,0);
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(50,80,20,320);
    rect(570,80,20,320);
    
}
function take_snapshot(){
    save('YourPic.png');
}

