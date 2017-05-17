var app = app || {};

app.Flights = Backbone.Collection.extend({
    url: "/flights",

    model: app.flight,

    initialize: function() {
        this.on("add", function(flight) {
            var fv = new app.FlightView({
                model: flight
            });
            fv.render();
        });
    }
});

