var assert = require("assert");

/**
 * Question 1.6:
 *
 * Given an image represented by an NxN matrix, where each pixel in the image is 4
 * bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 * 
 */

var printMatrix = function(matrix){
	for(var i = 0, max = matrix.length; i < max; i++){
		var str = "";
		for(var j = 0; j < max; j++){
			str += ( matrix[i][j] + '\t' ); 
		}
		console.log(str);
	}
}

var rotateMatrix = function(matrix){
	var tmp = [];
	if(!matrix.length) return null;
	for(var i = 0, max = matrix.length; i < max; i++){
		if(matrix[i].length != matrix.length) return null;
		tmp.push([]);
	}

	for(var i = 0; i < max; i++){
		for(var j = 0; j < max; j++){
			tmp[j][max - i - 1] = matrix[i][j];
		}
	}
	return tmp;
}

var rotateMatrixEfficiently = function(matrix){

}


var matrix = [
	[1, 2, 3, 5],
	[4, 5, 5, 12],
	[7, 1, 10, 20],
	[0, 0, 1, 0]
];

printMatrix(matrix);
console.log('------------');
printMatrix(rotateMatrix(matrix));