/*

Officer: 4700213
CaseNum: 202-1-75397357-4700213

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Violet filled text with a Deep Sky Blue outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(660,583);
	textFont(letterFont);
	textSize(36);
}

function draw()
{
	background(255);

	// Violet (238,130,238)
	// Deep Sky View (0,191,255)

	fill(100,149,237);
	stroke(0,206,209);
	//text("think", 383.8447265625,185);
	fill(0,128,0);
	stroke(0,0,128);
	//text("kis", 178.59765625,149);
	fill(240,128,128);
	stroke(25,25,112);
	//text("When", 561.205078125,185);
	fill(75,0,130);
	stroke(255,165,0);
	//text("I", 582.4228515625,259);
	fill(244,164,96);
	stroke(0,255,127);
	//text("the", 339.578125,223);
	fill(128,0,128);
	stroke(0,139,139);
	//text("you", 199.681640625,108);
	fill(255,69,0);
	stroke(178,34,34);
	//text("to", 61.7353515625,304);
	fill(186,85,211);
	stroke(218,165,32);
	//text("How", 380.005859375,259);
	fill(0,0,255);
	stroke(25,25,112);
	//text("in", 452.1806640625,149);
	fill(153,50,204);
	stroke(255,215,0);
	//text("sky,", 230.2421875,185);
	fill(64,224,208);
	stroke(255,69,0);
	//text("we", 52.1357421875,223);
	stroke(0,128,0);
	//text("can", 342.015625,185);
	fill(25,25,112);
	stroke(210,105,30);
	//text("My", 8.53125,36);
	fill(106,90,205);
	stroke(0,0,205);
	//text("I", 575.3310546875,149);
	fill(0,128,128);
	stroke(255,165,0);
	//text("banking", 335.1396484375,304);
	fill(0,139,139);
	stroke(0,255,255);
	//text("this", 155.9423828125,304);
	fill(250,128,114);
	stroke(0,139,139);
	//text("yours,", 91.3271484375,376);
	fill(255,69,0);
	stroke(255,0,0);
	//text("nths", 550.8427734375,108);
	fill(154,205,50);
	stroke(255,140,0);
	//text("this", 65.3486328125,259);
	fill(210,105,30);
	stroke(139,69,19);
	//text("How", 414.7685546875,108);
	fill(0,0,255);
	stroke(184,134,11);
	//text("Bob,", 119.44140625,36);
	fill(128,128,0);
	stroke(0,0,255);
	//text("des", 284.50390625,259);
	fill(30,144,255);
	stroke(0,0,139);
	//text("around", 239.8916015625,108);
	fill(123,104,238);
	stroke(32,178,170);
	//text("olate.", 318.990234375,259);
	fill(165,42,42);
	stroke(153,50,204);
	//text("?", 275.130859375,304);
	fill(205,133,63);
	stroke(0,128,0);
	//text("you.", 517.1435546875,185);
	fill(222,184,135);
	stroke(218,165,32);
	//text("ited", 139.0712890625,223);
	fill(250,128,114);
	stroke(127,255,0);
	//text("only", 440.396484375,185);
	fill(139,0,139);
	stroke(255,140,0);
	//text("spring,", 380.615234375,223);
	fill(238,130,238); // Violet
	stroke(255,255,0);
	//text("of", 486.3291015625,185);
	fill(25,25,112);
	stroke(32,178,170);
	//text("my", 612.623046875,223); // Deep Sky View
	fill(138,43,226);
	stroke(0,191,255);      // Deep Sky View
	//text("arms.", 512.2255859375,149);
	fill(199,21,133);
	stroke(0,128,0);
	//text("will", 11.53125,223);
	fill(138,43,226);
	stroke(128,0,128);
	//text("un", 120.1005859375,223);
	fill(255,69,0);
	stroke(0,0,128);
	//text("and", 281.1796875,185);
	fill(139,0,0);
	stroke(50,205,50);
	//text("the", 311.3115234375,108);
	fill(50,205,50);
	//text("I", 57.201171875,108);
	fill(220,20,60);
	stroke(178,34,34);
	//text("witho", 456.2841796875,223);
	fill(30,144,255);
	stroke(124,252,0);
	//text("er", 522.486328125,259);
	fill(233,150,122);
	stroke(0,128,0);
	//text("I", 322.97265625,185);
	fill(106,90,205);
	stroke(0,0,139);
	//text("long", 485.0849609375,259);
	fill(219,112,147);
	stroke(34,139,34);
	//text("we", 92.5625,149);
	fill(0,0,205);
	stroke(139,0,139);
	//text("you", 411.970703125,149);
	fill(153,50,204);
	stroke(127,255,0);
	//text("on", 413.794921875,304);
	fill(50,205,50);
	stroke(255,255,0);
	//text("lo", 203.099609375,304);
	fill(144,238,144);
	stroke(0,0,205);
	//text("is", 604.119140625,108);
	fill(128,0,0);
	stroke(153,50,204);
	//text("miss", 76.244140625,108);
	fill(0,250,154);
	stroke(255,0,0);
	//text("Even", 262.328125,223);
	fill(218,112,214);
	stroke(34,139,34);
	//text("last", 131.0087890625,149);
	fill(255,140,0);
	stroke(0,128,0);
	//text("night", 173.7978515625,185);
	stroke(199,21,133);
	//text("long", 288.9677734375,149);
	fill(128,0,0);
	stroke(0,191,255);
	//text("sed", 207.072265625,149);
	fill(75,0,130);
	stroke(0,255,255);
	//text("side,", 11.53125,259);
	fill(127,255,212);
	stroke(0,191,255);    // Deep Sky View
	//text("ngi", 218.6142578125,304); // Deep Sky View
	fill(238,130,238);     // Violet
	text("up", 72.2841796875,185);    // Violet
	text("store", 92.44140625,304);   // Violet
	text("town", 170.318359375,259);  // Violet
	text("hold", 365.6064453125,149); // Violet
	fill(152,251,152);
	stroke(0,0,205);
	//text("ift", 522.2578125,304);
	fill(144,238,144);
	stroke(32,178,170);
	//text("mo", 522.4755859375,108);
	fill(244,164,96);
	stroke(148,0,211);
	//text("I", 269.9248046875,149);
	fill(0,255,255);
	stroke(107,142,35);
	//text("many", 463.4384765625,108);
	fill(255,140,0);
	stroke(139,69,19);
	//text("x", 71.1689453125,448);
	fill(255,165,0);
	stroke(128,0,128);
	//text("be", 90.58203125,223);
	fill(139,0,0);
	stroke(32,178,170);
	//text("to", 334.900390625,149);
	fill(178,34,34);
	stroke(255,140,0);
	//text("return.", 556.4921875,304);
	fill(100,149,237);
	stroke(0,255,255);
	//text("have", 8.53125,304);
	fill(0,139,139);
	stroke(210,105,30);
	//text("you", 541.455078125,223);
	fill(173,216,230);
	stroke(139,69,19);
	//text("place.", 352.3486328125,108);
	fill(0,191,255);
	stroke(0,206,209);
	//text("since", 34.9658203125,149);
	fill(205,133,63);
	stroke(255,255,0);
	//text("the", 132.7607421875,185);
	fill(0,128,0);
	stroke(184,134,11);
	//text("your", 444.140625,304);
	fill(255,127,80);
	stroke(50,205,50);
	//text("?", 250.08984375,149);
	fill(173,216,230);
	stroke(160,82,45);
	//text("in", 316.50390625,223);
	fill(255,69,0);
	stroke(0,0,255);
	//text("Forever", 8.53125,376);
	fill(173,255,47);
	stroke(160,82,45);
	//text("?", 242.4931640625,223);
	fill(244,164,96);
	stroke(0,0,255);
	//text("feels", 227.1591796875,259);
	fill(128,0,0);
	stroke(154,205,50);
	//text("having", 131.0703125,108);
	fill(240,230,140);
	stroke(0,128,0);
	//text("stare", 8.53125,185);
	fill(0,0,205);
	stroke(218,165,32);
	//text("do", 551.212890625,259);
	fill(173,216,230);
	stroke(107,142,35);
	//text("darling", 48.345703125,36);
	fill(255,99,71);
	stroke(46,139,87);
	//text("much", 428.67578125,259);
	fill(128,128,0);
	stroke(139,69,19);
	//text("ut", 513.5927734375,223);
	fill(72,209,204);
	stroke(154,205,50);
	//text("at", 581.6650390625,223);
	//text("Daisy", 8.53125,448);
	fill(124,252,0);
	stroke(127,255,0);
	//text("How", 8.53125,108);
	fill(0,128,128);        // Deep Sky View
	stroke(0,191,255);     // Deep Sky View
	//text("again", 184.392578125,223); // Deep Sky View
	fill(0,0,139);
	stroke(32,178,170);
	//text("sw", 493.8544921875,304);
	fill(218,165,32);
	stroke(139,0,139);
	//text("I'm", 294.9658203125,304);
	fill(255,105,180);
	stroke(0,206,209);
	//text("ng", 244.712890625,304);
	fill(238,130,238);
	stroke(0,191,255); // Violet
	text("small", 112.505859375,259); // Violet
	fill(238,232,170);
	stroke(139,69,19);
	//text("my", 475.2548828125,149);
	fill(0,250,154);
	stroke(255,165,0);
	//text("it", 11.53125,149);
	fill(238,130,238);
	stroke(0,191,255);
	text("at", 101.802734375,185); // Deep Sky View

}

