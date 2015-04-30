var cityData = null;
var cityHTML = null;

$(document).ready(function() {
    $('#get-info-btn').on('click', function() {
        if (cityHTML === null) {
            $.get('location.html', function (data) {
                cityHTML = data;
                //$('#more-info').append(data);
                if(cityData) {
                    for (var i = 0; i < cityHTML.locations.length; i++) {
                        console.log("For loop: " + i);
                        $('.location-container').append("<h3 class='location-name>" + cityData.locations[i].location) + "</h3>";
                        $('.location-name').append("<button class='btn btn-info more-info'>More info</button>");
                    }
                }
            });
        } else {
            console.log("You already got the HTML");
        }

        if (cityData === null) {
            $.get('data.json', function (data) {
                cityData = data;
                //console.log("Here is city data: ", data);
                //console.log("Html data? ", cityHTML);



                if(cityHTML) {
                    for (var i = 0; i < cityData.locations.length; i++) {
                        //console.log("For loop2: " + i);

                        $('#cities-container').append(cityHTML);
                        //var context = $('#cities-container').children().last();
                        //
                        //context.find($('.location-container')).append("<h3 class='location-name>" + cityData.locations[i].location) + "</h3>";
                        //context.find($('.location-name')).append("<button class='btn btn-info more-info'>More info</button>");
                        $('#cities-container').children().last().find($('.location-name')).text(cityData.locations[i].location);
                        $('#cities-container').children().last().append('<button class="btn btn-info more-info' + i + '">More info</button>')
                    }
                }
            });
        } else {
            console.log(cityData.locations[0].population);
            console.log("You already got the HTML");
        }
    });
    $('#cities-container').on('click', '.more-info', function() {
        $('#display-more').empty();
        for(var i = 0; i < cityData.locations.length; i++) {
            //var $location = $(cityHTML);
            console.log("cities container: " + $('#cities-container'));
            console.log("display-more: " + $('#display-more'));

            $('#display-more').append("<p>Population: " + cityData.locations[i].population + "</p>");
            $('#display-more').append("<p>Area: " + cityData.locations[i].area + "</p>");
            $('#display-more').append("<button class='btn btn-danger removeBtn'>Less Info</button>");
            //$('#display-more').append($location);
            $('#display-more').show();
        }
    })
    $('#display-more').on('click', '.removeBtn', function() {
        $('#display-more').empty();
        $('#display-more').hide();
    })
});














