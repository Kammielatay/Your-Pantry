let ingredientsArray = ['Apples', 'Avocado', 'Bacon', 'Baking Powder', 'Barbecue Sauce', 'Bread', 'Broccoli', 'Dijon Mustard', 'Brown Sugar', 'Buffalo/Hot Sauce', 'Butter/ Margarine', 'Cauliflower', 'Cayenne Pepper', 'Cheddar Cheese', 'Cheese (in General)', 'Chicken', 'Turkey', 'Chicken Broth', 'Cinnamon', 'Cream Cheese', 'Cream of Veggie', 'Panko', 'Eggs', 'Fish', 'Flour', 'Fruit', 'Garlic', 'Garlic Powder', 'Green Onions', 'Green Peppers', 'Ground Beef', 'Honey', 'Ketchup', 'Lemons', 'Mayonnaise', 'Milk', 'Mushrooms', 'Mustard', 'Olive Oil', 'Onions/Shallots', 'Pancake /Baking Mix', "Pasta Noodles", 'Peanut Butter', 'Peppers', 'Pork Chops', 'Potatoes', 'Ramen', 'Rice', 'Rolls/Biscuits', 'Salsa', 'Sausage', 'Shortening', 'Tomato/Red Sauce', 'Tomatoes', 'Tortillas/Taco Shells', 'Vanilla Extract', 'Vegetables', 'Vinegar - Balsamic', 'Yellow Cake Mix', 'Zucchini'];

// Array of selected ingredients from user
let selectedIngredients = [];
let savedRecipes = [];

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
        console.log($(this).val())
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

        let apiKey = "a4ae7310bb584baaafb75d7ff837949e"
        let ingredients = selectedIngredients
        let resultsQuantity = 6;
        let queryURL = "https://api.spoonacular.com/recipes/findByIngredients?" +
            "apiKey=" +
            apiKey +
            "&ingredients=" +
            ingredients
            +
            "&number=" +
            resultsQuantity;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)

            // creates recipe cards for each response item
            let recipeContainer = $('<div id="recipes" class=row>');
            $('.container').append(recipeContainer);

            $('html, body').animate({
                scrollTop: $("#recipes").offset().top
            });

            for (let i = 0; i < resultsQuantity; i++) {
                let recipeDiv = $('<div>');
                recipeDiv.addClass('col s12 m4');

                let recipeCard = $('<div class=card>');

                let recipeImage = $('<div class=card-image>')
                let foodImage = $('<img>');
                foodImage.attr('src', response[i].image);
                let foodTitle = $('<span class=card-title>');
                foodTitle.text(response[i].title);
                let recipeLink = $('<a class=source-link>');

                let recipeId = response[i].id;
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

                let addTag = $('<a>');
                addTag.addClass('btn-floating halfway-fab waves-effect waves-light red');

                let addIcon = $('<i>');
                addIcon.addClass('material-icons');
                addIcon.text('add');
                addIcon.attr("data-id", i)


                addIcon.on("click", function () {
                    var itemIndex = $(this).attr("data-id");
                    var itemObject = response[itemIndex];
                    savedRecipes.push(itemObject);
                    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
                });


                recipeContainer.append(recipeDiv);
                recipeDiv.append(recipeCard);
                recipeCard.append(recipeImage);
                recipeImage.append(foodImage, recipeLink, addTag);
                recipeLink.append(foodTitle)
                addTag.append(addIcon)

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



