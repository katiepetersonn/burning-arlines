var app = app || {};

app.Airplanes = Backbone.Collection.extend({
    url: "/flights",

    model: app.Reservation,
});
