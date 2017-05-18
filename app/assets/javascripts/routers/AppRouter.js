var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        "": "initializeFlights"
    },

    initializeFlights: function() {
        var av = new app.AppView({
            collection: app.flights
        });
        av.render();
    }
});
