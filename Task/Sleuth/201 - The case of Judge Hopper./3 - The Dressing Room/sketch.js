/*
201 - The case of Judge Hopper
Stage 3 - The dressing room

Officer: 4700213
CaseNum: 201-2-98149039-4700213

No sooner do you enter the lobby of the Cobol Theatre than the sound of gunshots leads you running towards the backstage area. You head towards a swinging door, the star dressing room. Sure enough you find a series of bullet holes peppered across the mirror. You are about to turn round and resume your chase when you notice a familiar pattern in the holes. Frantically you grab some lipstick from the dresser and draw on the mirror.

Use the vertex function to complete the pattern.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to join the bullet holes below

    // No sooner do you enter the lobby of the Cobol Theatre than the sound of
    // gunshots leads you running towards the backstage area.
    // You head towards a swinging door, the star dressing room.
    // Sure enough you find a series of bullet holes peppered across the mirror.
    // You are about to turn round and resume your chase when you notice
    // a familiar pattern in the holes. Frantically you grab some
    // lipstick from the dresser and draw on the mirror.

    beginShape()
    vertex(324,86);
    vertex(363,44);
    vertex(389,107);
    vertex(484,135);
    vertex(432,203);
    vertex(520,220);
    endShape()


    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
