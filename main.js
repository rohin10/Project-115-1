function preload(){

}
function setup(){
    canvas= createCanvas(640,480);

}
function draw(){
    image(img,10,10,50,50);

    fil(0,128,0);
    stroke(0,128,0);
    circle(350,50,70);
    
}
function take_snapshot(){
    save('person_image.png');
}
