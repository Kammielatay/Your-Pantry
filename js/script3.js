M.AutoInit();
$('.sidenav').sidenav();

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

        $('#display-table').removeClass('striped')

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

        let servings = response.hints[0].food.servingSizes[1].quantity + ' ' + response.hints[0].food.servingSizes[1].label 

        let roundedCarbs = parseFloat((response.hints[0].food.nutrients.CHOCDF).toFixed(2));
        let roundedFats = parseFloat((response.hints[0].food.nutrients.FAT).toFixed(2));
        let roundedProtein = parseFloat((response.hints[0].food.nutrients.PROCNT).toFixed(2));
        let roundedFiber = parseFloat((response.hints[0].food.nutrients.FIBTG).toFixed(2))
        let lowerIngredients = response.hints[0].food.foodContentsLabel.toLowerCase()


        $(".item-label").text(response.hints[0].food.label)
        $(".brand-label").text(response.hints[0].food.brand)
        $(".serving-size").text(response.hints[0].food.servingSizes[1].quantity)
        $(".serving-size").text(servings)
        $(".total-carbs").text(roundedCarbs + ' ' + 'grams')
        $(".total-fat").text(roundedFats + ' ' + 'grams')
        $(".total-protein").text(roundedProtein + ' ' + 'grams')
        $(".total-fiber").text(roundedFiber + ' ' + 'grams')
        $(".total-energy").text(response.hints[0].food.nutrients.ENERC_KCAL + ' ' + 'KCAL')
        $(".total-ingredients").text(lowerIngredients)


    })

})