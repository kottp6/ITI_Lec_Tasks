// 1-	On your page, show alert for the user that say “Welcome to my site”,
//  then show him prompt ask him to enter his name and write to the page  “ welcome + his name”. 
// (Remark what happen to the home page after writing welcome page).

// window.alert("Welcome to my site");
// let user = window.prompt("Enter Your Name :");
// console.log(user);

// document.getElementById("name").innerHTML = `Welcome ${user}`;

////////////////////////////////////////////////////////////////////////////////

// 2-Make a function in external JS file, that takes 2 parameters and return sum of them
// (function return the result, don't alert or print inside it), and make a button that when clicked;
// asks the user to enter 2 numbers (prompt), call the sum function, and display the result 
// returned by the function in the console.

// function sum(num1, num2){
//     return num1+num2
// }

// function handleButtonClick(){
//     let num1 = parseFloat(prompt("Enter The First Number :"));
//     let num2 = parseFloat(prompt("Enter The Sceond Number :"));
//     if(!isNaN(num1)&& !isNaN(num2)){
//         let result = sum(num1,num2)
//         console.log("The Sum is :" + result);
//     }
//     else{
//         console.log("Please enter valid numbers");
        
//     }
// }

////////////////////////////////////////////////////////////////////////////////

// 3-Make a function that takes today’s temperature as a parameter, 
// prints: “HOT” if the entered temperature are more than or equals 30 and 
// “Cold” if it’s less than 30 (use ternary conditional operator).

// function checkTemp(temp)
// {
//     console.log(temp >=30 ? "Hot" : "Cold");
// }

// checkTemp(32);
// checkTemp(20);

////////////////////////////////////////////////////////////////////////////////

// 4-	Change the previous function to take 2 parameters: Temperature and Actual feel temperature to have 3 cases:
// a.	Prints normal if both of temperature and actualFeel between 25 and 30.
// b.	Prints Cold if both of temperature and actualFeel less than 25.
// c.	Prints Hot if both of temperature and actualFeel higher than 30.
// d.	Prints “Ambiguous, can’t detect”, in any different case.
// Can you use ternary conditional operator in previous example? Why?
// Can you use switch case in previous example? Why?

// function checkWeather(temp,actual){
//     if(temp >=25 && temp <=30 && actual>=25 && actual<=30)
//     {
//         console.log("Normal");
//     }
//     else if(temp < 25 && actual < 25)
//     {
//         console.log("Cold");
//     }
//     else if(temp>30 && actual >30)
//     {
//         console.log("Hot"); 
//     }
//     else{
//         console.log("Ambiguous, can’t detect");
//     }
// }


//using ternary Operator
//we can use switch because Switch works with discrete values and Our conditions involve ranges 

// function checkWeather(temp, actual) {
//     console.log(
//         (temp >= 25 && temp <= 30 && actual >= 25 && actual <= 30) ? "Normal" :
//         (temp < 25 && actual < 25) ? "Cold" :
//         (temp > 30 && actual > 30) ? "Hot" :
//         "Ambiguous, can’t detect"
//     );
// }
// checkWeather(28, 27); 
// checkWeather(22, 20);
// checkWeather(32, 33); 
// checkWeather(26, 31);



////////////////////////////////////////////////////////////////////////////////

// 5-	Make a function that takes Student faculty as a parameter, checks:
// a.	If the entered faculty: FCI, show message: “You’re eligible to Programing tracks”.
// b.	If the entered faculty: Engineering, show message: “You’re eligible to Network and Embedded tracks”.
// c.	If the entered faculty: Commerce, show message: “You’re eligible to ERP and Social media tracks”.
// d.	For any other faculty, show message: “You’re eligible to SW fundamentals track”.
// (Use switch(). And why it’s better in that case?).

// switch better because Avoids Redundant Conditions == and More Readable

// function checkFaculty(faculty) {
//     switch (faculty.toLowerCase()) { // Convert input to lowercase to make it case-insensitive
//         case "fci":
//             console.log("You’re eligible for Programming tracks");
//             break;
//         case "engineering":
//             console.log("You’re eligible for Network and Embedded tracks");
//             break;
//         case "commerce":
//             console.log("You’re eligible for ERP and Social media tracks");
//             break;
//         default:
//             console.log("You’re eligible for SW fundamentals track");
//     }
// }

// checkFaculty("FCI");

////////////////////////////////////////////////////////////////////////////////

// 6-Write a function that takes 2 parameters: start and end number and print odd numbers
// between the given 2 numbers.

    // function printOdd(start, end)
    // {
    //     for(let i= start; i<=end; i++)
    //     {
    //         if(i % 2 !== 0)
    //         {
    //             console.log(i);
    //         }
    //     }
    // }

    // printOdd(3,15);

