/* Anthony Davis
* 07/24/2014
* Project 3
* Dragon Daycare
*/

// Global Variables
var myName = "John",
    cleaningBool = 1
;





// Boolean Function
var cleaningFunction = function (cleaningBool, myName) {
    var dragonsWashed = 11;
    var cnt = 1;
    
    if (myName === "John") {
        console.log("You've already taken taken the course, right " + myName);
    };
    while (cnt < dragonsWashed && myName !== "John") {
        console.log("You have cleaned " + cnt + " Dragon(s).");
        cnt ++;
    };

    console.log(myName + " Has completed Dragon Cleaning!");
    return cleaningBool;
};

// Array Function

// Number Function

// String Function

console.log("My name is Miss Johns of Johnsville, Lead Dragon Daycare Specialist.");

myName = prompt("What is your name?", "Any name will do here. Like John for instance.");

// Procedure
if (myName === "John") {
    console.log("Welcome John! We hold a high regard for that name here.");
}   else {
    console.log(myName + " isn't a very respectable name around here.");
};


cleaningFunction(cleaningBool, myName);
console.log("--------------");
console.log(cleaningBool);