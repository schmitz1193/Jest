var testButton = document.getElementById("submit");

//click function for the button	
submit.addEventListener("click", function(){
	//output variable for the dom
	var OutPut = document.getElementById("output");	
	//clearing the dom.
	OutPut.innerHTML = "";
	//value of text input in the dom.
	var input = document.getElementById("input").value;
	//calling the functions to check logic in the input
	verifyAlphaNumeric(input);
	checkWordCount(input);
	duplicateCheck(input);
	
});
