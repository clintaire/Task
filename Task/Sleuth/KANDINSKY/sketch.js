function setup()
{
	//create your canvas here
	createCanvas(850,850)
}

function draw()
{
	//do your drawing here
	ellipse(400,400,700);
	strokeWeight(10)


	   //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();
	
}