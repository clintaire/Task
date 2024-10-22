/*

Officer: 4700213
CaseNum: 702-0-97875182-4700213

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of DetectiveVehicleObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveVehicle()
{
	/*
	This function should do the following: 
	 - increment DetectiveVehicleObject's DistDriven property by its SpeedAmount property 
	 - add a random amount between -0.05 and 0.05 to DetectiveVehicleObject's EngineRumbleAmount property
	 - use the constrain function to constrain DetectiveVehicleObject's EngineRumbleAmount property to values between 0.09 and 0.83
	 - call the cycleCar_motor function passing DetectiveVehicleObject as an argument
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var DetectiveVehicleObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	DetectiveVehicleObject = 
	{
		PosX: roadLeftEdge + roadWidth/4,
		PosY: 300,
		DistDriven: 0,
		SpeedAmount: 3,
		EngineRumbleAmount: 0,
		CarType: 'detective',
		LicencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	driveVehicle();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (DetectiveVehicleObject.DistDriven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (DetectiveVehicleObject.DistDriven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(DetectiveVehicleObject);
	image
	(
		carImages["detective"],
		DetectiveVehicleObject.PosX - carImages["detective"].width/2 + random(-DetectiveVehicleObject.EngineRumbleAmount, DetectiveVehicleObject.EngineRumbleAmount),
		DetectiveVehicleObject.PosY + random(-DetectiveVehicleObject.EngineRumbleAmount, DetectiveVehicleObject.EngineRumbleAmount)
	);

}

function cycleCar_motor(car)
{

	car.exhaust.push({size: 2, x: car.PosX, y: car.PosY + carImages[car.CarType].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.SpeedAmount/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
