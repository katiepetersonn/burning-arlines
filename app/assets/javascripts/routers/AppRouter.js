var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routers: {
        "/flights": "initalizeFlights"
    },

    initalizeFlights: function() {
        var flightView = new app.FlightView();
        flightView.render();
    }
});