

apiKey = "a4ae7310bb584baaafb75d7ff837949e"
// ingredientsArr = [];
// resultsQuantity = 

// querUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredient  + resultsQuantity + apiKey 
queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2"

$.ajax({
    url: queryURL,
    method: "GET"
    apiKey: a4ae7310bb584baaafb75d7ff837949e
}).then(function (response) {


    console.log(response)


});

