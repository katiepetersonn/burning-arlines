var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routers: {
        "/flights": "initializeFlights",
    },

    initalizeFlights: function() {
        var appView = new app.AppView();
        appView.render();
    }

});
