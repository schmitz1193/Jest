var module = module || {};


// Checking for word count over 100
	function checkWordCount(input) {
		console.log("count words...  ", input);
		var output = input.split(" ").length;
		console.log(output);
		if (output < 100) {
			console.log("you have entered < 100 words ", output);
			return true;
		} else {
			console.log("you cannot entered > 100 words ", output);
			return false;
		}
	}

	//Checking for duplicate words
	function duplicateCheck (input) {
		var newInput = input.split(" ");

		for (var i = 0; i < newInput.length; i++) {
    		if (newInput[i + 1] === newInput[i]) {
    			console.log(newInput, " has duplicate words");

    			// OutPut.innerHTML += "<p>" + "'" + input + "'" + " : has duplicate words" + "</p>";
        	return false;
   			} else {
   				console.log(newInput, " does not have duplicate words");

   				// OutPut.innerHTML += "<p>" + "'" + input + "'" + " : does not have duplicate words" + "</p>";
   				return true;
   				}
			}
		}

	//Checking for Alphanumeric Characters
	function verifyAlphaNumeric (input){
    	var badChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";

    	for (var i = 0; i < input.length; i++) {
       		if (badChars.indexOf(input.charAt(i)) != -1) {
           		console.log(input, "  has non-alphanumeric values");
           		return false;
      			}
   			}
   			console.log(input, "  has alphanumeric values");

    		return true;
		}
	



module.exports = { checkWordCount, duplicateCheck, verifyAlphaNumeric};