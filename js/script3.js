$('#lookup-btn').on('click', function () {

    let input = $("#input_inline").val()
    let apiKey = "e55fd98649ce6b51cf18abb22aca0cbe";
    let appID = "cd2cdecc";
    let queryURL = "https://api.edamam.com/api/food-database/v2/parser?upc=" +
        input +
        "&app_id="
        + appID +
        "&app_key=" +
        apiKey

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)



        $('.nutrition-facts').text("Nutritional Facts:");
        $(".item-name").text("Item Name:");
        $('.brand-name').text("Brand:");
        $('.servings').text("Serving Size:");
        $(".carbs").text("Total Carbs:");
        $(".fat").text("Total Fat:");
        $(".protein").text("Total Protein");
        $(".fiber").text("Total Fiber:");
        $(".energy").text('Total Energy:');
        $(".ingredients").text("Ingredients:");

        $(".item-label").text(response.hints[0].food.label)
        $(".brand-label").text(response.hints[0].food.brand)
        $(".serving-size").text(response.hints[0].food.servingSizes[1].quantity)
        $(".serving-size").text(response.hints[0].food.servingSizes[1].label)
        $(".total-carbs").text(response.hints[0].food.nutrients.CHOCDF)
        $(".total-fat").text(response.hints[0].food.nutrients.FAT)
        $(".total-protein").text(response.hints[0].food.nutrients.PROCNT)
        $(".total-fiber").text(response.hints[0].food.nutrients.FIBTG)
        $(".total-energy").text(response.hints[0].food.nutrients.ENERC_KCAL)
        $(".total-ingredients").text(response.hints[0].food.foodContentsLabel)


    })

})