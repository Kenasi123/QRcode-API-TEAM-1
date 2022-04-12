window.addEventListener("load", function() {


fetch("https://api.weatherapi.com/v1/current.json?key= a35c94fe128a46eaa9e174739221204&q=London&aqi=yes").then(function(response) {
    return response.json();

}).then(function(data) {
    console.log(data)
}) 


})