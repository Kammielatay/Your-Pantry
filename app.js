
let apiKey = "a4ae7310bb584baaafb75d7ff837949e"
let ingredientsArr = [];
let ingredients = "sugar,+flour,"
let resultsQuantity = 50;
let queryURL = "https://api.spoonacular.com/recipes/findByIngredients?" +
    "apiKey=" +
    apiKey +
    "&ingredients=" +
    ingredients +
    "&number=" +
    resultsQuantity;


$.ajax({
    url: queryURL,
    method: "GET"

}).then(function (response) {

    // Info to put on the cards 
    console.log(response)
    console.log("Image: " + response[0].missedIngredients[0].image)
    console.log("Name: " + response[0].missedIngredients[0].name)
    console.log("Amount: " + response[0].missedIngredients[0].amount)
    console.log("Unit: " + response[0].missedIngredients[0].unit)
    console.log("Unit Long: " + response[0].missedIngredients[0].unitLong)
    console.log("Unit Short: " + response[0].missedIngredients[0].unitShort)
    console.log("Meta: " + response[0].missedIngredients[0].metaInformation[0])
    console.log("Original: " + response[0].missedIngredients[0].original)
    console.log("Original Name: " + response[0].missedIngredients[0].originalName)
    console.log("Original String: " + response[0].missedIngredients[0].originalString)


});


let recipeId = 716429;
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


    console.log(response2)
    console.log(response2.title)
    console.log(response2.image)
    console.log(response2.readyInMinutes)
    console.log(response2.servings)
    console.log(response2.sourceUrl)
    console.log(response2.spoonacularSourceUrl)
    console.log(response2.summary)


});



