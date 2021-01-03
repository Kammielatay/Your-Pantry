let ingredientsArray = ['Apples', 'Avocado', 'Bacon', 'Baking Powder', 'Barbecue Sauce', 'Bread', 'Broccoli', 'Dijon Mustard', 'Brown Sugar', 'Buffalo/Hot Sauce', 'Butter/ Margarine', 'Cauliflower', 'Cayenne Pepper', 'Cheddar Cheese', 'Cheese (in General)', 'Chicken', 'Turkey', 'Chicken Broth', 'Cinnamon', 'Cream Cheese', 'Cream of Veggie', 'Panko', 'Eggs', 'Fish', 'Flour', 'Fruit', 'Garlic', 'Garlic Powder', 'Green Onions', 'Green Peppers', 'Ground Beef', 'Honey', 'Ketchup', 'Lemons', 'Mayonnaise', 'Milk', 'Mushrooms', 'Mustard', 'Olive Oil', 'Onions/Shallots', 'Pancake /Baking Mix', "Pasta Noodles", 'Peanut Butter', 'Peppers', 'Pork Chops', 'Potatoes', 'Ramen', 'Rice', 'Rolls/Biscuits', 'Salsa', 'Sausage', 'Shortening', 'Tomato/Red Sauce', 'Tomatoes', 'Tortillas/Taco Shells', 'Vanilla Extract', 'Vegetables', 'Vinegar - Balsamic', 'Yellow Cake Mix', 'Zucchini'];

// Array of selected ingredients from user
let selectedIngredients = [];

// scrolls the page down to respective div
function scrollPage() {
    $('html, body').animate({
        scrollTop: $("#checkbox").offset().top
    });
}

// function to display the checkboxes on the screen 
function displayCheckboxes() {
    $('#checkbox').text('');

    for (let i = 0; i < ingredientsArray.length; i++) {
        let pContainer = $("<p class=label>");
        let labelContainer = $("<label class=option>");
        let inputContainer = $("<input type=checkbox>");
        let spanContainer = $('<span>');

        pContainer.addClass('col s2')
        inputContainer.addClass('filled-in checked="unchecked"');
        spanContainer.text(ingredientsArray[i]);
        inputContainer.attr('value', ingredientsArray[i]);

        $('#checkbox').append(pContainer);
        pContainer.append(labelContainer);
        labelContainer.append(inputContainer);
        labelContainer.append(spanContainer);

    }
}

// takes the selective values from checkbox and pushes it to an array
function selectedItems() {
    $('input').on('click', function () {
        var checked = ($(this).val());
        selectedIngredients.push(checked)
    })
}


// creates a button that will will later be clicked to grab recipes
function generateBtn() {

    let ingredientsbtn = $('<button>Get Recipe!</button>');
    ingredientsbtn.addClass('generate-recipe waves-effect waves-light btn center-align')
    $('.container').append(ingredientsbtn);

    ingredientsbtn.on('click', function () {
        let apiKey = "0fb886bc44754ed8a35e10c5ab1da96f"
        let ingredients = selectedIngredients
        let resultsQuantity = 3;
        let queryURL = "https://api.spoonacular.com/recipes/findByIngredients?" +
            "apiKey=" +
            apiKey +
            "&ingredients=" +
            ingredients +
            "&number=" +
            resultsQuantity;

        // Call to API to retrieve recipe data for cards
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            for (let i = 0; i < resultsQuantity; i++) {

                let recipeId = response[i].id;
                let includeNutrition = false;
                let queryURL2 = "https://api.spoonacular.com/recipes/" +
                    recipeId +
                    "/information" +
                    "?apiKey=" +
                    apiKey +
                    "&includeNutrition=" +
                    includeNutrition;

                // Call to API to retrieve recipe data to add source link to card
                $.ajax({
                    url: queryURL2,
                    method: "GET"
                }).then(function (response2) {


                    // creates recipe cards for each response item
                    let recipeContainer = $('<div class=row>');
                    $('.container').append(recipeContainer);

                    let recipeDiv = $('<div>');
                    recipeDiv.addClass('col s12 m4');

                    let recipeCard = $('<div class=card>');
                    let recipeImage = $('<div class=card-image>')
                    let foodImage = $('<img>');
                    let recipeLink = $('<a class=source-link>');

                    foodImage.attr('src', response[i].image);
                    recipeLink.attr('href', response2.sourceUrl)

                    let foodTitle = $('<span class=card-title>');
                    $(".card-title").wrap('<a href="' + response2.sourceUrl + '"></a>');


                    foodTitle.text(response[i].title)
                    recipeContainer.append(recipeDiv);
                    recipeDiv.append(recipeCard);
                    recipeCard.append(recipeImage, recipeLink);
                    recipeImage.append(foodImage, foodTitle);

                }
                )
            }

        });
    })
}


// when the user clicks the start button, these functions will run
$('#start-here').on('click', function () {

    scrollPage();
    displayCheckboxes();
    selectedItems();
    generateBtn();

})




