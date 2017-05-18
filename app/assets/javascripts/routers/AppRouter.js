var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        "/search": "initializeFlights"
    },

    initalizeFlights: function() {
        var appView = new app.AppView( {
        collection: App.Flights
        });
        appView.render();
    }
});
