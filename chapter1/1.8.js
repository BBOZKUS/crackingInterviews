var assert = require("assert");

/**
 * Question 1.8:
 *
 * Assume you have a method isSubstring which checks if one word is a substring of
 * another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using
 * only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).
 * 
 */

var isSubstring = function(s1, s2){
	return s1.indexOf(s2) != -1 || s2.indexOf(s1) != -1;
}

var isRotation = function(s1, s2){
	if(s1.length !== s2.length) return false;
	return isSubstring(s1, (s2 + s2));
}

assert.equal(true, isRotation("waterbottle", "erbottlewat"));
assert.equal(true, isRotation("qwertyuiop", "uiopqwerty"));
assert.equal(true, isRotation("", ""));
assert.equal(false, isRotation("qwerty", "ytrewq"));
assert.equal(false, isRotation("", "q"));