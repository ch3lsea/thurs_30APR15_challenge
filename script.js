var cityData = null;
var cityHTML = null;

$(document).ready(function() {
    $('#get-info-btn').on('click', function() {
        if (cityData === null) {
            $.get('location.html', function (data) {
                cityHTML = data;
                $('#more-info').append(data);
            });
        } else {
            console.log("You already got the HTML");
        }
        if (cityData === null) {
            $.get('data.json', function (data) {
                cityData = data;
                //var firstCity = data.locations[0].location;
                $('#display-more').append("<p>" + cityData.locations[0].location + "</p>");
                $('#display-more').append("<button class='btn btn-info'>More info</button>");
            });
        } else {
            console.log(cityData.locations[0].population);
            console.log("You already got the HTML");
        }
    });
    $('#more-info').on('click', '.btn-info', function() {
        console.log("The click more info thing works");
        $('.location-container').empty();
        $('.location-container').append("<p>Population: " + cityData.locations[0].population + "</p>");
        $('.location-container').append("<p>Area: " + cityData.locations[0].area + "</p>");
        $('.location-container').append("<button class='btn btn-danger removeBtn'>Less Info</button>");
        $('.location-container').show();
    })
    $('#more-info').on('click', '.removeBtn', function() {
        console.log("remove click happened");
        $('.location-container').empty();
        $('.location-container').hide();
    });
});














