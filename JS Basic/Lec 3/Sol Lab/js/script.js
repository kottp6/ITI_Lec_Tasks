//1 and 2

// var inp = document.getElementById("textBox");
// var text = document.getElementById("keyInfo");
// var btn = document.getElementById("startClockBtn");
// var clock = document.getElementById("clock");
// // Key press event
// inp.addEventListener("keydown", function(e)
// {
//     text.innerHTML = `Key Presssd ${e.key} || key code ${e.keyCode}`
// })

// start clock

// var internal;
// btn.addEventListener("click", function()
// {
//     // startClock();
//     alert("Clock Started");
//         internal = setInterval(function(){
//         let timeNow = new Date().toLocaleTimeString();
//         clock.innerText = `Time Now : ${timeNow}`
//     },1000);
// })

//stop clock

// document.addEventListener("keydown", function(e)
// {
//     if(e.altKey && e.key=="w")
//     {
//         clearInterval(internal);
//         alert("Stop Clock");
//         clock.innerText = "";
//     }
// })


////////////////////////////////////////////////////////////////////////

// //3
// var score = 0;
// const imgs = document.querySelectorAll("img");
// var text = document.getElementById("score");

// function increaseScore()
// {
//     score++;
//     text.innerText = `Score : ${score}`;
// }

// function showScore(){
//     alert(`Your Score is : ${score}`);
// }

// imgs.forEach(img => {
//     img.addEventListener("click", increaseScore);
//     img.addEventListener("click", showScore);
// })

// setTimeout(function()
// {
//     imgs.forEach(img => {
//             img.removeEventListener("click", showScore); 
//             img.addEventListener("click", () => alert("Game Over"));
//         });
// },3000)

///////////////////////////////////////////////////////////////////////

//4
var msg = document.getElementById("welcome-message");
function getParams(name)
{
    var param = new URLSearchParams(window.location.search);
    console.log(param);
    return param.get(name)
}

var username = getParams("username") || "Guest";
msg.innerText = `Welcome ${username}`;


/////////////////////////////////////////////////////////////////////////

//5
// var newWindow;

// var openedAd = document.getElementById("openAd");
// var closeAd = document.getElementById("closeAd");

// openedAd.addEventListener("click", function(e)
// {
//     e.preventDefault();
//     setTimeout(function(){
//         newWindow = window.open("", "_blank", "width=500, height=400");
//         if (newWindow) {
//             newWindow .document.write(`
//                 <html>
//                 <head><title>Advertisement</title></head>
//                 <body style="font-family: Arial, sans-serif; padding: 20px;">
//                     <h2 style="color: red;">Special Offer!</h2>
//                     <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at turpis in nunc luctus interdum.
//                         Phasellus luctus purus et nulla tempus, ac tristique elit pharetra. Ut auctor massa ut justo vulputate, 
//                         sit amet fermentum tortor venenatis. Suspendisse vel maximus erat. Aenean id lectus nec nulla tincidunt
//                         cursus. Donec nec turpis arcu. 
//                     </p>
//                     <p>
//                         Cras eget quam vitae elit varius accumsan nec a lacus. Sed pharetra fermentum lorem, vel venenatis nisl 
//                         dapibus et. Ut sit amet dolor non libero consequat facilisis. Proin vel erat et justo dapibus molestie.
//                     </p>
//                 </body>
//                 </html>
//             `);
//         } else {
//             alert("Popup blocked! Please allow popups for this site.");
//         }
//     },3000)
// })

// closeAd.addEventListener("click", function(e){
//     e.preventDefault();
//     if(newWindow && !newWindow.closed)
//     {
//         newWindow.close();
//     }
//     else{
//         alert("No ad window is open");
//     }
// })


/////////////////////////////////////////////////////////////////////////

//6

// function autoScroll() {
//     let content = document.getElementById("terms-content");
//     if (content) {
//         content.scrollBy(0, 10); // Scroll down by 1 pixel
//         setTimeout(autoScroll, 500); // Repeat every 0.5 seconds
//     }
// }

// window.onload = autoScroll;
/////////////////////////////////////////////////////////////////////////


// FN = document.getElementById("firstName");
// FN.addEventListener("keydown", function(event) {
//     var key = event.key;
//     var regex = /^[a-zA-Z]$/
//     if (!regex.test(key) && key !== "Backspace" && key !== " " && key !== "ArrowLeft" && key !== "ArrowRight") {
//         event.preventDefault();
//     }
// });