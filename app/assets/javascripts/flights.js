var app = app || {};

app.router = new app.AppRouter();

$(function() {
    app.flights = new app.Flights();
    app.flights.fetch();
    Backbone.history.start();
});