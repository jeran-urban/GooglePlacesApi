$(".submit").on("click", function(event){
    event.preventDefault();
    $(".dataOnLocations").empty();

    // fill values of form
    var queryForApi = {
        customerName: $('#customerName').val().trim(),
        latitude: $('#latitude').val().trim(),
        longitude: $('#longitude').val().trim(),
        numberOfLocations: $('#numberOfLocations').val().trim(),
        locationType: $('#locationType').val().trim(),
        outputType: $('#outputType').val().trim(),
        language: $('#language').val().trim(),
    };

    // console.log(queryForApi);

    var currentURL = window.location.origin;

    $.get(currentURL + "/getplaces", queryForApi,
    function(data){
        console.log("data", data);
        
        $("#resultCount").html(data.length);
        data.forEach(function(location) {
             $(".dataOnLocations").append("<p>"+ location.name + "</p>");
        })
    });
    return true;
});
