/* Let's declare a variable named 'randomNumber' and assign a value (999) to it. */
	var randomNumber = 999;
	console.log(randomNumber); // here we can log the variable value and check
	randomNumber = 888; // now we can also reassign the variable with a new value to it (888)
	console.log(randomNumber); // we log the value again and you will see the newly assigned value to be logged out on here.

	/*
	* Now lets try to declare a new variable with the same name as 'randomNumber'
	*/
	var randomNumber = 199; // so we see that we can re-declare the same variable using the same name.
	console.log(randomNumber);

	/*
	* So, we see here that we can create the same reassign a variable and create re-declare a variable
	* with the same variable name multiple times in the same scope.
	* If you try to do the same using 'let' you will get an error. You may try yourself in the console
	* to see what error you get.
	*/

	/* 
	* Now, theres another thing we would want to know that the var variables have a function scope,
	* that is if they are declared inside a function then the variable is accesible only inside the 
	* function but if it is created outside the function then it has global scope. You can try opening
	* the console rigt now and type randomNumber in it, you will get the last updated value of the variable.
	* 
	* So, let's create a function and try to access the variable from the console like we did with the randomNumber.
	*/

	function getSheeps() {
		var sheeps = 25;
		console.log(`The number of sheeps are ${sheeps}.`)
	}
	getSheeps();

	/*
	* Now try typing sheeps in the console window and hit enter.
	* You will get a reference error stating the the varibale 'sheeps' is not defined.
	* This is because the 'sheeps' variable only has scope within the function and cannot be
	* accessed globally.
	*/

	/*
	* Now let's look at another example.
	* let's say we have  a situation where we need to divide 20 candies in such a way that each 
	* kid gets 2 candies. So let's find out the number of kids needed to make that happen.
	*/

	var candies = 20;
	if(candies > 2) {
		var kids = candies / 2;
		console.log(`We need ${kids} kids to divide ${candies} candies equally so each of them gets 2 candies.`)
	}

	/*
	* So, in this case the the variable kids is declared using 'var' keyword inside an if clause which is a block.
	* Now, if you type the variable 'kids' in your browser console you will the the value is looged out.
	* 
	* Let's try doing the same thing using a let variable.
	*/

	var iceCreams = 20;
	if(iceCreams > 2) {
		let children = iceCreams / 2;
		console.log(`We need ${children} children to divide ${iceCreams} iceCreams equally so each of them gets 2 iceCreams.`)
	}

	/*
	* Now, let's try to access the variable 'children' from the browser console.
	* You will get a reference error stating the the varibale 'children' is not defined.
	* You will get the same behaviour if you use 'const' instead of 'let'. The only difference
	* between 'let' and 'const' is that you cannot reassign any value to a 'const' variable.
	* 
	* Hence, we see that the 'var' does not have a block scope but can have a fucntion or global scope.
	* You can re-declare a variable with the same name using 'var'.
	*/