document.getElementById("buttonContainer").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        var apiUrl = "";
        var category = "";

        switch (event.target.id) {
            case "getPizza":
                apiUrl = "https://forkify-api.herokuapp.com/api/search?q=pizza";
                category = "Pizza Recipes";
                break;
            case "getBeef":
                apiUrl = "https://forkify-api.herokuapp.com/api/search?q=beef";
                category = "Beef Recipes";
                break;
            case "getKebab":
                apiUrl = "https://forkify-api.herokuapp.com/api/search?q=kebab";
                category = "Kebab Recipes";
                break;
            case "getChicken":
                apiUrl = "https://forkify-api.herokuapp.com/api/search?q=chicken";
                category = "Chicken Recipes";
                break;
            default:
                return;
        }

        showLoader(); 
        const xhr = new XMLHttpRequest();
        xhr.open("GET", apiUrl);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                hideLoader(); 
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    displayRecipes(response.recipes,category);
                } else {
                    document.getElementById("output").innerHTML = "<p>Error fetching data!</p>";
                }
            }
        };
        xhr.send();
    }
});

function displayRecipes(recipes,category) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    var catName = document.getElementById("cat")
    catName.innerText    = category
    // const categoryTitle = document.createElement("div");
    // categoryTitle.classList.add("category-title");
    // categoryTitle.innerText = category;
    // outputDiv.appendChild(categoryTitle);


    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
         
        recipeCard.innerHTML = `
            <img src="${recipe.image_url}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <a href="${recipe.source_url}" target="_blank">View Recipe</a>
        `;

        outputDiv.appendChild(recipeCard);
    });
}

function showLoader() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("output").innerHTML = "";
}

function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

// function specialMultiply(num1, num2) {
//     if (arguments.length === 2) {
//         return num1 * num2;
//     }
//     return function (num3) {
//         return num1 * num3;
//     };
// }

// console.log(specialMultiply(5, 4));
// const multiplyBy5 = specialMultiply(29);
// console.log(multiplyBy5(2));       