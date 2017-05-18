var app = app || {};

app.Flights = Backbone.Collection.extend({
    url: "/flights",

    model: app.Flight,

    initialize: function() {
        this.on("add", function(flight) {
            var fv = new app.FlightView({
                model: flight
            });
            fv.render();
        });
    }
});

// var flightsCollection = new app.Flights();

// flightsCollection.fetch().done(function() {
//     flightsCollection.each(function(flight) {

//         console.log(flight.get("origin"));
//     });
// });

