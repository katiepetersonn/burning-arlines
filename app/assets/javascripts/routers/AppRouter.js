var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        "": "initializeFlights",
        "flight/:id": 'showFlight'
    },

    initializeFlights: function() {
        var av = new app.AppView({
            collection: app.flights
        });
        av.render();
    },

    showFlight: function(id) {
        var flight = app.flights.get(id);
        var flightView = new app.FlightView({
            model: flight
        });
        flightView.render();
    }
});
