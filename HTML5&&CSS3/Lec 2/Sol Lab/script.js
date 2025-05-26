// 1
// function handleMouseOver() {
//     const circle = document.getElementById("circle");
//     circle.setAttribute("fill", "yellow");
//     circle.setAttribute("stroke", "orange");
//     circle.setAttribute("stroke-width", "5");
// }

// function handleMouseOut() {
//     const circle = document.getElementById("circle");
//     circle.setAttribute("fill", "blue");
//     circle.setAttribute("stroke", "black");
//     circle.setAttribute("stroke-width", "3");
// }

// function handleMouseDown() {
//     const circle = document.getElementById("circle");
//     circle.setAttribute("fill", "red");
//     circle.setAttribute("stroke", "darkred");
//     circle.setAttribute("stroke-width", "6");
// }

// function handleMouseUp() {
//     alert("Mouse Up Event");
//     handleMouseOver();
// }

//2
// const canvas = document.getElementById("faceCanvas");
// const ctx = canvas.getContext("2d");

// const sadFace = new Image();
// const smileyFace = new Image();

// sadFace.src = "images/sad.png"; 
// smileyFace.src = "images/smiley.png";

// var currentImage = sadFace;
// var scale = 1;

// sadFace.onload = () => {
//     drawFace();
// };

// function drawFace() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     const width = 100 * scale;
//     const height = 100;
//     const x = (canvas.width - width) / 2;
//     const y = (canvas.height - height) / 2;
//     ctx.drawImage(currentImage, x, y, width, height);
// }
// // mousedown // mouseover
// canvas.addEventListener("mouseover", () => {
//     currentImage = smileyFace;
//     scale = 1.2;
//     drawFace();
// });

// //mouseup //mouseleave
// canvas.addEventListener("mouseleave", () => {
//     currentImage = sadFace;
//     scale = 1;
//     drawFace();
// });


//4
// const canvas = document.getElementById("draw");
// const ctx = canvas.getContext("2d");

// var drawing = false;
// var erasing = false;

// function startDraw(event) {
//     event.preventDefault(); 
//     if (event.button === 0) drawing = true; 
//     if (event.button === 2) erasing = true;
//     ctx.beginPath();
// }

// //beginPath -> Call this method when you want to create a new path.
// function stopDraw() {
//     drawing = false;
//     erasing = false;
//     ctx.beginPath();
// }

// //getBoundingClientRect ->method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

// function draw(event) {
//     if (!drawing && !erasing) return;

//     const rect = canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     ctx.lineWidth = 5;
//     ctx.lineCap = "round";

//     if (drawing) {
//         ctx.strokeStyle = "black";
//         ctx.lineTo(x, y);
//         ctx.stroke();
//     } else if (erasing) {
//         ctx.strokeStyle = "white";
//         ctx.lineWidth = 20;
//         ctx.lineTo(x, y);
//         ctx.stroke();
//     }
// }


// canvas.addEventListener("contextmenu", (event) => event.preventDefault());


// canvas.addEventListener("mousedown", startDraw);
// canvas.addEventListener("mouseup", stopDraw);
// canvas.addEventListener("mousemove", draw);

//5
// var img;
// function dragEle(ele){
//     img = ele;
// }
// function dropEle(box) {
//     box.appendChild(img)
// }

//6
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }

// function showPosition(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
//     window.open(mapUrl, "_blank"); // Opens Google Maps in a new tab
// }

//bouns
// const canvas = document.getElementById("faceCanvas");
// const ctx = canvas.getContext("2d");
// let isHappy = true;

// function drawFace(isHappy) {
   

//     ctx.beginPath();
//     ctx.arc(100, 100, 50, 0, Math.PI * 2);
//     ctx.fillStyle = "yellow";
//     ctx.fill();
//     ctx.stroke();


//     ctx.fillStyle = "black";
//     ctx.beginPath();
//     ctx.arc(80, 85, 5, 0, Math.PI * 2);
//     ctx.arc(120, 85, 5, 0, Math.PI * 2);
//     ctx.fill();

//     ctx.beginPath();
//     if (isHappy) {
//         ctx.arc(100, 110, 20, 0, Math.PI, false);
//     } else {
//         ctx.arc(100, 130, 20, 0, Math.PI, true);
//     }
//     ctx.stroke();
// }
// drawFace(isHappy);
// canvas.addEventListener("click", () => {
//     isHappy = !isHappy;
//     drawFace(isHappy);
// });

for(var hack=0; hack< 6; hack++) 
{ 
    setTimeout(() => console.log(hack), 0);
}