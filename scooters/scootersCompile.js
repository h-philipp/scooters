
// Retrieve the template data from the hbs file
var source = document.getElementById("scooter-template").innerHTML;

var template = Handlebars.compile(source);
 
var data = { "scooters": [ 
    {
        "name": "Scooter1"
    },
    {
        "name": "Scooter2"
    },
    {
        "name": "Scooter3"
    },
    {
        "name": "Scooter4"
    }]
};

//set data
var result = template(data);

// Insert the HTML code into the page
$('#scooters').append(result);
