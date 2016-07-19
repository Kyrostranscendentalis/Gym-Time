//20.Check if String is a palindrome
// a palindrome is like bob or wow or even "A man, a plan, a canal, Panama!"
//corner cases
// -- ignore punctuation, capitalization, white space
// -- wrong input
// -- odd or even length inputs
// -- strings length 1? length 0?
// - problem: strength length - is it cheating to use JS string.prototype.length()?
// newlines?
//bonus - make a palindromatic word square like on wikipedia

var assert = require('assert');

var testCases = new Map();
testCases.set("aa", true);
testCases.set("bob", true);
testCases.set("wow", true);
testCases.set("A man, a plan, a canal, Panama!", true);
testCases.set("aaba", false);
testCases.set("aba", true);
testCases.set("l,o.l ; o! l!?", true);

var ignoreThese = [" ", ",", ";", ".", "?", "!"];


//strip characterSet from string and normalize case
function prepare(string, characterSet) {
  var strippedCharacters = new Set(characterSet);
  var returnString = "";
  for (var character of string) {
    if (!strippedCharacters.has(character)) {
      returnString = returnString.concat(character);
    }
  }
  return returnString.toLowerCase();
}



var methods = [];

assert(prepare(" aha ", ignoreThese) == "aha", "_aha_ was not stripped to aha");
assert(prepare("A man. a plan; a canal, Panama?!", ignoreThese) == "amanaplanacanalpanama", "panama string was not stripped");

testCases.forEach(function(value, key) {
  methods.forEach(function(method) {
    assert(method(key) === value, method.name + "(" + key + ") != " + value);
  });
});