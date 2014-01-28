var assert = require("assert");

/**
 * Question 1.4:
 *
 * Write a method to decide if two strings are anagrams or not.
 *
 */

var isAnagram = function(source, target){
	if(source.length !== target.length){
		return false;
	}

	var sourceElements = source.split('');
	for(var i = 0, max = target.length; i < max; i++){
		var index = sourceElements.indexOf(target.charAt(i));
		if(index == -1) return false;
		sourceElements.splice(index, 1);
	}
	return sourceElements.length == 0;
}

assert.equal(true, isAnagram("anagram", "mangara"));
assert.equal(true, isAnagram("a", "a"));
assert.equal(true, isAnagram("", ""));
assert.equal(false, isAnagram("a", "b"));
assert.equal(false, isAnagram("abc", "abcd"));
assert.equal(false, isAnagram("ABB", "AAA"));
