// Load the file that exports the functionality to test
jest.dontMock('../app/assignment');  // Don't create mock functions
var math = require('../app/assignment');

// Test to verify checkWordCount. 
describe('checkWordCount', function() {
  it("should accept less than 100 words and return true", function() {
    expect(math.checkWordCount("Merry Christmas")).toBe(true);
  });

  it("should accept more than 100 words and return false", function() {
    //it did not like the string to be broken up in new lines, so it has to be a very long single line to pass the test. 
    expect(math.checkWordCount("THis is a string of words that need to be more than 100 so that this test returns a false value,  hello how are you I am trying to type a lot of words in here!! Is this more than one hundred characters yet??????? possibly not. Are there more than 100 words yet.  We wish you a merry christmas, we wish you a merry Christmas, we wish you a merry Christmas and a happy new year. . . . . this is still less than 100 words . ? ? ? ? 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 34 35 36 37 38 39 40 41 42 43 44 45 YES!! finally more than 100!!!")).toBe(false);
  });
});

// Test to verify duplicate. 
describe('duplicateCheck', function() {
  it("should accept a string with no duplicate words and return true", function() {
    expect(math.duplicateCheck("Merry Christmas")).toBe(true);
  });

  it("should accept a string with duplicate words and return false", function() {
    //it did not like the string to be broken up in new lines, so it has to be a very long single line to pass the test. 
    expect(math.duplicateCheck("Merry Merry Christmas")).toBe(false);
  });
});
// Test to verify verifyAlphaNumeric. 
describe('verifyAlphaNumeric', function() {
  it("should accept an alpha numeric string and return true", function() {
    expect(math.verifyAlphaNumeric("Merry Christmas")).toBe(true);
  });

  it("should accept a non alpha-numeric string and return false", function() {
    //it did not like the string to be broken up in new lines, so it has to be a very long single line to pass the test. 
    expect(math.verifyAlphaNumeric("Merry Christmas & Happy New Year!!!!")).toBe(false);
  });
});
