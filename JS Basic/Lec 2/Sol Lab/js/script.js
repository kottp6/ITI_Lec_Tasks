//1
// const tips = [
//     "Use '===' instead of '==' to avoid type coercion issues.",
//     "Use 'let' and 'const' instead of 'var' for better variable scoping.",
//     "Arrow functions provide a shorter syntax and lexical 'this' binding.",
//     "Use 'map()' instead of loops when transforming an array.",
//     "Use 'filter()' to get a subset of an array based on conditions.",
//     "Use 'reduce()' to accumulate values into a single output.",
//     "Template literals (``) make string concatenation easier.",
//     "Avoid global variables to prevent unintended side effects.",
//     "Use 'try...catch' for error handling in asynchronous code.",
//     "Use 'debounce' to optimize frequent function calls (e.g., input events)."
// ];

// const randomTip = tips[Math.floor(Math.random() * tips.length)];

// document.getElementById("tip").innerText = randomTip;

///////////////////////////////////////////////////////////////////////////////////

//2
// function showDateTime() {
//     const now = new Date();
//     const formattedDateTime = now.toLocaleString();
//     document.getElementById("datetime").innerText = formattedDateTime;
// }

///////////////////////////////////////////////////////////////////////////////////

//3

// function validateEmail() {
//     let email = document.getElementById("email").value;
//     let atIndex = email.indexOf("@");
    
//     if (atIndex > 0 && atIndex < email.length - 1) {
//         document.getElementById("message").innerText = "Valid Email!";
//         document.getElementById("message").style.color = "green";
//     } else {
//         document.getElementById("message").innerText = "Invalid Email! '@' must not be at the start or end.";
//         document.getElementById("message").style.color = "red";
//     }
// }

//////////////////////////////////////////////////////////////////////////////////

//4
// function validateFullName(name) {
//     const fullNameRegex = /^(?:[A-Za-z]{3,}(?: [A-Za-z]{3,})*)$/;
//     return fullNameRegex.test(name);
// }

// function validateEmail(email) {
//     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com\.eg|net\.eg|edu\.eg|org\.eg)$/;
//     return emailRegex.test(email);
// }


// let fullName;
// do {
//     fullName = prompt("Enter your Full Name (Each part must have at least 3 letters, separated by spaces):");
// } while (!validateFullName(fullName));

// alert("Full Name is valid!");


// let email;
// do {
//     email = prompt("Enter your Email (Must be an Egyptian domain: .com.eg, .net.eg, .edu.eg, .org.eg):");
// } while (!validateEmail(email));

// alert("Email is valid!");

// console.log(`User Full Name: ${fullName}`);
// console.log(`User Email: ${email}`);

//////////////////////////////////////////////////////////////////////////////////


//6
// let grades = [60, 100, 10, 15, 85];

// //sort array
// grades.sort((a, b) => b - a);
// console.log("Sorted Grades (Descending):", grades);

// // using find()
// let highestGrade = grades.find(grade => grade <= 100);
// console.log("Highest Student Degree (≤100):", highestGrade);

// // below 60 using filter()
// let failingGrades = grades.filter(grade => grade < 60);
// console.log("Students with grades below 60:", failingGrades);

//////////////////////////////////////////////////////////////////////////////////

//7

// let students = [
//     { Name: "Ali", Degree: 95 },
//     { Name: "Sara", Degree: 85 },
//     { Name: "John", Degree: 45 },
//     { Name: "Lina", Degree: 100 },
//     { Name: "Mark", Degree: 55 }
// ];

// //Find student who got a degree between 90 and 100
// let topStudent = students.find(student => student.Degree >= 90 && student.Degree <= 100);
// console.log("Student with degree between 90-100:", topStudent);

// //Print students who got a degree less than 60
// let failingStudents = students.filter(student => student.Degree < 60);
// console.log("Students with degree < 60:", failingStudents.map(s => s.Name));

// //Add a new student & print all students using for...in
// students.push({ Name: "Omar", Degree: 78 });
// console.log("Students after adding a new one:");
// for (let index in students) {
//     console.log(students[index]);
// }

// //Remove the last student & print all students using for...of
// students.pop();
// console.log("Students after removing the last one:");
// for (let student of students) {
//     console.log(student);
// }

// //Sort students alphabetically by name
// students.sort((a, b) => a.Name.localeCompare(b.Name));
// console.log("Students sorted alphabetically:", students);

