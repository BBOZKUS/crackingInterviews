var assert = require("assert");

/**
 * Question 1.7:
 *
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
 * column is set to 0.
 * 
 */
var printMatrix = function(matrix){
	for(var i = 0, max = matrix.length; i < max; i++){
		var str = "";
		for(var j = 0, rowMax = matrix[0].length; j < rowMax; j++){
			str += ( matrix[i][j] + '\t' ); 
		}
		console.log(str);
	}
}

var clearMatrix = function(matrix){
	var data = {rows: [], cols: []};

	for(var i = 0, max = matrix.length; i < max; i++){
		var index = matrix[i].indexOf(0);
		if(index !== -1){
			data.rows.push(i);
			data.cols.push(index);
		}
	}

	data.rows.forEach(function(row){
		for(i = 0; i < matrix[row].length; i++){
			matrix[row][i] = 0;
		}
	});

	data.cols.forEach(function(col){
		matrix.forEach(function(row){
			row[col] = 0;
		});
	});

	return matrix;
}

var matrix = [
	[0, 2, 1],
	[1, 1, 2],
	[1, 1, 2],
	[1, 1, 2],
	[1, 1, 2]
];

printMatrix(clearMatrix(matrix));