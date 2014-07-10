//How far are you driving (miles)
//How much is gas per gallon?
//How big is your tank? 17
//What is your vehicle's miles per gallon rating?
//How fast are you gonna drive?
//type of vehicle : car, truck?
//
//miles per gallon (mpg)
//car is -1 truck is -3  (mpg offset)


//output should be 
//you are driving x miles
//it will cost you x $
//you will need to fill you tank x times
//your true miles per gallon:

var prompt = require('sync-prompt').prompt;

var totalMiles = prompt("How many miles are you planning to drive? ");
var gasPerGallon = prompt("How much is gas per gallon? $");
var tankSize = prompt("How many gallons does your tank carry when it is full? ");
var gallonRating = prompt("What is your vehicle's miles per gallon rating? ");
var travelSpeed = prompt("How fast are you gonna drive (MPH)? ");
var typeVehicle = prompt("Are you driving a car or a truck? ");

totalMiles = parseInt(totalMiles);
gasPerGallon = parseFloat(gasPerGallon);
tankSize = parseInt(tankSize);
gallonRating = parseInt(gallonRating);
travelSpeed = parseInt(travelSpeed);

console.log("You are driving " + totalMiles + " miles.");

var currentGallonRating;
var nGallons;
var cost;
var nTanks;

console.log ("Computing variables");

  if(typeVehicle.toLowerCase()  === 'car'){
    if (travelSpeed >  55) { 
      currentGallonRating = gallonRating - (travelSpeed - 55)
        if(currentGallonRating <= 10){
            currentGallonRating = 10;
           }
     nGallons = (totalMiles/currentGallonRating).toFixed(2);
     cost = (nGallons * gasPerGallon).toFixed(2);
     nTanks = (nGallons/tankSize).toFixed(2);
    
    }  else  if (travelSpeed <= 55) {
           currentGallonRating = gallonRating;
           console.log("Travel speed is less than or exactly 55 mph and gallon rating stays the same")
     nGallons = (totalMiles/currentGallonRating).toFixed(2);
     cost = (nGallons * gasPerGallon).toFixed(2);
     nTanks = (nGallons/tankSize).toFixed(2);
    }
   
    console.log("Your trip will cost you: $" + cost);
    console.log("Your true gallons per mile is: " + currentGallonRating);
    console.log("You will have to fill up " + nTanks + " tanks during your trip.");
 }

  else if(typeVehicle.toLowerCase()  === 'truck'){
    if (travelSpeed >  55) { 
      currentGallonRating = gallonRating - (travelSpeed - 55)*3;
        if(currentGallonRating <= 10){
            currentGallonRating = 10;
           }
     nGallons = (totalMiles/currentGallonRating).toFixed(2);
     cost = (nGallons * gasPerGallon).toFixed(2);
     nTanks = (nGallons/tankSize).toFixed(2);

    }  else  if (travelSpeed <= 55) {
           currentGallonRating = gallonRating;
           console.log("Travel speed is less than or exactly 55 mph and gallon rating stays the same")
     nGallons = totalMiles/currentGallonRating;
     cost = nGallons * gasPerGallon;
     nTanks = nGallons/tankSize;
    }

    console.log("Your trip will cost you: $" + cost);
    console.log("Your true gallons per mile is: " + currentGallonRating);
    console.log("You will have to fill up " + nTanks + " tanks during your trip.");
 } 
