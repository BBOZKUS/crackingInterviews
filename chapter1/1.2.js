var assert = require("assert");

/**
 * Question 1.2:
 *
 * Write code to reverse a C-Style String. (C-String means that “abcd” is represented as
 * five characters, including the null character.)
 *
 * There are no "char"s in js, so this in not exactly what question wants
 */
var reverseString = function(string){
	var temp = "", i = 0, max = string.length;
	if(!max) return "";
	for(; i < max - 1; i++){
		temp += string.charAt(max - i - 2);
	}
	temp += string.charAt(i);
	return temp;
}

assert.equal("tset\0", reverseString("test\0"));
assert.equal("qwertyuiop\0", reverseString("poiuytrewq\0"));
assert.equal("\0", reverseString("\0"));
assert.equal("", reverseString(""));