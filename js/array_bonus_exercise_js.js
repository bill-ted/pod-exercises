(function(){
    "use strict";

    // * BONUS:
    // * Create another string that would display your planets in an unordered
    // * list. You will need an opening AND closing <ul> tags around the entire
    // * string, and <li> tags around each planet.
    // *
    // var planetsUl = "<ul><li>" + planetsArray.join("</li></ul>") + "<ul><li>";
    //
    //     document.getElementById("good-time").innerTML = planetsUL;


    // var planetsUl = planets.join("<ul><li>" + planets[0] + "</li></ul")
// var planetsUl = "<ul><li>" + planets[0].join + "</li><li>" + planets[1].join + "</li><li>" + planets[2].join + "</li><li>" + planets[3].join + "</li><li>" + planets[4].join + "</li><li>" + planets[5].join + "</li><li>" + + planets[6].join + "</li><li>" + planets[7].join + "<li></li>" + planets[8].join + "</li></ul>"
    //console.log(planetsUl);
//Array manipulating exercise

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    var str = '<ul>';
    planets.forEach(function(planet) {
        str += '<li>'+ planet + '</li>';
    });
    str += '</ul>';
    console.log(str);
    str = $('#addList').html(str);




})();