M.AutoInit();
$('.sidenav').sidenav();

function loadSavedRecipes() {
    var savedArray = JSON.parse(localStorage.getItem("savedRecipes"));

        // creates recipe cards for each response item
        let recipeContainer = $('<div id="recipes" class=row>');
        $('main').append(recipeContainer);


        for (let i = 0; i < savedArray.length; i++) {
            let recipeDiv = $('<div>');
            recipeDiv.addClass('col s12 m3');

            let recipeCard = $('<div class=card>');

            let recipeImage = $('<div class=card-image>')
            let foodImage = $('<img>');
            foodImage.attr('src', savedArray[i].image);
            let foodTitle = $('<span class=card-title>');
            foodTitle.text(savedArray[i].title);
            foodTitle.css("backgroundC-color", "black")

            let recipeLink = $('<a class=source-link>');
            let apiKey = "a4ae7310bb584baaafb75d7ff837949e"
            let recipeId = savedArray[i].id;
            let includeNutrition = false;
            let queryURL2 = "https://api.spoonacular.com/recipes/" +
                recipeId +
                "/information" +
                "?apiKey=" +
                apiKey +
                "&includeNutrition=" +
                includeNutrition;


            $.ajax({
                url: queryURL2,
                method: "GET"
            }).then(function (response2) {
                recipeLink.attr('href', response2.sourceUrl)

            })

    
            recipeContainer.append(recipeDiv);
            recipeDiv.append(recipeCard);
            recipeCard.append(recipeImage );
            recipeImage.append(recipeLink);
            recipeLink.append(foodImage, foodTitle)
            

        };
    
}

loadSavedRecipes();