////////////////////////////////////////////////////////////////////////////////


// 7-	Make a buttons on a page when user clicks it, ask him to enter math 
// expression (Ex. 3+4*5/10*8), and then pass this expression (user input)
// to a function that take one parameter and execute this expression and
// then show the result of this expression for the user in an alert in that format:
// (You entered: 3+4*5, and the result is: 23). 

// function evaluateExpression(expression) {
//     try {
//         let result = eval(expression);
//         alert(`You entered: ${expression}, and the result is: ${result}`);
//     } catch (error) {
//         alert("Invalid mathematical expression. Please try again.");
//     }
// }

// function handleMathExpression() {
//     let userExpression = prompt("Enter a math expression (e.g., 3+4*5/10*8):");

//     if (userExpression) {
//         evaluateExpression(userExpression);
//     } else {
//         alert("No expression entered.");
//     }
// }


////////////////////////////////////////////////////////////////////////////////


// 8-	On contact page prompt user to enter his name, make sure that name is string,
// and let the user enter his birth year and make sure that it is a number, and it is less than 2010,
// and then calculate his age. For each prompt if user input valid show him next prompt,
// if not valid show him the same prompt again until user enters it correctly (use loops). 
// And after validating user input, write all user input on the page in that format:

// function getValidName() {
//     let name;
//     do {
//         name = prompt("Enter your name:");
//     } while (!name || !isNaN(name));
//     return name;
// }

// function getValidBirthYear() {
//     let year;
//     do {
//         year = parseInt(prompt("Enter your birth year (must be less than 2010):"), 10);
//     } while (isNaN(year) || year >= 2010);
//     return year;
// }

// function displayUserInfo() {
//     let userName = getValidName();
//     let birthYear = getValidBirthYear();
//     let age = new Date().getFullYear() - birthYear;

//     let output = `Hello ${userName}, you were born in ${birthYear}, and you are ${age} years old.`;
    
//     document.getElementById("userInfo").innerText = output; // Display on page
// }


// window.onload = displayUserInfo;

////////////////////////////////////////////////////////////////////////////////

// "use strict";
// function foo() {
//     var x;
//     x = 5;
//     y = 6;    
//     return x + y;
// }
// console.log(foo()); //11 with no strict /// y is not defined with use strcit

////////////////////////////////////////////////////////////////////////////////

//"use strict";
// var y;	
// y=10; 
// x = 5; 
// console.log(x); //5 with no use strict // x is not defined with use strict
// console.log(y); //10

////////////////////////////////////////////////////////////////////////////////
// "use strict";
// var x = 5; 
// console.log(x); //5
// console.log(y); //undefined 
// var y = 7; 

////////////////////////////////////////////////////////////////////////////////


// function test(){
// 	for (let i = 0; i < 10; i++) {
//   		alert(i);
// 		alert (x);
// 		var x=10;
// 	}
//     console.log(i); //error --> let // undefined --> var in first time and next x = 10
// }

// test()


// Bonus
// 1-Make function that write “welcome to my page” 6 times using h1 to h6 header sizes using one line
// (document.write)  javascript code “see attached image” .
// (Use for loop, and don’t use h1 to h6 explicitly).

//for (let i = 1; i <= 6; i++) document.write(`<h${i}>Welcome to my page</h${i}>`);



///////////////////////////////////////////////////////////////////////////////////////////

//2)

// function getValidName() {
//     let name;
//     while (!name || !isNaN(name)) {
//         name = prompt("Enter your name:");
//         if (!name || !isNaN(name)) {
//             alert("Invalid input! Please enter a valid name.");
//         }
//     }
//     return name.trim();
// }

// function getValidBirthYear() {
//     let birthYear;
//     while (true) {
//         birthYear = prompt("Enter your birth year (must be less than 2010):");
//         if (!isNaN(birthYear) && birthYear < 2010 && birthYear > 1900) {
//             return parseInt(birthYear);
//         }
//         alert("Invalid input! Please enter a valid birth year less than 2010.");
//     }
// }

// function calculateAge(birthYear) {
//     const currentYear = new Date().getFullYear();
//     return currentYear - birthYear;
// }

// const userName = getValidName();
// const userBirthYear = getValidBirthYear();
// const userAge = calculateAge(userBirthYear);


// const table = document.getElementById("userTable");
// const newRow = table.insertRow();
// newRow.innerHTML = `<td>${userName}</td><td>${userBirthYear}</td><td>${userAge}</td>`;


function removeSkill(button) {
    button.parentElement.remove(); // Removes the skill div
}