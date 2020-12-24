
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

    console.log(response)
    console.log(response[0].missedIngredients[0].image)
    console.log(response[0].missedIngredients[0].name)
    console.log(response[0].missedIngredients[0].amount)
    console.log(response[0].missedIngredients[0].unit)
    console.log(response[0].missedIngredients[0].unitLong)
    console.log(response[0].missedIngredients[0].unitShort)
    console.log(response[0].missedIngredients[0].metaInformation[0])
    console.log(response[0].missedIngredients[0].original)
    console.log(response[0].missedIngredients[0].originalName)
    console.log(response[0].missedIngredients[0].originalString)


});



// .ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {