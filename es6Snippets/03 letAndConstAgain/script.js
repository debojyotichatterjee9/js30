/*
* replacing the IIFE(Immediately Invoked Funcion Expression)
* ref: http://benalman.com/news/2010/11/immediately-invoked-function-expression/
* Coined by Ben Alman in 2010, it is a function that runs itself immediately and 
* it creates a scope and all the variabled declared inside the scope, remain inside
* and nothing gets leaked out of the scope.
*/

/*
* So, let's create a IIFE and see how it works. Here we have a iife and a variable 'name'
* declared inside it. We log it inside the function and log it again outside.
*/

(function(name) {
    var name = "Debo";
    console.log(`Inside the function: ${name}`)
})();

console.log(`Outside the function: ${name}`)

/*
* We see that the first log prints the value of the name variable but the second log
* which is outside the function does not print the value insted it prints an empty string.
* It is not throwing an undefined error because the 'console.log' statement residing outside
* the function is referring to the name property of window i.e window.name.
* Lets see another example to make this more clear. Look at the function below
*/
var name = "Debojyoti";
(function(name) {
    name = "Javascript";
    console.log(`Inside the function: ${name}`)
})(name);

console.log(`Outside the function: ${name}`)
console.log(`Window property: ${window.name}`)

/*
* Now, when we use let and const, in that case we do not need such function to restrict the scope
* and prevent leaking. This is because, let and const are blocked scope by default.
* So, lets declare a const variable the the same variable name and place it inside a block.
*/

{
    const name = "Jason"
    console.log(`Inside the function: ${name}`)
}
console.log(`Outside the function: ${name}`)

/*
* You see in the above example that the log statement inside the block prints "Jason", but the 
* log statement outside prints "Debojyoti". Why? because the variable has a scope definition and 
* the window.name variable was already assigned that value "Debojyoti" in the above example.
*/

/*
* Another thing to notice with var declaration can be seen with the for loop example. Suppose
* we have a for loop as shown below and we are just logging the iteration variable 'i'.
*/

for(var i=0; i<5; i++) {
    console.log(`Inside the block: ${i}`);
}
console.log(`Outside the block: ${i}`);

/*
* So you see that we get the value of 'i' outside the block as well, and thats variable leaking
* again. How to get rid of that? Using "let" ofcourse and not "const", otherwise you cannot reassign 
* the value.
*/

/*
* Now, lets take another scenario with the same for loop example. suppose we have some fetch request to make
* inside the for loop of we want to make some await operation which may require time to fetch the data from the
* server
*/

for(var j=0; j<5; j++) {
    fetch('https://my-json-server.typicode.com/debojyotichatterjee9/myjsonserver/employees')
    .then(response => console.log(`Inside the block: ${j}`))
}

/*
* You see that after the above loop prints all the values of j to be 5. so, what happens is by the time the
* fetch request is completed the loop goes through all the iterations, reassigning the variable 'j' everytime,
* and finally it logs out to be 5. Now a easy way out of this problem is using "let" to declare the iteration
* variable.
*/
setTimeout(async() => {
for(let k=0; k<5; k++) {
   await fetch('https://my-json-server.typicode.com/debojyotichatterjee9/myjsonserver/employees')
    .then(response => console.log(`Inside the block: ${k}`))
}    
}, 5000)
