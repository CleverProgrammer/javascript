API_KEY = "aab6920af6146ff38685b19cac503a5e";

/**
 * helper function for prettifying string formatting.
 * @returns string
 */
String.format = function() {
    // The string containing the format items (e.g. "{0}")
    // will and always has to be the first argument.
    var theString = arguments[0];

    // start with the second argument (i = 1)
    for (var i = 1; i < arguments.length; i++) {
        // "gm" = RegEx options for Global search (more than one instance)
        // and for Multiline search
        var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
    }

    return theString;
};

var URL = String.format("http://api.openweathermap.org/data/2.5/weather?APPID={0}&q={1}", API_KEY, "Chicago");

$(document).ready(function() {
    $.getJSON(URL, function(json) {
        console.log("Name: " + json["name"]);
        console.log("Speed: " + json["wind"]["speed"]);
        console.log("Temp: " + json["main"]["temp"]);
        console.log("Description: " + json["weather"][0]["description"]);
        });
});


/**
 * City, state, cloudy/sunny/rainy/etc, wind-speed, temperature, C VS. F.
/
var data = {
    "coord":{"lon":-87.65,"lat":41.85},
    "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
    "base":"cmc stations",
    "main":{"temp":278.17,"pressure":1017,"humidity":65,"temp_min":275.85,"temp_max":280.15},
    "wind":{"speed":1.5,"deg":160},
    "clouds":{"all":90},
    "dt":1451013612,
    "sys":{"type":1,
    "id":961,
    "message":0.0142,
    "country":"US",
    "sunrise":1451049390,
    "sunset":1451082297},
    "id":4887398,
    "name":"Chicago",
    "cod":200
};

console.log(data["name"]);
console.log(data["wind"]["speed"]);
console.log(data["main"]["temp"]);
console.log(data["weather"][0]["description"]);
*/

