//Randomly initializes an Array with numbers
//Starting at 1 through a defined length
//Without repeating
//Example: var testArray=randomizeArray(10);
//testArray will be an array of length 11
//Holding values 1 through 10 in a random order
//Zero index is undefined.
//Author: Chris Cattano
//Written: 12/11/12

function randomizeArray(arrayLen){
	function removeA(arr) {
		var x, a = arguments, L = a.length, ax;
		while (L > 1 ) {
			x = a[--L];
			while ((ax= arr.indexOf(x)) !== -1) {
				arr.splice(ax, 1);
			}
		}
		return arr;
	}

	var numLength = arrayLen;
	var numHolder = [];

	for (var nhc = 1; numHolder.length<=numLength; nhc++){
		numHolder[nhc]=nhc;
	}	

	var finalArray = [];
	var y=numLength;

	for (var fac = 1; finalArray.length<=numLength; fac++){
		var randNum = Math.floor(Math.random()*(y--)+1);
		var erase = numHolder[randNum];
		finalArray[fac]=erase;
		removeA(numHolder, erase);
	}
	return finalArray;
}