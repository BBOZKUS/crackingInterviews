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

	for(i = 0; i < max; i++){
		for(var j = 0; j < max; j++){
			tmp[j][max - i - 1] = matrix[i][j];
		}
	}
	return tmp;
}

var rotateMatrixEfficiently = function(matrix){
	if(!matrix.length) return null;
	for(var i = 0, max = matrix.length; i < max; i++){
		if(matrix[i].length != matrix.length) return null;
	}

	var tmp;
	var n = matrix.length - 1;
	for(i = 0, max = matrix.length / 2; i < max; i++){
		for(var j = 0, k = matrix.length - 2 * i; j < k - 1; j++){
			tmp = matrix[i][i + j];
			matrix[i][i + j] = matrix[n - j - i][i];
			matrix[n - j - i][i] = matrix[n - i][n - j - i];
			matrix[n - i][n - j - i] = matrix[i + j][n - i];
			matrix[i + j][n - i] = tmp;
		}
	}
	return matrix;
}


var matrix = [
	[1, 2, 3, 5],
	[4, 5, 5, 12],
	[7, 1, 10, 20],
	[0, 0, 1, 0]
];

printMatrix(matrix);
console.log();
printMatrix(rotateMatrixEfficiently(matrix));