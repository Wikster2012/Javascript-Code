//The following can be used to determine Grade Point average.
//Intuitive program. Just Run, the rest is self explanatory.

var amount = parseInt(prompt("Please enter the number of classes you are taking."));
multiArray = new Array (amount);

for (var i = 0; i < multiArray.length; ++i){
	multiArray [i] = new Array (2);
}

var comInc = 1;

function letToNum (letGr){
var result;
	switch (letGr){
		case "A+":
		result = 4.0;
		break;
		
		case "A":
		result = 4.0;
		break;
		
		case "A-":
		result = 3.67;
		break;
		
		case "B+":
		result = 3.33;
		break;

		case "B":
		result = 3;
		break;
		
		case "B-":
		result = 2.67;
		break;
		
		case "C+":
		result = 2.33;
		break;
		
		case "C":
		result = 2.0;
		break;
		
		case "C-":
		result = 1.67;
		break;

		case "D+":
		result = 1.33;
		break;
		
		case "D":
		result = 1.0;
		break;
		
		case "D-":
		result = 0.67;
		break;
		
		case "F":
		result = 0;
		break;
	
		default:
		result = "I don't know!";
	}
		return result; 
}

for (var i = 0; i < multiArray.length; i++){

letGr = prompt("Enter Letter Grade of class " + (i+1) + ". Please use capital letters only.");
crHr = prompt ("Enter the amount of Credit Hours for class " + (i+1));

decGr = letToNum(letGr);

multiArray [i] [0] = decGr;
multiArray [i] [1] = (crHr*1);

}

total = new Array (amount);
total2 = 0;
for (var i = 0; i < multiArray.length; i++){
	total [i]=	multiArray [i] [0] * multiArray [i] [1];
	total2 = multiArray [i] [1] + total2;
}

var gpa =0;

for (var x = 0; x < total.length; x++){
	gpa = (gpa + total [x]);
}
gpa = (gpa/total2);

console.log ("Your GPA is currently " + (gpa).toFixed(2));
