var app = app || {};

app.router = new app.AppRouter();

$(function() {
    Backbone.history.start();

    app.flights = new app.Flights();
    app.flights.fetch();
});