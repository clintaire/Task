/*

Officer: 4700213
CaseNum: 101-3-82287183-4700213

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Saddle Brown filled rectangle with a Dark Blue outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Olive Drab filled
rectangle with a Indigo outline around him.

Identify the man reading the newspaper by drawing a Spring Green filled rectangle
with a Lime Green outline around him.

Identify the woman with the dog by drawing a Dark Magenta filled rectangle with a
Coral outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...

	// Dark Blue outline
	stroke(0,0,139);
	// Saddle Brown filled rect
	fill(139,69,19);
	// Anna
	rect(1603,270,269,521);

	// Indigo outline around
	stroke(75,0,130)
	// Olive Drab filled rect
	fill(107,142,35);
	// Man with monocle smoking the cigar
	rect(823,402,179,244);

	// Lime Green outline
	stroke(50,205,50);
	// Spring Green filled rect
	fill(0,255,127);
	// Man reading the newspaper
	rect(557,347,198,365);

	// Coral outline
	stroke(255,127,80);
	// Dark Magenta filled rect
	fill(139,0,139);
	// Woman with the dog by drawing
	rect(18,280,204,438);



	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
