var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routers: 
        "/flights": "initializeFlights",
    },

    initalizeFlights: function() {
        var appView = new app.AppView();
        appView.render();
    }

});
        '': "initalizeFlights"
    },

    initalizeFlights: function() {
        var appView = new app.AppView( {
        collection: App.Flights
        });
    appView.render();
}
});
