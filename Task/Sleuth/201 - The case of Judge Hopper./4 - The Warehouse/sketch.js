/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 4700213
CaseNum: 201-3-62850052-4700213

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

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

    // write the code to draw around the Judge's body below

    // As you enter the ALGOL warehouse you are struck by the most
    // horrendous stench - it’s not the fish. Lying amongst piles of
    // fish carcasses you find the body of Judge Hopper.
    // Gathering yourself together, you tie a handkerchief around your
    // nose and mouth and quickly set about recording the evidence.
    // HINT: You should only need around 20 vertices to draw round the judge.
    // Make sure you close your shape!!

    beginShape()
    vertex(194,192);
    vertex(278,98);
    vertex(425,172);
    vertex(510,250);
    vertex(579,159);
    vertex(646,144);
    vertex(654,185);
    vertex(613,205);
    vertex(599,259);
    vertex(600,366);
    vertex(542,414);
    vertex(476,397);
    vertex(460,413);
    vertex(493,461);
    vertex(447,483);
    vertex(397,408);
    vertex(421,357);
    vertex(301,305);
    vertex(194,192);
    endShape()

    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
