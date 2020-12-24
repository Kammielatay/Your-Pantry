let ingredientsArray = ['Apples', 'Avocado', 'Bacon', 'Baking Powder', 'Barbecue Sauce', 'Bread', 'Broccoli', 'Dijon Mustard', 'Brown Sugar', 'Buffalo/Hot Sauce', 'Butter/ Margarine','Cauliflower' , 'Cayenne Pepper', 'Cheddar Cheese', 'Cheese (in General)', 'Chicken', 'Turkey', 'Chicken Broth', 'Cinnamon', 'Cream Cheese', 'Cream of Veggie', 'Panko', 'Eggs', 'Fish', 'Flour', 'Fruit', 'Garlic', 'Garlic Powder', 'Green Onions', 'Green Peppers', 'Ground Beef', 'Honey', 'Ketchup', 'Lemons', 'Mayonnaise', 'Milk', 'Mushrooms', 'Mustard', 'Olive Oil', 'Onions/Shallots', 'Pancake /Baking Mix', "Pasta Noodles", 'Peanut Butter', 'Peppers', 'Pork Chops', 'Potatoes', 'Ramen', 'Rice', 'Rolls/Biscuits', 'Salsa', 'Sausage', 'Shortening', 'Tomato/Red Sauce', 'Tomatoes', 'Tortillas/Taco Shells', 'Vanilla Extract', 'Vegetables', 'Vinegar - Balsamic', 'Yellow Cake Mix', 'Zucchini']

$('#click-here').on('click', function (){

    $("html, body").animate({ scrollTop: $("#checkbox").height()}, 'slow');

    for (let i = 0; i < ingredientsArray.length; i++){
        let pContainer = $("<p class=label>");
        let labelContainer = $("<label class=option>");
        let inputContainer = $("<input type=checkbox >");
        let spanContainer = $('<span>');
        
        pContainer.addClass('col s2')
        inputContainer.addClass('filled-in');
        spanContainer.text(ingredientsArray[i]);
        inputContainer.attr('value', ingredientsArray[i]);

        $('#checkbox').append(pContainer);
        pContainer.append(labelContainer);
        labelContainer.append(inputContainer);
        labelContainer.append(spanContainer);
         
    }
})

