var assert = require("assert");

/**
 * Question 1.1:
 *
 * Implement an algorithm to determine if a string has all unique characters. What if you
 * can not use additional data structures?
*/
var isUniqueChars = function(string){
	var seen = [];
	for(var i = 0, max = string.length; i < max; i++){
		if(seen[string.charAt(i)]){
			return false;
		}
		seen[string.charAt(i)] = true;	
	}
	return true;
}

assert.equal(true, isUniqueChars("qwerty"));
assert.equal(false, isUniqueChars("qwertyq"));
assert.equal(true, isUniqueChars("a"));
assert.equal(false, isUniqueChars("aa"));
assert.equal(true, isUniqueChars(""));