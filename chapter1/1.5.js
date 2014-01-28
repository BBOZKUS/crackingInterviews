var assert = require("assert");

/**
 * Question 1.5:
 *
 * Write a method to replace all spaces in a string with ‘%20’.
 * 
 */

var replaceSpaces = function(string){
	return string.split(' ').join('%20');
}

assert.equal("Hello,%20World!", replaceSpaces("Hello, World!"));
assert.equal("%20", replaceSpaces(" "));
assert.equal("Ali%20ata%20bak.", replaceSpaces("Ali ata bak."));
assert.equal("", replaceSpaces(""));