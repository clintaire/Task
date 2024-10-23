/*

Officer: 4700213
CaseNum: 202-3-62206575-4700213

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Chocolate filled text with a Fire Brick outline in Melissa font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(607,483);
	textSize(30);
}

function draw()
{
	background(255);

	// Chocolate filled text with a Fire Brick outline in Melissa font
	// Chocolate (210,105,30)

	fill(123,104,238);
	stroke(210,105,30); // Chocolate
	textFont(Melissa);
	//text("we", 327.6123046875,90);
	fill(0,128,128);
	stroke(255,215,0);
	//text("so,", 313.271484375,158);
	fill(72,209,204);
	stroke(255,165,0);
	textFont(RonsFont);
	//text("ort", 110.765625,158);
	push();
	fill(135,206,250);
	stroke(124,252,0);
	textFont(Ballpointprint);
	//text("away", 458.525390625,90);
	pop();
	fill(222,184,135);
	textFont(Melissa);
	//text("no", 44.966796875,192);
	push();
	fill(160,82,45);
	stroke(255,0,0);
	textFont(Diggity);
	//text("rets,", 478.6220703125,226);
	pop();
	stroke(178,34,34);
	textFont(Ballpointprint);
	//text("break", 42.958984375,125);
	fill(124,252,0);
	stroke(127,255,0);
	textFont(Diggity);
	//text("My", 16.529296875,30);
	push();
	fill(65,105,225);
	stroke(0,0,255);
	textFont(RonsFont);
	//text("these", 231.81640625,192);
	pop();
	fill(0,128,0);
	//text("d", 395.806640625,192);
	push();
	fill(238,130,238);
	stroke(0,206,209);
	//text("Bob,", 122.603515625,30);
	pop();
	fill(154,205,50);
	stroke(107,142,35);
	textFont(Melissa);
	//text("yours,", 127.53125,324);
	fill(218,112,214);
	stroke(34,139,34);
	textFont(Diggity);
	//text("sure", 12.599609375,226);
	fill(139,69,19);
	stroke(165,42,42);
	textFont(RonsFont);
	//text("sort", 166.373046875,125);
	fill(32,178,170);
	stroke(128,0,0);
	//text("?", 266.140625,158);
	fill(0,250,154);
	stroke(255,215,0);
	textFont(Diggity);
	//text("If", 287.29296875,158);
	fill(75,0,130);
	stroke(255,165,0);
	textFont(Melissa);
	//text("Perhaps", 252.8876953125,90);
	push();
	fill(0,0,139);
	stroke(128,0,0);
	textFont(Diggity);
	//text("sometimes.", 302.62109375,264);
	pop();
	fill(255,215,0);
	stroke(148,0,211);
	textFont(Diggity);
	//text("out.", 305.6083984375,125);
	fill(255,0,255);
	stroke(75,0,130);
	textFont(Ballpointprint);
	//text("Daisy", 7.109375,384);
	fill(255,127,80);
	stroke(128,0,128);
	textFont(RonsFont);
	//text("orever", 36.2421875,324);
	fill(107,142,35);
	stroke(0,128,0);
	textFont(Ballpointprint);
	//text("?", 349.177734375,226);
	fill(154,205,50);
	stroke(199,21,133);
	textFont(Melissa);
	//text("our", 377.6953125,125);
	push();
	fill(152,251,152);
	stroke(153,50,204);
	textFont(Diggity);
	//text("I", 242.9541015625,226);
	pop();
	stroke(165,42,42);
	//text("?", 582.6728515625,125);
	fill(135,206,250);
	stroke(255,69,0);
	textFont(RonsFont);
	//text("silence.", 12.517578125,264);
	fill(218,112,214);
	stroke(46,139,87);
	textFont(Diggity);
	//text("you", 44.5869140625,158);
	push();
	fill(154,205,50);
	stroke(255,0,0);
	//text("me", 190.6103515625,90);
	pop();
	fill(64,224,208);
	textFont(RonsFont);
	//text("more", 168.3642578125,226);
	fill(0,0,128);
	stroke(0,0,255);
	textFont(Ballpointprint);
	//text("all", 268.98046875,125);
	push();
	fill(128,128,0);
	stroke(0,100,0);
	textFont(RonsFont);
	//text("I'm", 467.8623046875,192);
	pop();
	fill(233,150,122);
	stroke(210,105,30); // Chocolate
	textFont(Melissa);
	//text("much", 121.357421875,226);
	fill(0,0,255);
	stroke(184,134,11);
	textFont(Diggity);
	//text("should", 359.650390625,90);
	fill(0,0,205);
	stroke(0,191,255);
	textFont(RonsFont);
	//text("how", 66.77734375,226);
	stroke(165,42,42);
	textFont(Diggity);
	//text("send", 429.275390625,158);
	fill(127,255,212);
	stroke(0,206,209);
	//text("and", 120.1748046875,125);
	push();
	fill(173,216,230);
	stroke(165,42,42);
	textFont(RonsFont);
	//text("for", 523.353515625,90);
	pop();
	stroke(255,0,255);
	textFont(Ballpointprint);
	//text("can", 257.9228515625,226);
	fill(128,0,128);
	stroke(255,0,0);
	textFont(Diggity);
	//text("elays.", 407.8662109375,192);
	fill(233,150,122);
	stroke(128,0,0);
	textFont(Ballpointprint);
	//text("continual", 301.220703125,192);
	fill(0,128,128);
	stroke(220,20,60);
	textFont(Melissa);
	//text("x", 85.9765625,384);
	fill(240,128,128);
	stroke(107,142,35);
	textFont(RonsFont);
	//text("you", 68.146484375,90);
	push();
	fill(178,34,34);
	stroke(165,42,42);
	textFont(Diggity);
	//text("cash.", 484.142578125,158);
	pop();
	fill(139,69,19);
	stroke(0,100,0);
	textFont(Diggity);
	//text("?", 230.05859375,90);
	fill(135,206,250);
	stroke(255,140,0);
	textFont(RonsFont);
	//text("You", 102.6640625,264);
	fill(255,0,0);
	stroke(154,205,50);
	textFont(Diggity);
	//text("dar", 52.5576171875,30);
	fill(0,255,255);
	stroke(25,25,112);
	textFont(Melissa);
	//text("Are", 8.109375,158);
	fill(144,238,144);
	textFont(Ballpointprint);
	//text("I", 345.9384765625,158);
	fill(34,139,34);
	stroke(0,250,154);
	textFont(Diggity);
	//text("Is", 353.2470703125,125);
	fill(107,142,35);
	stroke(107,142,35);
	//text("ling", 86.546875,30);
	fill(106,90,205);
	stroke(32,178,170);
	textFont(Melissa);
	//text("can", 10.109375,192);
	fill(244,164,96);
	stroke(46,139,87);
	textFont(Diggity);
	//text("go", 427.1767578125,90);
	push();
	fill(32,178,170);
	stroke(0,0,205);
	textFont(RonsFont);
	//text("ignore", 147.470703125,192);
	pop();
	stroke(255,0,255);
	textFont(Ballpointprint);
	//text("relationship", 409.4931640625,125);
	fill(0,0,205);
	stroke(0,0,128);
	textFont(Melissa);
	//text("ed", 277.2734375,264);
	fill(50,205,50);
	stroke(0,128,0);
	//text("of", 161.537109375,158);
	fill(0,255,255);
	stroke(165,42,42);
	textFont(Ballpointprint);
	//text("The", 382.5966796875,226);
	fill(65,105,225);
	stroke(0,0,205);
	//text("can", 382.447265625,158);
	fill(147,112,219);
	stroke(160,82,45);
	//text("money", 187.21484375,158);
	fill(210,105,30); // Chocolate
	stroke(178,34,34);
	textFont(Melissa);
	text("the", 536.099609375,226);
	text("guard", 233.416015625,264);
	text("take", 304.7509765625,226);
	text("safe", 537.376953125,125);
	text("avoid", 120.294921875,90);
	push();
	fill(30,144,255);
	stroke(160,82,45);
	//text("not", 523.2626953125,192);
	pop();
	fill(107,142,35);
	stroke(25,25,112);
	textFont(Diggity);
	//text("so", 201.287109375,264);
	fill(0,191,255);
	stroke(0,255,255);
	textFont(RonsFont);
	//text("sh", 88.294921875,158);
	fill(0,100,0);
	stroke(139,0,139);
	textFont(Ballpointprint);
	//text("longer", 70.2548828125,192);
	fill(139,69,19);
	stroke(0,0,205);
	textFont(RonsFont);
	//text("F", 12.599609375,324);
	push();
	fill(255,127,80);
	stroke(34,139,34);
	//text("I", 541.7099609375,158);
	pop();
	stroke(255,0,0);
	textFont(Diggity);
	//text("are", 155.80859375,264);
	fill(123,104,238);
	textFont(Melissa);
	//text("ing", 161.751953125,90);
	fill(218,165,32);
	stroke(139,69,19);
	textFont(Diggity);
	//text("sec", 447.8740234375,226);
	fill(255,99,71);
	stroke(178,34,34);
	textFont(RonsFont);
	//text("Are", 12.599609375,90);
	fill(135,206,235);
	stroke(32,178,170);
	textFont(Melissa);
	//text("this", 229.68359375,125);
	stroke(139,0,0);
	textFont(Diggity);
	//text("a", 18.599609375,125);



}
