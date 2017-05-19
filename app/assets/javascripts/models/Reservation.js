var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',
  defaults: {
    column: '',
    row: '',
    user_id: '',
    flight_id: ''
  },
});
