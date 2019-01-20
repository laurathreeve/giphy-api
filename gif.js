
var buttonsArray = ["Tacos", "Pizza", "Cats", "Steve Buscemi", "Doge"];

$(document).ready(function () {
    for (i=0; i<buttonsArray.length; i++) {
            //var buttons = $("<button class='clickme'>" + buttonsArray[i] + "</button>");
            var buttons = $('<button value="' + buttonsArray[i] + '">' + buttonsArray[i] + '</button>')
            $("#buttons").html (buttons);
    }})

$("#buttons").on("click", function() {
    console.log ("clicked!");

    var selected = $(this).val();
    console.log (selected);

      // Constructing a URL to search Giphy for the name of the person who said the quote
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        selected + "&api_key=tX52LpsOzuBh9bn6lgAEvA8kHgLzHWbS";
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .then(function(response) {
        var imageUrl = response.data.url;

          // Creating and storing an image tag
          var gifResults = $("<img>");

          // Setting the catImage src attribute to imageUrl
          gifResults.attr("src", imageUrl);
          gifResults.attr("alt", "cat image");

          // Prepending the catImage to the images div
          $("#body").prepend(gifResults);
        });

});