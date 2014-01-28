var assert = require("assert");

/**
 * Question 1.3:
 *
 * Design an algorithm and write code to remove the duplicate characters in a string
 * without using any additional buffer. NOTE: One or two additional variables are fine.
 * An extra copy of the array is not.
 *
 * FOLLOW UP
 * Write the test cases for this method.
 */
var removeDuplicates = function(string){
	var seen = [];
	if(!string || !string.length) return "";

	for(var i = 0, max = string.length; i < max; i++){
		if(seen[string.charAt(i)]){
			string = string.slice(0, i) + string.slice(i + 1);
			max--;
			i--;
		}else{
			seen[string.charAt(i)] = true;
		}
	}
	return string;
}

assert.equal("qwerty", removeDuplicates("qwerty"));
assert.equal("qwerty", removeDuplicates("qqwweerrttyy"));
assert.equal("qwerty", removeDuplicates("qwertyqwerty"));
assert.equal("qw", removeDuplicates("qqqqqqwwwwww"));
assert.equal("", removeDuplicates(""));
assert.equal("q", removeDuplicates("qq"));
assert.equal("q", removeDuplicates("q"));

