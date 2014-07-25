/* Anthony Davis
* 07/24/2014
* Project 3
* Dragon Daycare
*/

// Global Variables
var myName = "John",
    hasLice = true,
    napsTaken = 1,
    dragonName = "none",
    newDragonName = "none"
;

var dragonNames = [
    "Puff",
    "Draco",
    "Igneel",
    "Falkor"
];





// Boolean Function
var cleaningFunction = function (hasLice, myName) {

    if (hasLice === true) {
        console.log("You may not enter into the daycare unless you have deloused him/her properly.");
    };
    while (hasLice === true) {
        var delousing = confirm("Have you properly deloused " + dragonName + " yet?");
        while (hasLice === true) {
            var specialShampoo = confirm("Did you use the special anti-dragonlice shampoo?");
            console.log("You must use the John Johnson approved anti-dragonlice shampoo only!");
        }
        console.log("You may not enter into the daycare unless you have deloused him/her properly.");
        hasLice = !delousing;
    };

    console.log(myName + " Has entered Dragon Daycare!");
    return hasLice;
};

// Array Function
var arrayFunction = function (){
    
    for (var key in jsonData.dragonNames) {
        
        for (var newKey in jsonData.dragonNames[key]) {
            
            console.log(key + ":" + newKey + ": " + jsonData.dragonNames[key][newKey]);
        }
    };
    
};

// Number Function
var numberFunction = function (napsTaken, myName) {
    var cnt = 7;
    
    console.log("Here at Dragon Daycare we take 6 naps throughout the day.");
    
    while (napsTaken < cnt) {
        console.log(dragonName + " has napped " + napsTaken + " time(s).");
        napsTaken++;

    };
    napsTaken = napsTaken - 1;
    return napsTaken;
};

// String Function
var nicknameFunction = function(dragonName) {
    var nicknamePrompt = prompt("What is a nickname for you?", "i.e. firebreather or humanslayer");
    console.log(dragonName + ' "' + nicknamePrompt + '"' + " sounds terrifying! Great thinking!");
    return nicknamePrompt;
};

console.log("My name is Miss Johns of Johnsville, Lead Dragon Daycare Specialist.");

myName = prompt("What is your name?", "Any name will do here. Like John for instance.");

// Procedure
if (myName === "John") {
    console.log("Welcome John! We hold a high regard for that name here.");
}   else {
    console.log(myName + " isn't a very respectable name around here.");
};

// Naming your dragon
dragonName = prompt("What is the name of your Dragon?", "Think of a fun one!");

hasLice = confirm("Does your dragon have lice?");

hasLice = cleaningFunction(hasLice, myName);

napstaken = numberFunction(napsTaken, myName);

console.log(dragonName + " is a good name, but lets add something fun");
newDragonName = nicknameFunction(dragonName);

console.log("Let's look at the roster of the top Dragons here");
arrayFunction();
console.log("Maybe one day you can be on this list " + dragonName + " " + newDragonName + ".");


//Final Output

console.log("With no lice found, " + napsTaken + " naps taken, " + dragonName + 
        " was added the the nickname " + newDragonName);
console.log("This was a fine day in Dragon Daycare.");