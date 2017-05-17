var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routers: {
        "/flights": "initalizeFlights"
    },

    initalizeFlights: function() {
        var appView = new app.AppView();
        appView.render();
    }
});