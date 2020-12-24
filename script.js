let ingredientsArray = ['Apples', 'Avocado', 'Bacon', 'Baking Powder', 'Barbecue Sauce', 'Bread', 'Broccoli', 'Dijon Mustard', 'Brown Sugar', 'Buffalo/Hot Sauce', 'Butter/ Margarine','Cauliflower' , 'Cayenne Pepper', 'Cheddar Cheese', 'Cheese (in General)', 'Chicken', 'Turkey', 'Chicken Broth', 'Cinnamon', 'Cream Cheese', 'Cream of Veggie', 'Panko', 'Eggs', 'Fish', 'Flour', 'Fruit', 'Garlic', 'Garlic Powder', 'Green Onions', 'Green Peppers', 'Ground Beef', 'Honey', 'Ketchup', 'Lemons', 'Mayonnaise', 'Milk', 'Mushrooms', 'Mustard', 'Olive Oil', 'Onions/Shallots', 'Pancake /Baking Mix', "Pasta Noodles", 'Peanut Butter', 'Peppers', 'Pork Chops', 'Potatoes', 'Ramen', 'Rice', 'Rolls/Biscuits', 'Salsa', 'Sausage', 'Shortening', 'Tomato/Red Sauce', 'Tomatoes', 'Tortillas/Taco Shells', 'Vanilla Extract', 'Vegetables', 'Vinegar - Balsamic', 'Yellow Cake Mix', 'Zucchini'];

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

    for (let i = 0; i < ingredientsArray.length; i++){
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
    $('input').on('click', function(){
        console.log($(this).val())
        var checked = ($(this).val());
        selectedIngredients.push(checked)
    })
}

// creates a button that will will later be clicked to grab recipes
function generateBtn() {

    let ingredientsbtn = $('<button>Get Recipe!</button>');
    ingredientsbtn.addClass('generate-recipe waves-effect waves-light btn center-align')
    $('.container').append(ingredientsbtn)
}

// when the user clicks the start button, these functions will run
$('#start-here').on('click', function (){

    scrollPage();
    displayCheckboxes();
    selectedItems();
    generateBtn();
   
})


console.log(selectedIngredients)
