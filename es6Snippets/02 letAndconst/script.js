/*
* So we saw about declaring variables in our previous section, now let's take
* a deeper look into it.
* 
* Below we have declared two variables using 'let' and and we also have a 'if'
* clause stating that if marks is above forty(40) the result will be qualified.
*/
let marks = 80;
let result = 'Disqualified';

if(marks > 40) {
	let result = 'Qualified';
}

/*
* Now lets open up the console and try to access the 'result' variable by typing
* result in the console and hitting 'enter'
* We see that we still get 'Disqualified' returned. But why?
* This is because when we declare a let variable, it has a block scope.
* So, inside the 'if' block the result variable set can be considered as a different
* one and the one in the outside is a different one. When we type 'result' in our browser
* console, we are accessing the one that is in the global scope.
*
* Now, let's try the same code pattern using 'var' keyword.
*/

var vmarks = 80;
var vresult = 'Disqualified';

if(vmarks > 40) {
	var vresult = 'Qualified';
}

/*
* So, now if you try and access the variable 'vresult' it will return 'Qualified' to you.
* This is because variables declared with 'var' keyword have a function scope and this variable
* is not inside any function. So, it gets redeclared and we are accessing the same variable.
*/

/*
* Okay, so let's look into 'const' keyword. If we decalre a variable using a const keyword,
* we cannot change the value of it anymore. It's pretty much comprehensible that const refers
* to constant.
* Let's give it a try.
*/

const lionKing = '🦁 -> Simba';

/*
* Now let's type in the variable name in the console and see what we get.
* If you try to change the update the value of the variable to some other value or name,
* it will throw an error: Uncaught TypeError: invalid assignment to const 'lionKing'
* This clearly states that a const variable cannot be altered after assignment.
* 
* So, the king of the jungle remains Simba dnd you cannot change it... 🦁 Roar!
*/

/*
* There's another thing about the 'const' keyword when assigning an object with it is that
* the object cannot be changed but the object properties can be updated. Let's have a quick look
* into it.
*/

const farm = {
	hens: 5,
	ducks: 8
};

/*
* Here you cannot re-assign the object farm completely but can update the properties of it.
* Let's try updating the number of hens to ten(10) and access the farm object by typing farm 
* in the console and also add cows 🐄 to the farm.
*/

farm.hens = 10;
farm.cows = 15;

/*
* Tip: If in any case you want to completely prevent anyone from updating the obejects properties,
* you can use a method Object.freeze(). Just pass in the object variable as parameter and the properties
* of that object cannot be updated anymore.
*/

// Object.freeze(farm);