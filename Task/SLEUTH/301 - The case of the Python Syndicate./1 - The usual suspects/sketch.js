/*
The case of the Python Syndicate
Stage 1

Officer: 4700213
CaseNum: 301-0-16622776-4700213

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var bonesKarpinskiImage;
var adaLovelaceImage;
var pawelKarpinskiImage;
var rockyKrayImage;
var countessHamiltonImage;
var robbieKrayImage;



//declare your new variables below
var pawelKarpinskiXCoord = 701;
var pawelKarpinskiYCoord = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	adaLovelaceImage = loadImage("ada.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	robbieKrayImage = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(pawelKarpinskiImage, pawelKarpinskiXCoord, pawelKarpinskiYCoord);

	image(bonesKarpinskiImage, 115, 40);
	image(adaLovelaceImage, 408, 40);
	image(rockyKrayImage, 115, 309);
	image(countessHamiltonImage, 408, 309);
	image(robbieKrayImage, 701, 309);

}