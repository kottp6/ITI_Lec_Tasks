const stars = document.querySelectorAll(".star");
stars.forEach((star, index) => {
    star.addEventListener("mouseover", function() {
    if (star.getAttribute("data-click") === "false") {
        filledStars(index);
    }
    });
    star.addEventListener("mouseleave", function() {
    if (star.getAttribute("data-click") === "false") {
        emptyStars();
    }
    });
    star.addEventListener("click", function() {
    if (star.getAttribute("data-click") === "true") {
        emptyStars();
        stars.forEach(s => s.setAttribute("data-click", "false"));
    } else {
        filledStars(index);
        stars.forEach((s, i) => {
            s.setAttribute("data-click", i <= index ? "true" : "false");
        });
    }
    });
});

function filledStars(index) {
    stars.forEach((star, i) => {
        star.src = i <= index ? "images/filled_star.png" : "images/empty_star.png";
    });
}
function emptyStars() {
    stars.forEach(star => {
        if (star.getAttribute("data-click") === "false") {
            star.src = "images/empty_star.png";
        }
    });
}