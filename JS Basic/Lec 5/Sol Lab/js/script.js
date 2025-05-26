// //1 and 2 DOMContentLoaded vs load

// document.addEventListener("load", function () {
//     if (localStorage.getItem("rememberMe") === "true") {
//         document.getElementById("username").value = localStorage.getItem("username") || "";
//         document.getElementById("password").value = localStorage.getItem("password") || "";
//         document.getElementById("rememberMe").checked = true;
//     }
// });

// function login() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var rememberMe = document.getElementById("rememberMe").checked;

//     if (rememberMe) {
//         localStorage.setItem("username", username);
//         localStorage.setItem("password", password);
//         localStorage.setItem("rememberMe", true);
//     } else {
//         localStorage.removeItem("username");
//         localStorage.removeItem("password");
//         localStorage.setItem("rememberMe", false);
//     }

//     alert("Login successful!");
// }


//3

// let student = {
//     id: 101,
//     name: "Mahmoud Hussein",
//     age: 20,
//     address: "Beni-suif, Egypt",
//     skills: ["JavaScript", "HTML", "CSS"],
//     isLeader: true
// };
// console.log(student);


//4

// let students = [
//     {
//         id: 101,
//         name: "Ali Ahmed",
//         age: 20,
//         address: "Cairo, Egypt",
//         skills: ["JavaScript", "Python", "HTML"],
//         isLeader: true
//     },
//     {
//         id: 102,
//         name: "Mona Samir",
//         age: 22,
//         address: null,
//         skills: ["Java", "C++", "SQL"],
//         isLeader: false
//     },
//     {
//         id: 103,
//         name: "Omar Khaled",
//         age: 21,
//         address: "Alex, Egypt",
//         skills: ["React", "Node.js", "MongoDB"],
//         isLeader: true
//     }
// ];

// students.forEach(std => {
//     console.log(`Name: ${std.name}`);
//     console.log(`Skills: ${std.skills.join(", ")}`);
//     console.log("----------------------------------------");
// });

// for(var std of students)
// {
//     console.log(`Name: ${std.name}`);
//     console.log(`Skills: ${std.skills.join(", ")}`);
//     console.log("----------------------------------------");
// }

//5

function fetchUserById() {
    var userId = document.getElementById("userId").value;
    //check for enter user Id
    if (!userId) {
        alert("Please enter a user ID!");
        return;
    }


    var notFound = document.getElementById("userDetails");
    var http = new XMLHttpRequest();
    http.open("GET", `https://reqres.in/api/users/${userId}`);
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            var response = JSON.parse(http.responseText);
            if (response.data) {
                displayUser(response.data, "userDetails");
            } else{
               
                notFound.innerHTML = "<p>User Not Found!</p>" 
            }
        }
    };
    http.send();
}

function fetchAllUsers() {
    let http = new XMLHttpRequest();
    http.open("GET", "https://reqres.in/api/users", true);
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            let response = JSON.parse(http.responseText);
            let dropdown = document.getElementById("usersDropdown");
            
            response.data.forEach(user => {
                //create element
                let option = document.createElement("option");
                option.value = user.id;
                option.textContent = `${user.first_name} ${user.last_name}`;
                dropdown.appendChild(option);
            });
        }
    };
    http.send();
}


function displayUser(user, containerId) {
    var container = document.getElementById(containerId);
    container.innerHTML = `
        <p><strong>Name:</strong> ${user.first_name} ${user.last_name}</p>
        <img src="${user.avatar}" alt="${user.first_name}'s avatar">
    `;
}


function displaySelectedUser() {
    var selectedId = document.getElementById("usersDropdown").value;
    if (selectedId) {
        var http = new XMLHttpRequest();
        http.open("GET", `https://reqres.in/api/users/${selectedId}`);
        http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
                var response = JSON.parse(http.responseText);
                if (response.data) {
                    displayUser(response.data, "selectedUserDetails");
                }
            }
        };
        http.send();
    } else {
        document.getElementById("selectedUserDetails").innerHTML = "";
    }
}

window.onload = fetchAllUsers;


//6
//var date = new Date("2025-03-14");
// document.cookie = `username=kottp;expires=${date.toUTCString()}`;
// document.cookie = `password=123;expires=`+date.toUTCString();


//6


// function getCookie(name) {
//     var nameEQ = name + "=";
//     var cookies = document.cookie.split(';');
//     for (var i = 0; i < cookies.length; i++) {
//         var c = cookies[i].trim();
//         if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
//     }
//     return null;
// }


// function deleteCookie(name) {
//     document.cookie = name + "=; expires=01 Jan 2027";
// }


// function loadData() {
//     var username = getCookie("username");
//     var password = getCookie("password");
//     var rememberMe = getCookie("rememberMe");

//     if (username && password && rememberMe === "true") {
//         document.getElementById("username").value = username;
//         document.getElementById("password").value = password;
//         document.getElementById("rememberMe").checked = true;
//     }
// }


// function login() {
//     var username = document.getElementById("username");
//     var password = document.getElementById("password");
//     var rememberMe = document.getElementById("rememberMe").checked;

//     if (rememberMe) {
        
//         // document.cookie = `username=kottp;expires=${date.toUTCString()}`;
//         document.cookie = `username=${username.value};expires=${date.toUTCString()}`;
//         document.cookie = `password=${password.value};expires=${date.toUTCString()}`;
//         document.cookie = `rememberMe=${rememberMe};expires=${date.toUTCString()}`;
//     } else {
//         document.cookie = "username" + "=; expires=01 Jan 2027";
//         document.cookie = "password" + "=; expires=01 Jan 2027";
//         document.cookie = "rememberMe" + "=; expires=01 Jan 2027";
//     }

//     alert("Login successful!");
// }


// window.onload = loadData;

//////////////////////////////////////////////////////////////////////////////////////

// What will be the output of the following code ?
// const obj1 = {first: 20, second: 30, first: 50};
// console.log(obj1);

// const example = ({ a, b, c }) => {
//     console.log(a, b, c);
//    };
// example(0, 1, 2);

// var a = true + true + true * 3;
// print(a)

// (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
// })();

//What happens when we run this code?
// function dog() {
//     console.log ("I am a dog.");
// }
// dog.sound = "Bark";

// console.log(parseInt("123Hello"));
// console.log(parseInt("Hello123"));

// function compare()
// {
//     let a=2;
//     let b=2.0;
//     if(a==b)
//         return true;
//     else
//         return false;
// }

// console.log(x);
// var x = 20;
// function Iti()
// {
//     console.log(x);
//     var x = 30;

//     function course()
//     {
//         console.log(x);
//         var x = 20;
//     }
// }
// Iti()

// var a=1;
// if(a != null) return 1;
// else return 0;

// function sanfoundry(javascript)
// {
// 	return (javascript ?  "yes" :  "no");
// }
// var ans = true;
// console.log(sanfoundry(ans));

// var a=0;
// for(let a=0;a<5;a++);
// console.log(a);

// function compareOne()
// {
//     let sanfoundry=1;
//     let javascript="1";
//     if(sanfoundry.toString() === javascript)
//         return true;
//     else 
//         return false;
// }
// console.log(compareOne())
// //////////////////////////////////////
// function compareTwo()
// {
//     let sanfoundry=1;
//     let javascript="1";
//     if(sanfoundry.toString() == javascript)
//         return true;
//     else 
//         return false;
// }
// console.log(compareTwo())

//What will be the output of this code snippet?
let numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers[9]);
console.log(numbers.length);