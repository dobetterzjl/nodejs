"use strict"
function greet(name){
	console.log("Hello"+name);
}
function eat(food){
	console.log("eat"+food);
}
module.exports={greet:greet,
				eat:eat};

// exports.greet = greet;
// exports.eat = eat;