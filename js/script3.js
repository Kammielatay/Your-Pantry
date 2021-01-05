let input = "737628005000"
let apiKey = "e55fd98649ce6b51cf18abb22aca0cbe";
let appID = "cd2cdecc";
let queryURL = "https://api.edamam.com/api/food-database/v2/parser?upc="+
input+
"&app_id="
+appID+
"&app_key="+
apiKey

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)

})