// // Use splice() to add 2 students after the second element
// students.splice(2, 0, { Name: "Nour", Degree: 88 }, { Name: "Fady", Degree: 92 });
// console.log("Students after adding 2 new students:", students);

// //Use splice() to remove 1 student after the third element
// students.splice(3, 1);
// console.log("Students after removing 1 student:", students);


//////////////////////////////////////////////////////////////////////////////////

//8
// function validateBirthDate(dateStr) {
//     // Ensure the input is exactly 10 characters
//     if (dateStr.length !== 10) return false;

//     // Ensure the correct positions contain '-'
//     if (dateStr[2] !== '-' || dateStr[5] !== '-') return false;

//     // Extract day, month, and year
//     let day = dateStr.substring(0, 2);
//     let month = dateStr.substring(3, 5);
//     let year = dateStr.substring(6, 10);

//     // Ensure they are numbers
//     if (isNaN(day) || isNaN(month) || isNaN(year)) return false;

//     // Convert to numbers
//     day = parseInt(day);
//     month = parseInt(month);
//     year = parseInt(year);

//     // Validate ranges
//     if (day < 1 || day > 31) return false;
//     if (month < 1 || month > 12) return false;
//     if (year < 1900 || year > new Date().getFullYear()) return false;

//     return { day, month, year };
// }

// function getUserBirthDate() {
//     let birthDate = prompt("Enter your birth date (DD-MM-YYYY):");

//     let validDate = validateBirthDate(birthDate);

//     if (validDate) {
//         let { day, month, year } = validDate;
//         let userDate = new Date(year, month - 1, day); // Month is 0-based
//         alert("Your Birth Date: " + userDate.toDateString());
//     } else {
//         alert("Wrong Date Format! Please enter in DD-MM-YYYY format.");
//     }
// }



// Bonus

//1

// function getDayName(dateString) {
//     // const date = new Date(dateStr);
//     // //const options = { weekday: 'long' };
//     // return date.toLocaleDateString('en-US');

    
//     var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     var d = new Date(dateString);
//     var dayName = days[d.getDay()];
//     return dayName;
// }



// // Example usage:
// console.log(getDayName("2025-03-09"));


//////////////////////////////////////////////////////////////////////////////////


//2
// function validateEgyptianMobile() {
//     const regex = /^002(010|011|012|015)\d{8}$/;

//     let mobileNumber = prompt("Enter your mobile number in the format: 00201XXXXXXXXX");

//     if (regex.test(mobileNumber)) {
//         console.log("Valid Egyptian mobile number");
//     } else {
//         console.log("Invalid mobile number. Please enter a valid Egyptian number (002010XXXXXXXX)");
//     }
// }

// validateEgyptianMobile();

//////////////////////////////////////////////////////////////////////////////////

//3
// function displayCurrentDateTime() {
//     const now = new Date();
//     document.getElementById("currentDateTime").innerText = "Current Date & Time: " + now.toLocaleString();
// }

// function calculateAge() {
//     let birthDate = new Date(document.getElementById("birthDate").value);
//     let today = new Date();

//     if (isNaN(birthDate)) {
//         document.getElementById("result").innerText = "Please enter a valid birthdate.";
//         return;
//     }

//     let years = today.getFullYear() - birthDate.getFullYear();
//     let months = today.getMonth() - birthDate.getMonth();
//     let days = today.getDate() - birthDate.getDate();

//     if (days < 0) {
//         months -= 1;
//         let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
//         days += lastMonth.getDate();
//     }

//     if (months < 0) {
//         years -= 1;
//         months += 12;
//     }

//     document.getElementById("result").innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
// }

//////////////////////////////////////////////////////////////////////////////////

//4
// function displayBirthDateWithColor() {
//     let birthDate = prompt("Enter your birth date (YYYY-MM-DD):");
//     let colorChoice = prompt("Choose a color: (r) red, (b) blue, (g) green").toLowerCase();

//     const colorMap = {
//         r: "red",
//         b: "blue",
//         g: "green"
//     };

//     let chosenColor = colorMap[colorChoice] || "black";
//     let currentDate = new Date().toLocaleString();
//     document.body.innerHTML = `<p><strong>Current Date:</strong> <span style="color:${chosenColor};">${currentDate}</span></p>`;
// }


// displayBirthDateWithColor();