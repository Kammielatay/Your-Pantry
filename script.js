
//let userProfile = document.querySelector("#name");
let item1 = document.getElementById("ingredients1");
let item2 = document.getElementById("ingredients2");
let item3 = document.getElementById("ingredients3");
let item4 = document.getElementById("ingredients4");
//let searchbtn = document.getElementById("search");
//let genterateRecipe = document.getElementById("Generate Recipe");   
//let priceTracker = document.getElementById("Price Tracker");   
let calorieCount = document.getElementById("Calories"); 
let savedRecipes = document.getElementById("My Saved Recipes") 

//Kameshia code below
let foodArray = ["chicken", 'apples', 'bananas', 'lemons', 'spinach']

$('#click-here').on('click', function (){
    for (let i = 0; i < foodArray.length; i++){
        let pContainer = $("<p class=label>");
        let labelContainer = $("<label class=option>");
        let inputContainer = $("<input type=checkbox >");
        let spanContainer = $('<span>');
        
        inputContainer.addClass('filled-in');
        spanContainer.text(foodArray[i]);
        inputContainer.attr('value', foodArray[i]);

        $('#checkbox').append(pContainer);
        pContainer.append(labelContainer);
        labelContainer.append(inputContainer);
        labelContainer.append(spanContainer);
    
    }
})
//Kameshia code
      
var unirest = require("unirest");

var req = unirest("GET", "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data");

req.query({
	"ingr": "1 large apple"
});

req.headers({
	"x-rapidapi-key": "c4c601bf11msh4c2c77a31e97b65p1c1a7bjsn748807a8804b",
	"x-rapidapi-host": "edamam-edamam-nutrition-analysis.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

for (let i = 0; searchArray.length; i++) {
        let search = parsInt(searchArray[i]) + 9;
        if (search > searchbtn) {
          searchbtn = searchArray;
        }
      }
    
  

  $(searchbtn).addEventListener("click", genterateRecipe);
  
    $("searchbtn").click(function(event){
      //event.stopPropagation()
      
      
      var key = $(this).attr("My Saved Recipes")
      localStorage.setItem(key,usertext)
    })

    //saveText.addEventListener("click", function (event) {
      //console.log("test");

      //localStorage.setItem.on (click saveBtn);

      
    //});
});
