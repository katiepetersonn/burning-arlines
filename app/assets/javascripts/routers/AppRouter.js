var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        "": "initializeFlights"
    },

    initalizeFlights: function() {
        var av = new app.AppView();
        av.render();
    }
});
