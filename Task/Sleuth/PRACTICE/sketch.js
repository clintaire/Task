function setup()
{
    createCanvas(400,400);
}


function draw()
{
    background(0);
    fill(200,0,0);
    triangle(100,100,100,50,200,100)
    strokeWeight(2);


       //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();
}
