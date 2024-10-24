/*

Officer: 4700213
CaseNum: 101-2-39477489-4700213

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Peru filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Spring Green filled
rectangle around him.

Identify the man in the striped top by drawing a Olive Drab filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	// The rectangles should cover the targets as accurately as possible

	// Identifying Anna with Peru filled rect
	fill(205,133,63);
	rect(729,363,273,551);

	// Identifying heavy-set man with Spring Green rect
	fill(0,255,127);
    rect(250,280,392,428);

	// Identifying striped top man with Olive Drab rect
	fill(107,142,35);
	rect(88,159,135,360);

	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();

}
