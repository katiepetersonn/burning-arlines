var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routers: {
        '': "initalizeFlights"
        // "/flights": "initalizeFlights"
    },

    initalizeFlights: function() {
        var appView = new app.AppView( {
        collection: App.Flights
        });
    appView.render();
}
});

//on search run SearchInputView
