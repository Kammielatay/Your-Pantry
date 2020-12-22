
var userProfile = document.querySelector("#name");
var item1 = document.getElementById("ingredients1");
var item2 = document.getElementById("ingredients2");
var item3 = document.getElementById("ingredients3");
var item4 = document.getElementById("ingredients4");
var searchbtn = document.getElementById("search");
var genterateRecipe = document.getElementById("Generate Recipe");   
var priceTracker = document.getElementById("Price Tracker");   
var calorieCount = document.getElementById("Calorie Count");  




      

for (var i = 0; searchArray.length; i++) {
        let search = parsInt(searchArray[i]) + 9;
        if (search > searchbtn) {
          searchbtn = searchArray;
        }
      }
    
  

  $(searchbtn).addEventListener("click", genterateRecipe);
  
    $("searchbtn").click(function(event){
      //event.stopPropagation()
      
      
      var key = $(this).attr("data-saving")
      localStorage.setItem(key,usertext)
    })

    //saveText.addEventListener("click", function (event) {
      //console.log("test");

      //localStorage.setItem.on (click saveBtn);

      
    //});
});
